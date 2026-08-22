# TRATADO ACADÉMICO: MÓDULO 11. APLICACIONES INFORMÁTICAS DE CONTABILIDAD
**Diplomado en Contabilidad Financiera - Universidad Católica Santa Rosa (UCSAR)**  
**Facilitador: MSc. Frank Clemente**

---

## UNIDAD DIDÁCTICA 1. ESTRUCTURA DE LOS PROGRAMAS CONTABLES Y SISTEMAS ERP

### 1. Prestaciones y Funcionalidades de las Aplicaciones Contables Modernas
El software contable moderno no es un simple libro de registro digital; es el núcleo del **Sistema de Información Gerencial (SIG)**. Sus prestaciones esenciales incluyen:
- **Automatización de Asientos:** Cálculo inmediato del Impuesto al Valor Agregado (IVA - 16%), retenciones y totales.
- **Integración Multientorno (ERP):** Conexión directa entre ventas, facturación, compras, inventario y cuentas por cobrar/pagar.
- **Gestión de Arquitectura Multi-Sucursal (6.000 SKUs):** Sincronización en tiempo real de inventarios entre tiendas físicas y casa matriz, control de transferencias y reorden de stock.
- **Emisión de Estados Financieros NIIF:** Generación automatizada del Balance de Comprobación, Estado de Situación Financiera y Estado de Resultados Integrales bajo VEN-NIF.

### 2. Tipos de Software Disponibles y Criterios de Selección
- **Sistemas Contables On-Premise (Servidor Local):** Instalados en servidores locales (ej. Galac, Profit Plus, Saint, a2 Contabilidad). Brindan control físico directo pero requieren infraestructura propia.
- **Sistemas Contables en la Nube (SaaS - Cloud Based):** Accesibles 24/7 vía navegador (ej. Alegra, QuickBooks, Xero, Odoo Cloud). Ideal para trabajo remoto y sincronización inmediata.

**Factores Críticos para Elegir un Software Contable:**
1. **Adaptabilidad a la Legislación Fiscal Nacional (SENIAT / VEN-NIF):** Capacidad de generar el Libro de Ventas/Compras y reportes de retenciones de IVA/ISLR.
2. **Escalabilidad y Volumen:** Soporte para múltiples usuarios concurrentes y miles de ítems (SKUs).
3. **Seguridad y Trazabilidad:** Registros de auditoría (*Audit Logs*), encriptación de datos y segregación de funciones.

---

## UNIDAD DIDÁCTICA 2. EL ALTA DE LAS EMPRESAS EN LA APLICACIÓN INFORMÁTICA

### 1. Introducción de los Datos Correspondientes (Parametrización Inicial)
El proceso de "Alta de Empresa" requiere ingresar los siguientes datos maestros:
- **Identificación Fiscal:** Razón Social, R.I.F. (SENIAT), Domicilio Fiscal y N.I.T.
- **Definición del Ejercicio Económico:** Fecha de inicio y cierre fiscal (ej. 01/01 al 31/12 u Ejercicios Irregulares).
- **Parametrización de Moneda Funcional:** Configuración obligatoria del Bolívar (BS) como moneda base de registro bajo VEN-NIF (BA VEN-NIF N° 2 y 7).

### 2. Tratamiento de Ejercicios Irregulares y Migración de Sistemas
- **Empresas de Nueva Constitución (Ejercicios Fraccionados):** Si una empresa inicia operaciones a mitad de año (ej. 15 de septiembre), DEBE configurarse un **Ejercicio Irregular del 15/09 al 31/12** y declarar el ISLR de ese lapso ante el SENIAT. Omitirlo constituye un ilícito tributario sancionado por el Código Orgánico Tributario (COT) con multas en Moneda de Mayor Valor (MTMMV) y clausura del establecimiento.
- **Migración a Mitad de Ejercicio Fiscal (Método del Asiento de Saldos de Corte):** Si una empresa en marcha cambia de software a mitad de año (ej. 1° de Julio), NO se re-digita el pasado. Se parametriza el año completo, se carga un **Asiento de Saldos Iniciales al 30/06** con el Balance de Comprobación auditado, se migran los auxiliares de inventarios y cuentas por cobrar/pagar pendientes, y se archivan en físico los libros SENIAT generados por el sistema anterior.

---

## UNIDAD DIDÁCTICA 3. GESTIÓN DE LAS CUENTAS CONTABLES Y ÁRBOLES JERÁRQUICOS

### 1. Estructura Jerárquica del Árbol de Cuentas (5 Niveles)
Las cuentas contables se organizan en 5 niveles jerárquicos:
1. **Nivel 1 (Título / Masa Patrimonial):** `1.` ACTIVO.
2. **Nivel 2 (Sub-Título):** `1.1` ACTIVO CORRIENTE.
3. **Nivel 3 (Rubro VEN-NIF):** `1.1.01` EFECTIVO Y EQUIVALENTES DE EFECTIVO. *(Sumadora)*.
4. **Nivel 4 (Cuenta de Mayor):** `1.1.01.02` BANCOS NACIONALES. *(Sumadora)*.
5. **Nivel 5 (Cuenta de Detalle / Registro Imputable):** `1.1.01.02.001` BANCO MERCANTIL CTA. CTE. N° 0105-... *(Registradora)*.

### 2. Regla de Imputación y Evolución del Plan de Cuentas
- **Regla de Oro:** Los asientos contables de diario se registran **EXCLUSIVAMENTE en el Nivel 5 (Cuentas Auxiliares de Detalle)**. Las cuentas de Nivel 1 a 4 son acumuladoras/sumatorias.
- **Evolución por Apertura de Nuevas Cuentas Bancarias:** Para añadir una segunda cuenta en la misma entidad financiera, NUNCA se convierte una cuenta registradora histórica en sumadora. Se mantiene el Nivel 4 como sumador y se crea la cuenta registradora `1.1.01.02.002 Banco de Venezuela Cta Cte 2` en el Nivel 5.

---

## UNIDAD DIDÁCTICA 4. IMPLEMENTACIÓN Y CIBERSEGURIDAD CONTABLE (REGLA 3-2-1-1-0)

### 1. Amenazas de Ransomware en Entornos Financieros
El **Ransomware** es un software malicioso que encripta (secuestra) las bases de datos contables (`.sql`, `.dbf`, `.mdf`) y exige rescate en criptomonedas. Los respaldos tradicionales conectados a la red local también son destruidos por el virus.

### 2. La Regla 3-2-1-1-0 de Seguridad Contable
Para garantizar la continuidad del negocio bajo estándares ISO 27001 y COBIT 2019, se aplica la norma **3-2-1-1-0**:
- **3 Copias de los datos:** 1 activa en producción + 2 copias de respaldo.
- **2 Medios distintos:** Almacenar en al menos 2 soportes físicos separados (Servidor local + NAS/Disco Externo).
- **1 Copia Offsite en la Nube:** Mantener 1 copia fuera de las instalaciones físicas (nube encriptada).
- **1 Copia Inmutable / Air-Gapped:** Guardar 1 copia físicamente aislada de la red que no se puede sobreescribir (protección total contra Ransomware).
- **0 Errores de Prueba:** Realizar pruebas periódicas de restauración exitosa sin errores de datos.
