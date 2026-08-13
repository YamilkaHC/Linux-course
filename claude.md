# Instrucciones de Sistema para Generacion de Curso Linux

## Objetivo del proyecto

Crear un sitio web estatico simple y de alto rendimiento que aloje un curso tecnico de Linux. El enfoque principal es facilitar la lectura rapida y la asimilacion directa para cumplir con una fecha limite estricta.

## Flujo de trabajo

- Paso 1: Analizar el texto fuente (un archivo .md por leccion en la carpeta `transcripciones/`).
- Paso 2: Transformar el contenido crudo aplicando obligatoriamente la metodologia pedagogica definida.
- Paso 3: Construir cada leccion como una pagina Astro en `src/pages/lecciones/<slug>.astro`, envuelta en `src/layouts/Layout.astro`.
- Paso 4: Reutilizar las clases y tokens ya definidos (no reinventar la linea grafica).
- Paso 5: Interconectar las lecciones mediante enlaces funcionales y registrar la leccion en el array `lecciones` de `src/pages/index.astro`.
- Paso 6: Ejecutar `npm run build` una vez al terminar para regenerar `dist/`.

## Metodologia pedagogica

- Extension estricta: Las lecciones deben tomar entre 5 y 10 minutos maximo de lectura. Si el contenido supera esta metrica, dividelo en dos o mas archivos.
- Apertura de leccion: Inicia siempre con 2 o 3 viñetas que indiquen exactamente que se aprendera y por que es importante tecnicamente.
- Cierre estructurado: Finaliza con un resumen de tres lineas y un quiz de tres preguntas. Las respuestas del quiz deben estar ocultas utilizando la etiqueta HTML <details>.
- Aplicacion practica: Cierra cada modulo completo con un reto tecnico aplicable en la terminal.
- Tono y lenguaje: Utiliza un tono directo en segunda persona. Elimina por completo el texto de relleno academico.
- Prioridad practica: Muestra siempre el ejemplo concreto o el caso de uso antes de explicar la definicion abstracta de un comando.
- Interconexion: Haz referencias cruzadas entre lecciones para mantener el contexto del aprendizaje.
- Ejercicios practicos prioritarios: no todas las unidades son practicas (algunas son conceptuales, como la introduccion). Pero cuando el tema involucra comandos o acciones en terminal, la leccion DEBE incluir ejercicios para que el lector practique e interiorice:
  - Durante la lectura: micro-ejercicios intercalados ("Pruebalo tu") justo despues de presentar cada comando o accion, para aplicar de inmediato.
  - Despues de la lectura: un bloque de practica final (antes del quiz) con 2-4 ejercicios acumulativos que combinen lo visto.
  - Los ejercicios usan comandos reales del material fuente; nunca inventar comandos inexistentes.

## Anatomia estandar de una leccion

Toda leccion sigue esta estructura fija (ver `src/pages/lecciones/01-que-es-linux.astro` como plantilla de referencia). Copia ese archivo y sustituye el contenido.

1. Encabezado: `<span class="etiqueta">Modulo X · Leccion Y</span>` + tiempo de lectura, `<h1>` con el titulo, y un parrafo-gancho de una linea.
2. Bloque "Que aprenderas": caja `bg-sand border border-line p-8 md:p-10` con 2-3 vinetas numeradas (que + por que).
3. Cuerpo: encabezados `<h2 class="font-display text-2xl font-bold mt-10">`; siempre caso concreto antes que definicion; tablas/SVG donde aclaren; cross-refs a otras lecciones con `<a href="/lecciones/...">`. En lecciones practicas, intercala micro-ejercicios "Pruebalo tu" justo despues de cada comando (caja `bg-sand border-l-2 border-ink p-4` con el comando y la meta).
4. Practica final (solo lecciones practicas): antes del resumen, un bloque con 2-4 ejercicios acumulativos que combinen lo aprendido; comandos reales del material fuente.
5. Resumen: seccion separada por `border-t border-line pt-8`, exactamente 3 parrafos cortos.
6. Quiz: 3 bloques `<details class="bg-white border border-line p-6">` con `<summary>` (pregunta) y respuesta oculta.
7. Navegacion: `<nav>` con `<a class="btn-secundario">` (anterior/inicio) y `<a class="btn-primario">` (siguiente).
8. Reto de terminal: solo al cierre del ultimo tema de cada modulo, en su propia pagina.

El cuerpo se envuelve en `<article class="prose-editorial">` dentro de `<Layout titulo=... descripcion=...>`.

## Linea grafica y UI

El diseño debe seguir un estilo editorial minimalista y calido similar a una revista impresa.

- Colores base obligatorios:
  - Fondo principal Cream: #FDFCFB
  - Fondo secundario Sand: #F4F1EA
  - Texto y botones principales Ink: #1A1A1A
  - Bordes y lineas Line: #E5E1D8
- Tipografia:
  - Titulos y frases destacadas: Playfair Display
  - Cuerpo de texto y elementos de UI: Inter
  - Importa ambas fuentes desde Google Fonts en la cabecera HTML.
- Componentes estructurales:
  - Boton primario: Fondo #1A1A1A, texto blanco, letras en mayuscula, fuente gruesa, espaciado amplio, esquinas rectas. Clases exactas a usar bg-[#1A1A1A] text-white text-xs uppercase font-bold tracking-[0.15em] px-8 py-4
  - Boton secundario: Fondo transparente, borde #E5E1D8, texto #1A1A1A, microtipografia identica al boton primario. Clases exactas a usar border border-[#E5E1D8] text-[#1A1A1A] text-xs uppercase font-bold tracking-[0.15em] px-8 py-4
  - Etiquetas: Fondo #F4F1EA, texto #1A1A1A, texto de 10px, mayusculas, negrita.
  - Tarjetas: Fondo blanco, borde #E5E1D8, padding amplio de p-8 a p-12, cero sombras.
- Espaciado: Aplica espacio negativo generoso. Usa separaciones amplias entre secciones con gap-8 o mb-12. El diseño debe respirar y evitar la saturacion visual.

## Especificaciones para SVG y Diagramas

- Colores de diagramas: Fondo #FDFCFB o totalmente transparente, trazos de linea en #1A1A1A, lineas auxiliares en #E5E1D8 y rellenos suaves en #F4F1EA.
- Tipografia interna: Usa Inter para etiquetas y Playfair Display para los titulos del diagrama.
- Estilo de trazo: Lineas finas de 1 a 1.5px. Composición limpia y estandar. Cero sombras y cero degradados.

## Estructura de archivos (proyecto Astro)

IMPORTANTE: este proyecto es un sitio Astro, NO HTML plano. No crear archivos .html sueltos en la raiz; Astro los ignora y el navegador sirve `dist/`.

- `src/pages/index.astro` — indice del curso (array `lecciones`).
- `src/pages/lecciones/<slug>.astro` — una pagina por leccion.
- `src/layouts/Layout.astro` — envoltorio con Header, Footer y fuentes.
- `src/components/` — Header.astro, Footer.astro.
- `src/styles/global.css` — clases y tokens (`btn-primario`, `btn-secundario`, `etiqueta`, `tarjeta`, `prose-editorial`).
- `tailwind.config.mjs` — colores (`cream/sand/ink/line`) y fuentes (`display/body`).
- `transcripciones/` — texto fuente crudo (un .md por leccion).
- `dist/` — salida generada por `npm run build` (no editar a mano).

## Reglas generales

- Ortografia: el contenido visible (lecciones e indice) se escribe en espanol con tildes correctas y signos de apertura (¿ ¡). Ignorar los avisos "Unknown word" del corrector del IDE: son severidad Information, no errores.
- No inventar comandos de Linux que no existan en el material fuente original.
- Reutilizar las clases/tokens existentes; no redefinir colores ni botones inline.
- Mantener el HTML semantico y legible en pantallas grandes y pequeñas.

## Eficiencia de tokens (mismo resultado, menos gasto)

Para producir cada leccion con el mismo estandar pero gastando menos tokens:

- Lee la transcripcion fuente UNA sola vez; no la releas. Si es larga, procesala de corrido.
- Crea la leccion con UN solo `Write` del archivo completo, no con muchos `Edit` incrementales. La plantilla ya existe: copiala mentalmente de `01-que-es-linux.astro`.
- NO releas un archivo despues de escribirlo o editarlo para "verificar"; la herramienta ya confirma el guardado.
- No listes ni explores `node_modules/`, `dist/` ni `.astro/`. Usa rutas directas conocidas (estan en este documento).
- Ignora los diagnosticos "Unknown word" del corrector; no gastes acciones corrigiendolos.
- Agrupa cambios independientes en una sola respuesta (varias tool calls en paralelo).
- Ejecuta `npm run build` UNA vez al final del lote de lecciones, no tras cada cambio. Filtra la salida (`| tail`).
- No repitas en el chat el contenido completo de la leccion; resume en pocas lineas que se hizo y pide feedback.
- Reutiliza el SVG de la plantilla adaptando solo textos/valores; no disenes diagramas desde cero salvo que el tema lo exija.
- Responde de forma concisa y directa; evita preambulos y repeticiones.
