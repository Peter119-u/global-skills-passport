-- Global Skills Passport (GSP) – Student Profiles Schema & Row Level Security
-- Run this migration in your Supabase SQL Editor before enabling registration/login.
-- Passwords are NEVER stored in this table; Supabase Auth (auth.users) manages credentials securely.

create table if not exists public.students (
  id uuid primary key references auth.users(id) on delete cascade,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  country_of_residence text not null,
  nationality text,
  location text,
  account_type text not null check (account_type in ('refugee_displaced', 'other_learner')),
  accepted_terms_at timestamptz not null default now(),
  registration_date timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Keep updated_at current on profile edits
create or replace function public.set_students_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_students_updated_at on public.students;
create trigger trg_students_updated_at
  before update on public.students
  for each row
  execute function public.set_students_updated_at();

-- Enable Row Level Security (RLS)
alter table public.students enable row level security;

-- Students can view only their own profile
drop policy if exists "Students can view own profile" on public.students;
create policy "Students can view own profile"
  on public.students
  for select
  to authenticated
  using (auth.uid() = id);

-- Students can insert only their own profile
drop policy if exists "Students can insert own profile" on public.students;
create policy "Students can insert own profile"
  on public.students
  for insert
  to authenticated
  with check (auth.uid() = id);

-- Students can update only their own profile
drop policy if exists "Students can update own profile" on public.students;
create policy "Students can update own profile"
  on public.students
  for update
  to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Automatically provision student profile on auth.users creation
-- (Supports both immediate sign-in and email-confirmation workflows)
create or replace function public.handle_new_student()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.students (
    id,
    first_name,
    last_name,
    email,
    phone,
    country_of_residence,
    nationality,
    location,
    account_type,
    registration_date
  )
  values (
    new.id,
    coalesce(nullif(trim(new.raw_user_meta_data ->> 'first_name'), ''), 'Student'),
    coalesce(nullif(trim(new.raw_user_meta_data ->> 'last_name'), ''), ''),
    coalesce(new.email, ''),
    coalesce(new.raw_user_meta_data ->> 'phone', ''),
    coalesce(new.raw_user_meta_data ->> 'country_of_residence', ''),
    nullif(trim(new.raw_user_meta_data ->> 'nationality'), ''),
    nullif(trim(new.raw_user_meta_data ->> 'location'), ''),
    case
      when new.raw_user_meta_data ->> 'account_type' in ('refugee_displaced', 'other_learner')
        then new.raw_user_meta_data ->> 'account_type'
      else 'other_learner'
    end,
    coalesce(new.created_at, now())
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created_student on auth.users;
create trigger on_auth_user_created_student
  after insert on auth.users
  for each row
  execute function public.handle_new_student();
