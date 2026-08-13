# Curso Linux

👉 **Entra al curso: https://yamilkahc.github.io/Linux-course/**

Sitio estático con un curso técnico de Linux en español: 80 lecciones, prácticas de campo orientadas a soporte de servidores en producción, retos de autoevaluación y un glosario de comandos.

Construido con [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com). Salida `static`: HTML puro, sin JavaScript de cliente.

> ### Fuente del contenido
>
> El temario está basado en el curso **«Curso de Linux desde cero para principiantes»** del canal de YouTube **INFORMATICONFIG**:
>
> - Canal: https://www.youtube.com/@informaticonfig333
> - Lista de reproducción: https://www.youtube.com/playlist?list=PL2Z95CSZ1N4FKsZQKqCmbylDqssYFJX5A
>
> Este repositorio es un cuaderno de estudio personal, **sin afiliación ni respaldo** del autor original. Las explicaciones y el temario son suyos; aquí solo están reescritos en formato de lectura. Si el material te sirve, mira los vídeos originales y apoya al canal.
>
> Detalle de autoría, licencias y procedimiento de retirada: [CREDITOS.md](CREDITOS.md).

## Requisitos

- Node.js 18 o superior
- npm

## Puesta en marcha

```bash
npm install     # instala dependencias
npm run dev     # servidor de desarrollo en http://localhost:4321
npm run build   # genera el sitio estático en dist/
npm run preview # sirve dist/ para revisar el resultado del build
```

## Estructura del proyecto

```
src/
  pages/
    index.astro           Índice del curso (array `lecciones`)
    practicas.astro       9 misiones prácticas de soporte de producción
    retos.astro           6 rondas · 45 retos de autoevaluación
    comandos.astro        Glosario de comandos por categoría
    lecciones/            80 páginas, una por lección (NN-slug.astro)
  layouts/Layout.astro    Envoltorio: Header, Footer, fuentes, metadatos
  components/             Header.astro, Footer.astro
  styles/global.css       Tokens y clases reutilizables
transcripciones/          Texto fuente crudo (un .md por vídeo)
public/assets/            Estáticos servidos tal cual
dist/                     Salida del build (generada, no editar)
```

## Contenido

| Sección   | Ruta                | Qué es                                                                                                 |
| --------- | ------------------- | ------------------------------------------------------------------------------------------------------ |
| Lecciones | `/lecciones/<slug>` | Temario completo, de "qué es Linux" a scripting en Bash (`for`, `while`, `case`)                       |
| Prácticas | `/practicas`        | Ejercicios con el Linux del día a día: logs de PAGOS, CATALOGO, INVENTARIO, ENVIOS y NOTIFICA por SSH  |
| Retos     | `/retos`            | Mismo contexto que las prácticas, pero solo enunciados; pista y solución ocultas en `<details>`        |
| Comandos  | `/comandos`         | Referencia rápida de todos los comandos del curso                                                      |

Cada lección incluye un bloque "Qué aprenderás", micro-ejercicios "Pruébalo tú" intercalados, práctica final acumulativa, resumen de tres párrafos, quiz de tres preguntas con respuestas ocultas y navegación anterior/siguiente.

### Prioridad de estudio

Las lecciones del índice pueden llevar una marca:

- `etiqueta-saltar` (rojo) — se puede saltar
- `etiqueta-arribita` (amarillo) — leer por encima
- sin marca — estudiar en serio

## Añadir una lección

1. Copia `src/pages/lecciones/01-que-es-linux.astro` como plantilla y sustituye el contenido.
2. Guárdala como `src/pages/lecciones/<NN>-<slug>.astro`.
3. Registra la entrada en el array `lecciones` de `src/pages/index.astro`:

```js
{
  slug: '81-mi-leccion',
  titulo: 'Título de la lección',
  resumen: 'Una línea sobre qué cubre.',
  minutos: 8,
}
```

4. Ejecuta `npm run build`.

## Diseño

Estilo editorial minimalista. Los tokens viven en `tailwind.config.mjs`; no definas colores ni botones inline.

| Token   | Valor     | Uso                       |
| ------- | --------- | ------------------------- |
| `cream` | `#FDFCFB` | Fondo principal           |
| `sand`  | `#F4F1EA` | Fondo secundario, cajas   |
| `ink`   | `#1A1A1A` | Texto y botones primarios |
| `line`  | `#E5E1D8` | Bordes y separadores      |

Tipografía: Playfair Display (`font-display`) para títulos, Inter (`font-body`) para el cuerpo y la UI.

Clases reutilizables en `src/styles/global.css`: `btn-primario`, `btn-secundario`, `etiqueta`, `etiqueta-saltar`, `etiqueta-arribita`, `tarjeta`, `prose-editorial`.

## Convenciones

- El contenido visible se escribe en español con tildes y signos de apertura (`¿` `¡`).
- No se inventan comandos que no aparezcan en el material fuente de `transcripciones/`.
- Nada de archivos `.html` sueltos: Astro los ignora y el navegador sirve `dist/`.
- Las guías completas de contenido y estilo están en [CLAUDE.md](CLAUDE.md).

## Créditos y licencia

- Contenido educativo: basado en el curso de **INFORMATICONFIG** en YouTube. Todos los derechos del material original pertenecen a su autor. Ver [CREDITOS.md](CREDITOS.md).
- Código del sitio: licencia MIT, ver [LICENSE](LICENSE).

Si representas al canal y quieres que este repositorio se modifique o se retire, abre una incidencia o escribe a yamilkahcosme@hotmail.com.
