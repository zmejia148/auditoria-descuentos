
# Registro de inspección estática del código

## 1. Objetivo

Identificar defectos y riesgos del módulo de descuentos mediante inspección estática y análisis automatizado con ESLint, sin ejecutar pruebas funcionales.


## 2. Roles de inspección

La actividad se desarrolla individualmente mediante una simulación académica de los roles de inspección.

- Autor: responsable de presentar y explicar el código original.
- Revisor: rol asumido por la estudiante para identificar defectos mediante revisión estática y ESLint.
- Secretario o registrador: rol asumido por la estudiante para documentar los hallazgos, su severidad, evidencia, acciones propuestas y estado.

### Modalidad de trabajo

La inspección se realiza de manera individual, simulando las responsabilidades de los diferentes roles.

Los hallazgos se obtienen mediante el análisis del código fuente y la herramienta ESLint, sin ejecutar pruebas funcionales.

No se afirma la participación de revisores externos.


## 3. Registro de hallazgos

| ID | Hallazgo | Severidad | Evidencia | Origen | Acción propuesta | Estado Anterior |Nuevo Estado |

| IP-01 | Uso de `var` en las variables descuento y total. | Baja | Líneas 2 y 5 | ESLint: no-var | Sustituir por let o const según corresponda. | Abierto | Corregido |
| IP-02 | Comparación no estricta con `==`. | Media | Línea 3 | ESLint: eqeqeq | Utilizar comparación estricta. | Abierto |  Corregido |
| IP-03 | Condiciones if sin llaves. | Baja | Líneas 3 y 4 | ESLint: curly | Agregar llaves a ambos bloques. | Abierto |  Corregido |
| IP-04 | Un porcentaje superior a 100 solo genera un mensaje y no detiene el cálculo. | Alta | Línea 4 | Inspección humana | Definir y aplicar la validación correspondiente. | Pendiente de regla de negocio |
| IP-05 | No existe validación explícita del precio ni de los tipos de entrada. | Alta | Líneas 1 y 2 | Inspección humana | Definir entradas válidas y comportamiento ante valores inválidos. | Pendiente de regla de negocio |
| IP-06 | Se agrega un valor fijo de 10 al descuento VIP sin respaldo en los requisitos originales. | Alta | Línea 3 | Inspección humana | Confirmar el beneficio VIP antes de modificar la fórmula. | Pendiente de confirmación |
| IP-07 | No se implementa una condición explícita para promociones autorizadas. | Media | Líneas 1 a 7 | Inspección humana | Definir cómo se identifican y autorizan las promociones. | Pendiente de regla de negocio |
| IP-08 | No se especifica el tratamiento de decimales monetarios. | Media | Líneas 2 a 6 | Inspección humana | Confirmar las reglas de precisión y redondeo. | Pendiente de confirmación |

## 4. Resultados de ESLint

La ejecución inicial de ESLint identificó cinco errores:

- Dos errores de la regla no-var.
- Un error de la regla eqeqeq.
- Dos errores de la regla curly.

La regla no-unused-vars no generó advertencias.

La evidencia automatizada se encuentra en evidencias/lint-inicial.txt.

## 5. Diferencia entre análisis automatizado e inspección humana

ESLint permitió identificar incumplimientos de reglas de codificación, como el uso de var, comparaciones no estrictas y ausencia de llaves.

La inspección humana permitió identificar riesgos relacionados con las reglas del negocio, como el descuento VIP, la validación de porcentajes y las promociones.

Estos problemas funcionales no pueden resolverse correctamente sin confirmar primero los requisitos correspondientes.

## 6. Seguimiento

Los hallazgos permanecerán abiertos hasta que se apliquen las correcciones justificadas o se confirme la regla de negocio.

La evidencia final de ESLint se documentará después de las correcciones.

### Resultado de la segunda ejecución de ESLint

Después de realizar las correcciones de estilo en el archivo src/descuentos.js, se ejecutó nuevamente ESLint.

Resultados obtenidos:

- Auditoría inicial: 5 errores y 0 advertencias.
- Auditoría final: 0 errores y 0 advertencias.
- Errores iniciales corregidos: 5 de 5.

Las correcciones realizadas incluyen el reemplazo de var por let o const, el uso de comparaciones estrictas y la incorporación de llaves en las condiciones if.

La evidencia se encuentra en evidencias/lint-final.txt.

Los hallazgos relacionados con validaciones, descuentos VIP y promociones continúan pendientes de confirmación de las reglas de negocio.

No se realizaron pruebas funcionales durante esta actividad.


## 7. Conclusión

La inspección estática permitió identificar ocho hallazgos agrupados, incluyendo problemas de codificación y riesgos funcionales.

El uso conjunto de ESLint y revisión humana contribuye a detectar defectos de manera temprana y a mejorar la mantenibilidad del software.
