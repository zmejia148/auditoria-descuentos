
# Checklist de revisión estática de requisitos

## Proyecto: Auditoría del módulo de descuentos

**Objetivo:** Identificar ambigüedades, inconsistencias y omisiones en los requisitos del módulo de descuentos mediante una revisión estática.

## Lista de verificación

| N.º | Pregunta de revisión | Cumple | Observación |

| 1 | ¿Cada requisito tiene un identificador único? | Sí | Los requisitos están identificados como R-01 a R-04. |
| 2 | ¿Los requisitos están redactados de manera clara y sin ambigüedades? | No | Se utilizan expresiones como "rápidamente" y "clientes importantes". |
| 3 | ¿Los requisitos contienen criterios de aceptación medibles? | No | No se especifican tiempos ni resultados esperados concretos. |
| 4 | ¿Se definen las condiciones para identificar a un cliente VIP? | No | No se establece quién puede recibir el descuento especial. |
| 5 | ¿Se especifica cómo calcular el descuento? | No | No se define completamente la fórmula ni el beneficio VIP. |
| 6 | ¿Se establecen restricciones para evitar descuentos inválidos? | Parcial | Existe una restricción general, pero faltan condiciones precisas. |
| 7 | ¿Se describen las excepciones relacionadas con promociones? | No | No se indica cuándo una promoción permite superar el precio. |
| 8 | ¿Los requisitos son consistentes entre sí? | Parcial | Las reglas de descuentos y promociones necesitan aclaración. |
| 9 | ¿Se puede verificar objetivamente el cumplimiento de cada requisito? | No | Faltan criterios de aceptación y valores esperados. |
| 10 | ¿Existe trazabilidad entre los requisitos originales y los propuestos? | Sí | Se establece correspondencia entre R-01 a R-04 y RF-01 a RF-04. |

## Resultado de la revisión

- Cumple: 2 criterios.
- No cumple: 6 criterios.
- Cumple parcialmente: 2 criterios.

## Conclusión

La revisión estática permitió identificar problemas de claridad, verificabilidad y completitud en los requisitos originales.

Las principales debilidades están relacionadas con la definición de clientes VIP, las condiciones de las promociones y los criterios para determinar si un resultado es correcto.

Se recomienda confirmar las reglas de negocio y los criterios de aceptación antes de implementar cambios funcionales en el módulo de descuentos.

Este checklist constituye una evidencia de la actividad de revisión estática de requisitos.
