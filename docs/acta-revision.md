
# Acta de revisión técnica individual

## Proyecto
Auditoría estática del módulo JavaScript de descuentos.

## Modalidad
Autoinspección académica individual, mediante simulación de roles.

## Objetivo
Documentar observaciones técnicas sobre el código original y las correcciones realizadas.

## Participantes
La estudiante asume los roles de autora, revisora y registradora.

No participaron revisores externos.

## Comentario técnico 1

**Archivo:** src/descuentos.js

**Línea original:** 3

**Observación:** Se utiliza una comparación no estricta (`==`) para verificar si el cliente es VIP.

**Impacto:** La comparación permite conversiones implícitas de tipos y puede producir resultados inesperados.

**Recomendación:** Utilizar `===` para comparar estrictamente con el valor booleano `true`.

**Estado:** Corregido.

## Comentario técnico 2

**Archivo:** src/descuentos.js

**Línea original:** 4

**Observación:** Cuando el porcentaje supera el 100 %, el programa únicamente muestra un mensaje, pero continúa calculando el descuento.

**Impacto:** Puede generar resultados negativos o descuentos superiores al precio original.

**Recomendación:** Confirmar las reglas de validación y las excepciones de promociones antes de implementar la corrección.

**Estado:** Pendiente de confirmación de requisitos.

## Resultado de la revisión

Se documentaron dos comentarios técnicos derivados de la inspección individual.

El primer comentario corresponde a un defecto corregido y verificado mediante ESLint.

El segundo corresponde a un riesgo funcional que permanece pendiente de confirmación de las reglas de negocio.

## Conclusión

La revisión permitió diferenciar los problemas de codificación detectados por ESLint de los riesgos funcionales identificados mediante inspección humana.

La actividad fue individual y no constituye una revisión por pares realizada por participantes independientes.
