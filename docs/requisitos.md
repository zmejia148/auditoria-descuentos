
# Análisis y revisión de requisitos

## 1. Requisitos originales

| ID | Requisito original |

| R-01 | El descuento debe calcularse rápidamente. |
| R-02 | Los clientes importantes obtendrán un descuento especial. |
| R-03 | El descuento no puede superar el precio, excepto en promociones. |
| R-04 | Se debe mostrar el resultado correcto. |

## 2. Análisis de los requisitos

| ID | Problema identificado | Propuesta de mejora |

| R-01 | La expresión "rápidamente" no establece un tiempo medible. | Definir un tiempo máximo de respuesta. |
| R-02 | No se define quién es un cliente importante ni cuánto descuento recibe. | Establecer criterios para identificar clientes VIP y su beneficio. |
| R-03 | No se especifican las condiciones para autorizar promociones. | Definir las reglas y autorizaciones de las promociones. |
| R-04 | No se explica qué información debe mostrarse ni cómo calcularla. | Definir los valores que se mostrarán y las reglas de redondeo. |

## 3. Propuesta de requisitos funcionales verificables

| ID | Requisito propuesto |

| RF-01 | El sistema deberá calcular el descuento y el total en un tiempo máximo de 2 segundos bajo las condiciones de carga que se establezcan. |
| RF-02 | El sistema deberá identificar a los clientes registrados como VIP y aplicar el beneficio especial definido en la configuración del negocio. |
| RF-03 | El sistema deberá impedir que el descuento supere el precio original, excepto cuando exista una promoción activa y autorizada. |
| RF-04 | El sistema deberá presentar el precio original, el valor del descuento y el total a pagar con dos decimales, aplicando la regla de redondeo aprobada. |

## 4. Supuestos pendientes de confirmación

- El tiempo máximo de 2 segundos propuesto para RF-01 debe ser aprobado por el responsable del negocio.
- Se debe confirmar qué condiciones permiten clasificar a un cliente como VIP.
- Se debe confirmar si el beneficio VIP corresponde a un valor fijo o a un porcentaje.
- El código original suma 10 al descuento VIP, pero no existe un requisito que confirme que ese valor sea correcto.
- Se deben definir las condiciones para considerar una promoción activa y autorizada.
- Se debe confirmar la regla de redondeo y el formato monetario.

## 5. Conclusión

La revisión permitió identificar ambigüedades, falta de criterios medibles y condiciones de negocio no especificadas. La propuesta de requisitos verificables busca facilitar su validación y reducir el riesgo de errores durante el desarrollo. Los supuestos deberán confirmarse con el responsable del negocio antes de considerarse requisitos definitivos.
