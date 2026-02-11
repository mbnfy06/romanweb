# Conectar Formulario a Google Sheets (Excel)

Sigue estos pasos para crear tu "Base de Datos" gratuita en Google Sheets y conectar tu formulario.

## Paso 1: Preparar la Hoja de Cálculo
1. Ve a **Google Sheets** (sheets.google.com) y crea una **hoja nueva**.
2. Ponle nombre, por ejemplo: `Impact Channel Leads`.
3. Renombra la pestaña de abajo (que suele llamarse "Hoja 1" o "Sheet1") a: **Respuestas** (respetando mayúsculas).
4. En la primera fila (A1, B1, C1...), escribe los encabezados exactos:
   - A1: `Fecha`
   - B1: `Nombre`
   - C1: `Empresa`
   - D1: `Email`
   - E1: `Telefono`
   - F1: `Servicio`
   - G1: `Mensaje`

## Paso 2: Crear el Script
1. En la hoja de cálculo, ve al menú **Extensiones** > **Apps Script**.
2. Se abrirá una pestana nueva con código. Borra todo lo que haya y pega esto:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Respuestas');
  
  // Si no se envían datos, devolver error
  if (!e || !e.parameter) {
    return ContentService.createTextOutput(JSON.stringify({result: 'error', error: 'No data'})).setMimeType(ContentService.MimeType.JSON);
  }

  var params = e.parameter;
  
  // Orden de los datos según las columnas de tu hoja
  var rowData = [
    new Date(), // Columna A: Fecha
    params.nombre,
    params.empresa,
    params.email,
    params.telefono,
    params.servicio,
    params.mensaje
  ];
  
  sheet.appendRow(rowData);
  
  return ContentService.createTextOutput(JSON.stringify({result: 'success'}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Dale al icono del disquete (Guardar) y por nombre al proyecto pon `FormHandler`.

## Paso 3: Publicar el Script (¡Importante!)
1. Arriba a la derecha, haz clic en **Implementar** > **Nueva implementación**.
2. En la ventana que sale:
   - **Seleccionar tipo**: Elige "Aplicación web" (icono de engranaje).
   - **Descripción**: `v1`.
   - **Ejecutar como**: `Yo` (tu email).
   - **Quién tiene acceso**: **Cualquier usuario** (Esto es CRUCIAL para que funcione desde la web).
3. Haz clic en **Implementar**.
4. Te pedirá "Autorizar acceso". Dale a **Revisar permisos**, elige tu cuenta, y si sale una alerta de seguridad, dale a **Configuración avanzada** > **Ir a FormHandler (no seguro)** (es seguro, es tu propio código) > **Permitir**.
5. Al final te dará una **URL de la aplicación web** (empieza por `https://script.google.com/...`).
6. **COPIA ESA URL**.

## Paso 4: Dámela
Pásame esa URL por el chat o pégala en el código donde te indique.
