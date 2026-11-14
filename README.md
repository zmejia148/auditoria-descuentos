
# Auditoría estática de un módulo JavaScript

## Verificación y Validación de Software - Unidad 1

### Descripción

Este proyecto presenta una auditoría estática de un módulo JavaScript encargado de calcular descuentos, el cual tiene como objetivo identificar las ambigüedades en los requisitos, detectar defectos mediante inspección del código y aplicar reglas de análisis estático utilizando ESLint.

## Objetivos

- Revisar los requisitos originales del módulo proponiendo requisitos claros y verificables.
- Elaborar un checklist de inspección en el cual se vayan registrando hallazgos y su trazabilidad.
- Detectar problemas de codificación mediante ESLint.
- Documentar las correcciones y los riesgos pendientes.

## Tecnologías utilizadas

- JavaScript
- Node.js
- npm
- ESLint
- Visual Studio Code
- Git y GitHub

## Estructura del proyecto

    auditoria-descuentos/
    ├── src/
    │   └── descuentos.js
    ├── docs/
    │   ├── requisitos.md
    │   ├── checklist.md
    │   ├── matriz-hallazgos.md
    │   └── inspeccion-pares.md
    ├── evidencias/
    │   ├── lint-inicial.txt
    │   └── lint-final.txt
    ├── eslint.config.js
    ├── package.json
    ├── package-lock.json
    ├── .gitignore
    └── README.md

## Instalación

Para reproducir el análisis estático:

1. Clonar o descargar el repositorio.
2. Abrir la carpeta del proyecto.
3. Instalar las dependencias:

    npm install

4. Ejecutar ESLint:

    npm run lint

## Reglas de ESLint

| Regla | Objetivo |

| no-var | Evitar declaraciones con var. |
| eqeqeq | Exigir comparaciones estrictas. |
| no-unused-vars | Identificar variables sin utilizar. |
| curly | Exigir llaves en estructuras de control. |

## Resultados

La auditoría inicial identificó cinco errores:

- Dos errores de no-var.
- Un error de eqeqeq.
- Dos errores de curly.

Después de las correcciones, ESLint reportó cero errores y cero advertencias.

Los resultados están disponibles en la carpeta evidencias.

## Inspección del código

La inspección se desarrolló individualmente mediante una simulación académica de roles, documentando ocho hallazgos agrupados, relacionados con prácticas de codificación, validaciones y reglas de negocio.

Se corrigieron los problemas de estilo detectados por ESLint. Los hallazgos relacionados con descuentos VIP, promociones y validaciones funcionales permanecen pendientes de confirmación de requisitos.

## Alcance y limitaciones

La actividad corresponde a una auditoría estática.

No se ejecutaron pruebas funcionales ni se comprobó el comportamiento del módulo mediante casos de prueba.

El cumplimiento de las reglas de ESLint no garantiza la ausencia de defectos funcionales.

## Conclusión

La revisión de requisitos, la inspección del código y el uso de ESLint permitieron identificar problemas de manera temprana.

El análisis automatizado contribuyó a mejorar la calidad del código, mientras que la revisión humana permitió identificar riesgos que requieren aclaraciones de negocio antes de realizar nuevas correcciones.
