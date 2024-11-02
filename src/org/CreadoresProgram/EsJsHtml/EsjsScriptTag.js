import * as esJscore from 'https://esm.run/@es-js/core';
import * as esJseshtml from 'https://esm.run/@es-js/eshtml';
window.addEventListener("load", function(){
  let etiquetas = document.getElementsByTagName('script');
  for(var i = 0; i < etiquetas.length; i++){
    if(etiquetas[i].hasAttribute("type") && etiquetas[i].getAttribute("type") == "text/esjs"){
      try{
        let codigoCom = esJscore.compile(etiquetas[i].innerHTML);
        let elemento = document.createElement("script");
        elemento.innerHTML = codigoCom;
        document.body.appendChild(elemento);
      }catch(error){
        console.error(error);
      }
    }
  }
  let etiquetasH = document.getElementsByTagName("div");
  for(var u = 0; u < etiquetasH.length; u++){
    if(etiquetasH[i].hasAttribute("type") && etiquetasH[i].getAttribute("type") == "text/eshtml"){
      try{
        etiquetasH[i].innerHTML = esJseshtml.compile(etiquetasH[i].innerHTML);
      }catch(error){
        console.error(error);
      }
    }
  }
});
