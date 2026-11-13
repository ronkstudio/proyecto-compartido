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

3. Ir a **Authentication → URL Configuration**:
   - En **Site URL** poner `https://ronkstudio.github.io/proyecto-compartido/`.
   - En **Redirect URLs** sumar `https://ronkstudio.github.io/proyecto-compartido/**` (con los dos asteriscos, para que el enlace del mail funcione desde cualquier pantalla de la guía).
4. Ir a **Project Settings → API** (o **Data API** / **API Keys**) y copiar dos datos: la **Project URL** y la clave **anon public** (también puede aparecer como *publishable*).
5. **No pegarlos en el repositorio.** Cargarlos en GitHub: en el repositorio `proyecto-compartido`, **Settings → Secrets and variables → Actions → pestaña Variables → New repository variable**:
   - Nombre `SUPABASE_URL`, valor: la Project URL.
   - Nombre `SUPABASE_ANON_KEY`, valor: la clave anon public.
6. Publicar de nuevo: en **Actions → Publicar la guía → Run workflow** (o esperar a la próxima publicación, que corre sola dos veces por día).

Listo: al abrir la guía, en "Mi cuenta" aparece el campo para crear la cuenta con el mail. `config.js` en el repositorio queda vacío; la publicación escribe los datos solo en la copia publicada (paso "Encender las cuentas" de `.github/workflows/publicar-guia.yml`).

## Por qué la clave no va en el repositorio (decidido el 13/11/2026, tarjeta #140)

La regla del repositorio dice que no van claves. La clave **anon public** de Supabase está hecha para ir a la vista (cualquiera que abra la guía la puede ver, y solo deja hacer lo que permite la regla del paso 2), pero igual no se sube: se carga en las variables de GitHub y la publicación la pone sola en cada copia publicada. Así se respeta la regla y nadie tiene que acordarse de pegarla.

Hay otra clave en Supabase que se llama **service_role** (o *secret*). Esa sí es secreta: **nunca** va en la guía, ni en el repositorio, ni en las variables de GitHub.

## Lo que falta

- Probar todo con un proyecto real.
- Entrar con Google (hoy solo hay enlace por mail).
- Un botón para que la persona borre su cuenta entera. Hoy puede borrar lo guardado; borrar el mail registrado hay que hacerlo desde el panel de Supabase.
- Un texto corto de privacidad que diga qué se guarda. En la Argentina, guardar mails es guardar datos personales: conviene tenerlo antes de abrir las cuentas al público.
