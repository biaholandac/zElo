-- Banco do zElo no Supabase.
-- Como usar: no painel do Supabase, abra SQL Editor, cole este arquivo inteiro e clique em Run.
-- Pode rodar de novo sem problema: ele só cria o que ainda não existe e refaz as regras.
--
-- Cada tabela tem regras de acesso (RLS). A chave "anon" que fica no site só consegue
-- fazer o que estas regras deixam: cada pessoa lê e muda só o que é dela, e o fórum
-- pode ser lido por quem entrou na conta.

-- Perfil de quem usa: nome, papel e as respostas das perguntas iniciais
create table if not exists public.perfis (
  id uuid primary key references auth.users (id) on delete cascade,
  nome text not null default '',
  papel text not null default 'responsavel' check (papel in ('responsavel', 'pcd', 'voluntario')),
  dados jsonb not null default '{}'::jsonb,
  atualizado_em timestamptz not null default now()
);

-- Atendimentos marcados pela família
create table if not exists public.agendamentos (
  id text primary key,
  dono uuid not null default auth.uid() references auth.users (id) on delete cascade,
  prof_id text not null,
  dia date not null,
  hora text not null,
  status text not null default 'confirmado' check (status in ('confirmado', 'realizado', 'cancelado')),
  dados jsonb not null default '{}'::jsonb,
  atualizado_em timestamptz not null default now()
);
create index if not exists agendamentos_dono on public.agendamentos (dono);

-- Tópicos e respostas do fórum
create table if not exists public.topicos (
  id text primary key,
  autor uuid not null default auth.uid() references auth.users (id) on delete cascade,
  dados jsonb not null,
  criado_em timestamptz not null default now()
);
create table if not exists public.respostas (
  id text primary key,
  topico_id text not null,
  autor uuid not null default auth.uid() references auth.users (id) on delete cascade,
  dados jsonb not null,
  criado_em timestamptz not null default now()
);
create index if not exists respostas_topico on public.respostas (topico_id);

-- Perguntas que a Ana não soube responder (só com o aceite opcional da pessoa)
create table if not exists public.perguntas_ana (
  id bigint generated always as identity primary key,
  autor uuid not null default auth.uid() references auth.users (id) on delete cascade,
  texto text not null check (char_length(texto) <= 300),
  criado_em timestamptz not null default now()
);

alter table public.perfis enable row level security;
alter table public.agendamentos enable row level security;
alter table public.topicos enable row level security;
alter table public.respostas enable row level security;
alter table public.perguntas_ana enable row level security;

drop policy if exists "perfil: ler o seu" on public.perfis;
drop policy if exists "perfil: criar o seu" on public.perfis;
drop policy if exists "perfil: mudar o seu" on public.perfis;
create policy "perfil: ler o seu" on public.perfis for select to authenticated using (id = auth.uid());
create policy "perfil: criar o seu" on public.perfis for insert to authenticated with check (id = auth.uid());
create policy "perfil: mudar o seu" on public.perfis for update to authenticated using (id = auth.uid()) with check (id = auth.uid());

drop policy if exists "agenda: ler os seus" on public.agendamentos;
drop policy if exists "agenda: criar os seus" on public.agendamentos;
drop policy if exists "agenda: mudar os seus" on public.agendamentos;
create policy "agenda: ler os seus" on public.agendamentos for select to authenticated using (dono = auth.uid());
create policy "agenda: criar os seus" on public.agendamentos for insert to authenticated with check (dono = auth.uid());
create policy "agenda: mudar os seus" on public.agendamentos for update to authenticated using (dono = auth.uid()) with check (dono = auth.uid());

drop policy if exists "forum: ler topicos" on public.topicos;
drop policy if exists "forum: criar topico" on public.topicos;
create policy "forum: ler topicos" on public.topicos for select to authenticated using (true);
create policy "forum: criar topico" on public.topicos for insert to authenticated with check (autor = auth.uid());

drop policy if exists "forum: ler respostas" on public.respostas;
drop policy if exists "forum: responder" on public.respostas;
create policy "forum: ler respostas" on public.respostas for select to authenticated using (true);
create policy "forum: responder" on public.respostas for insert to authenticated with check (autor = auth.uid());

-- A pessoa só grava; quem lê a lista é a equipe, pelo painel do Supabase
drop policy if exists "ana: guardar pergunta" on public.perguntas_ana;
create policy "ana: guardar pergunta" on public.perguntas_ana for insert to authenticated with check (autor = auth.uid());
