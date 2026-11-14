
# Matriz de hallazgos y trazabilidad

## Proyecto: Auditoría estática del módulo de descuentos

**Objetivo:** Registrar los problemas identificados durante la revisión de requisitos y el análisis estático inicial, relacionándolos con su impacto, propuesta de mejora y artefacto correspondiente.

| ID | Problema identificado | Impacto | Propuesta de mejora | Artefacto | Estado |

| H-01 | R-01 utiliza el término ambiguo "rápidamente". | No permite comprobar objetivamente el tiempo de respuesta. | Definir un tiempo máximo medible y las condiciones de evaluación. | R-01 / RF-01 | Propuesto |
| H-02 | R-02 no define qué significa "clientes importantes". | Puede ocasionar descuentos incorrectos o inconsistentes. | Establecer criterios para identificar clientes VIP y definir su beneficio. | R-02 / RF-02 | Pendiente de confirmación |
| H-03 | R-03 no especifica las condiciones de las promociones. | Puede permitir descuentos no autorizados. | Definir las condiciones y autorizaciones para promociones especiales. | R-03 / RF-03 | Pendiente de confirmación |
| H-04 | R-04 no define qué constituye un resultado correcto. | Dificulta verificar los cálculos y la presentación de resultados. | Especificar la fórmula, los valores mostrados y el redondeo. | R-04 / RF-04 | Propuesto |
| H-05 | El código solo muestra un mensaje cuando el porcentaje supera el 100 %, pero continúa calculando. | Puede generar un total negativo o un descuento inválido. | Definir y aplicar la validación del porcentaje según las reglas de negocio. | src/descuentos.js, línea 4 / RF-03 | Pendiente de corrección |
| H-06 | Se utiliza una comparación no estricta (`==`). | Puede permitir conversiones implícitas de tipos y dificultar el mantenimiento. | Utilizar una comparación estricta (`===`). | src/descuentos.js, línea 3 | Detectado por ESLint |
| H-07 | Se utiliza `var` en dos declaraciones. | Reduce la claridad del alcance de las variables. | Sustituir `var` por `let` o `const` según corresponda. | src/descuentos.js, líneas 2 y 5 | Detectado por ESLint |
| H-08 | Dos condiciones `if` no utilizan llaves. | Dificulta la lectura y puede favorecer errores al modificar el código. | Agregar llaves a ambos bloques condicionales. | src/descuentos.js, líneas 3 y 4 | Detectado por ESLint |

## Relación entre requisitos y hallazgos

| Requisito original | Requisito propuesto | Hallazgos relacionados |

| R-01 | RF-01 | H-01 |
| R-02 | RF-02 | H-02 |
| R-03 | RF-03 | H-03, H-05 |
| R-04 | RF-04 | H-04 |

## Observaciones

- Los hallazgos H-01 a H-04 provienen de la revisión humana de requisitos.
- El hallazgo H-05 proviene de la inspección humana del código.
- Los hallazgos H-06, H-07 y H-08 agrupan los cinco errores reportados por ESLint.
- Las propuestas de requisitos aún requieren confirmar determinados supuestos del negocio.
- No se han realizado pruebas funcionales; el análisis corresponde a una revisión estática.

## Conclusión

La matriz permite relacionar los problemas detectados con sus posibles impactos y acciones de mejora. También facilita la trazabilidad entre los requisitos originales y los requisitos propuestos.

La combinación de revisión humana y análisis estático automatizado permite identificar problemas que una sola técnica podría pasar por alto.
