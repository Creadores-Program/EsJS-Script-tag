# EsJS-Script-tag
Ejecuta EsJS y EsHtml fácilmente con una etiqueta Html!

# Ejemplo de Uso:

## Instalación:
Simplemente añada está etiqueta a su Html:
```html
<script type="module" src="https://cdn.jsdelivr.net/gh/Creadores-Program/EsJS-Script-tag@1.0.1/src/org/CreadoresProgram/EsJsHtml/EsjsScriptTag.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
## Uso (EsJS):
Simplemente en su Html añada una o varias etiquetas script con atributo type igual a "codigo/esjs"
ejemplo:
```html
<!--sin src-->
<script type="codigo/esjs">
  consola.escribir("hola mundo!")
</script>

<!--con src-->
<script type="codigo/esjs" src="https://example.com/main.esjs"></script>

<!--tipo modulo-->
<script type="codigo/esjs" mode="modulo">
  //tu codigo
</script>
```
## Uso (EsHtml):
Simplemente en su Html añada una o varias etiquetas div con atributo type igual a "codigo/eshtml"
ejemplo:
```html
<div type="codigo/eshtml">
    <principal>
      <t1>EsHTML: HTML en Español</t1>

      <parrafo>
        Fecha y hora actual: <negrita><segmento id="fecha-actual">Cargando...</segmento></negrita>
      </parrafo>

      <t2>Ejemplos en EsHTML/EsJS</t2>

      <lista>
        <lista-elemento>
          <enlace referencia="/contador">Contador Reactivo</enlace>
        </lista-elemento>
      </lista>
    </principal>
</div>
```
