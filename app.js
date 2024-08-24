let var1 = /a|e|i|o|u/g;
let var2 = /ai|enter|imes|ober|ufat/g;
let buscar =["a","e","i","o","u"];
let cambiar =["ai","enter","imes","ober","ufat"];
let datosIngresados=""
let texto="";

function encriptar() {
    //document.getElementById("imag").style.display="none";
    //document.getElementById("salidaDeTexto").style.height = '510px';
    datosIngresados = document.getElementById('entradaUsuario').value;
    //comprobarMayuscula();
    cambio(var1,buscar,cambiar,datosIngresados);
    
}

function desencriptar() {
    datosIngresados = document.getElementById('entradaUsuario').value;
    cambio(var2,cambiar,buscar);
}




function mostrarTexto(dato) {
    //document.getElementById("salidaDeTexto").textContent = none;
    
    //document.getElementById("salidaDeTexto").style.display="none";
    let salidaDeTexto=document.getElementById("salidaDeTexto");
    if (salidaDeTexto !==null) {
        salidaDeTexto.remove();
    }
    /*if (document.getElementById("salidaDeTexto") !== null) {
        document.getElementById('salidaDeTexto').remove();
        
    }*/
        
    document.getElementById("elementoDePrueba").textContent = dato;
    
    document.getElementById("botonCopiarDatos").style.display = 'inline';

    //elementoDePrueba
}


function cambio(valor1,dato2,dato3) {
    let patron=/[A-Z0-9áéíóú*+-]/g;
    
    if(patron.test(datosIngresados)){
        document.getElementById('exclama').style.filter= "sepia(1) saturate(100)";
    }
    else{
        document.getElementById('exclama').style.filter= "sepia(0) saturate(0)";
        let datoProcesado = datosIngresados.replaceAll(valor1, function (x) {
                return dato3[dato2.indexOf(x)];
        }); 
        texto=datoProcesado;
        mostrarTexto(datoProcesado);
    }
    
}


const copiar = async () => {
    try {
      await navigator.clipboard.writeText(texto);
      //console.log('Contenido copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  }

