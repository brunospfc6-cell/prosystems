create table if not exists leads (
  id serial primary key,
  name text not null,
  email text not null,
  phone text,
  company text,
  interest text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists quotes (
  id serial primary key,
  user_id text not null,
  interest text not null,
  company text,
  phone text,
  message text not null,
  status text not null default 'recebida',
  created_at timestamptz not null default now()
);
create index if not exists quotes_user_id_idx on quotes (user_id);

create table if not exists tickets (
  id serial primary key,
  user_id text not null,
  subject text not null,
  body text not null,
  status text not null default 'aberto',
  created_at timestamptz not null default now()
);
create index if not exists tickets_user_id_idx on tickets (user_id);
