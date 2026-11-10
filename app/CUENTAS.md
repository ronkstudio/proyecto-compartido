# Cuentas de usuario

Tarjeta #35. La app ya tiene lista la pantalla "Mi cuenta", pero las cuentas están **apagadas**. Acá dice cómo encenderlas.

**Importante:** esta parte no se pudo probar contra un servidor real. Cuando se encienda, hay que probar todo el recorrido (pedir el enlace, entrar, guardar el viaje, abrirlo en otro dispositivo, cerrar sesión).

## Cómo funciona

- La persona escribe su mail y le llega un enlace para entrar. **No hay contraseñas.**
- Lo único que se guarda de ella es **su mail y su viaje** (los lugares guardados, los días y su perfil de viaje). Nada más.
- Sirve para tener el mismo viaje en el celular y en la compu.
- Sin cuenta, la app funciona igual: todo queda guardado en el dispositivo.

Usamos Supabase, un servicio que tiene un plan gratis y se ocupa de los mails y de guardar los datos.

## Pasos para encenderlas

Esto lo tiene que hacer una persona, no Claude: hay que crear una cuenta en un servicio.

1. Entrar a [supabase.com](https://supabase.com), crear una cuenta y un proyecto nuevo (el plan gratis alcanza).
2. En el proyecto, ir a **SQL Editor**, pegar esto y tocar **Run**. Crea el lugar donde se guarda el viaje de cada persona y hace que cada una vea solo lo suyo:

   ```sql
   create table viajes (
     user_id uuid primary key references auth.users (id) on delete cascade,
     datos jsonb not null,
     actualizado timestamptz not null default now()
   );
   alter table viajes enable row level security;
   create policy "cada persona ve y cambia solo su viaje" on viajes
     for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
   ```

3. Ir a **Authentication → URL Configuration** y poner en "Site URL" la dirección donde está publicada la app.
4. Ir a **Project Settings → API** y copiar dos datos: la **Project URL** y la clave **anon public**.
5. Pegarlos en `config.js`, entre las comillas de `supabaseUrl` y `supabaseAnonKey`.

Listo: al abrir la app, en "Mi cuenta" aparece el campo para entrar con el mail.

## Para decidir entre los dos

La regla del repositorio dice que no van claves ni contraseñas. La clave **anon public** de Supabase es un caso raro:

- Está hecha para ir a la vista: cualquiera que abra la app la puede ver, y no da permiso para nada que no esté permitido por la regla del paso 2.
- Pero es una clave, y la regla es la regla.

Dos caminos posibles:

| Camino | A favor | En contra |
|---|---|---|
| Pegarla en `config.js` y subirla al repositorio | Simple. Es el uso normal de Supabase | Hay que aceptar una excepción a la regla |
| No subirla: pegarla solo en la copia que se publica | Se respeta la regla tal cual | Hay que acordarse de pegarla en cada publicación |

Hay otra clave en Supabase que se llama **service_role**. Esa sí es secreta: **nunca** va en la app ni en el repositorio.

## Lo que falta

- Probar todo con un proyecto real.
- Entrar con Google (hoy solo hay enlace por mail).
- Un botón para que la persona borre su cuenta entera. Hoy puede borrar lo guardado; borrar el mail registrado hay que hacerlo desde el panel de Supabase.
- Un texto corto de privacidad que diga qué se guarda. En la Argentina, guardar mails es guardar datos personales: conviene tenerlo antes de abrir las cuentas al público.
