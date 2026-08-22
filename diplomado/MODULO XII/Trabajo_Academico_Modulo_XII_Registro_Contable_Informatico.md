# TRATADO ACADÉMICO: MÓDULO 12. REGISTRO CONTABLE A TRAVÉS DE APLICACIONES INFORMÁTICAS
**Diplomado en Contabilidad Financiera - Universidad Católica Santa Rosa (UCSAR)**  
**Facilitador: MSc. Frank Clemente**

---

## UNIDAD DIDÁCTICA 1. INTRODUCCIÓN DE DATOS CONTABLES Y ASIENTOS PREDEFINIDOS

### 1. Utilidades y Funciones de los Asientos Contables Digitales
El registro contable en aplicaciones informáticas garantiza la partida doble en tiempo real, la validación de la equidad de montos (Debe = Haber) y la inalterabilidad cronológica del comprobante diario.

### 2. Cálculo Automático del IVA y Plantillas Predefinidas
Las aplicaciones incorporan plantillas de asientos tipo que calculan y desglosan automáticamente:
- **Débito Fiscal IVA (16%):** Al registrar una factura de venta, el sistema acredita la cuenta de Ingresos y la cuenta de Débito Fiscal IVA (`2.1.02.01.001`).
- **Crédito Fiscal IVA (16%):** Al registrar una compra, se debita la cuenta de Inventario/Gastos y la cuenta de Crédito Fiscal IVA (`1.1.04.01.001`).
- **Validación de R.I.F. y Correlativo:** Exigencia obligatoria de registrar el R.I.F. del tercero y el número de factura fiscal antes de guardar el asiento para garantizar la deducibilidad del tributo.

---

## UNIDAD DIDÁCTICA 2. GESTIÓN DE LIBROS CONTABLES Y FISCALES SENIAT

### 1. Emisión Digital del Libro Diario, Mayor y Balances
- **Libro Diario Digital:** Registro cronológico de comprobantes con asignación de número correlativo inalterable (Código de Comercio Art. 36 al 44).
- **Libro Mayor Digital:** Agrupación acumulada por cada código del árbol de cuentas a 5 niveles.
- **Balance de Comprobación:** Verificación de sumas y saldos antes de los procesos de cierre.

### 2. Libros Fiscales SENIAT y Actualización Legal 2026 (Providencia 00084)
- **Marco Legal Vigente (Providencia 00071 / 00102):** Con la emisión de la **Providencia Administrativa SNAT/2026/00084 (Gaceta Oficial N° 7.049 Extraordinario)**, la Administración Tributaria **DEROGÓ EXPRESAMENTE la Providencia SNAT/2024/000121**.
- **Impacto para la Empresa y el Contador:** El estándar único legal para la emisión de Libros de Compras y Ventas de IVA y medios de facturación retorna exclusivamente al régimen de la **Providencia N° 00071**.
- **Registro de Facturas Anuladas:** Las facturas anuladas DEBEN incluirse en el Libro de Ventas conservando la secuencia numérica correlativa, con monto en cero (`0,00 BS`), marcadas como "ANULADA" y conservando los ejemplares físicos/digitales soporte.
- **Ajustes y Correcciones:** NUNCA se borran asientos pasados. Las diferencias de meses cerrados se ajustan mediante **Notas de Crédito o Débito Fiscal** con su propio correlativo en el período en curso.

---

## UNIDAD DIDÁCTICA 3. REGULARIZACIÓN Y LIQUIDACIÓN DEL IVA

### 1. Compensación Mensual entre Débito Fiscal y Crédito Fiscal SENIAT
Al cierre de cada mes, el software calcula la compensación de los impuestos indirectos:
- **Caso A (Débito Fiscal > Crédito Fiscal):** Surge una cuota tributaria a pagar al SENIAT.  
  *Asiento:* Debitar Débito Fiscal (`2.1.02.01`), Acreditar Crédito Fiscal (`1.1.04.01`) y Acreditar IVA por Pagar SENIAT (`2.1.02.03`).
- **Caso B (Crédito Fiscal > Débito Fiscal):** Surge un Excedente de Crédito Fiscal para el mes siguiente.  
  *Asiento:* El excedente no utilizado se registra en la cuenta de Activo Corriente **Excedente de Crédito Fiscal IVA** para ser compensado legalmente en la declaración de la Forma 30 del mes subsiguiente.

---

## UNIDAD DIDÁCTICA 4. CIERRE FISCAL Y DEL EJERCICIO ECONÓMICO (ISLR 30%)

### 1. Pasos del Cierre Fiscal Automatizado
1. **Cancelación de Ingresos:** Debitar las cuentas de Ingresos contra la cuenta transitoria **Ganancias y Pérdidas**.
2. **Cancelación de Gastos:** Acreditar las cuentas de Gastos y Costos contra **Ganancias y Pérdidas**.
3. **Cálculo del ISLR (30%):** Deducción de la provisión del Impuesto sobre la Renta sobre la utilidad contable ajustada.
4. **Traspaso al Patrimonio:** El resultado neto resultante se traslada a la cuenta patrimonial **Utilidades Retenidas** o **Resultados Acumulados**.

---

## UNIDAD DIDÁCTICA 5. CUENTAS ANUALES ESTADOS FINANCIEROS (VEN-NIF)

### 1. Emisión Automatizada de Estados Financieros NIIF
- **Estado de Situación Financiera (Balance General):** Clasificación en Activos, Pasivos y Patrimonio a la fecha de cierre.
- **Estado de Resultados Integrales:** Medición del rendimiento económico del ejercicio.
- **Validación de Cuadre:** Ecuación fundamental `Total Activo = Total Pasivo + Patrimonio`.

---

## UNIDAD DIDÁCTICA 6. RESPONSABILIDAD LEGAL, CONFIDENCIALIDAD Y ÉTICA PROFESIONAL

### 1. Responsabilidad Legal y Código de Comercio
- **Conservación de Libros (Art. 44 del Código de Comercio):** Obligatoriedad de conservar todos los libros contables y comprobantes digitales durante al menos **10 años**.
- **Código de Ética del Contador Público (FCCPV):** Responsabilidad civil, administrativa y penal por veracidad de cifras.

### 2. Confidencialidad y Segregación de Roles
- **Segregación de Funciones en el Software:** Configuración de perfiles diferenciados (Facturación, Tesorería, Contador General y Auditor) para evitar fraudes y garantizar la integridad interna.
