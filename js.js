
// Variables
var arrayImagenes=new Array();
var contador=1;
var intervalo;

//Al cargar la página
$(document).ready(function(){
	arrayImagenes[0] = new Image();
	arrayImagenes[0].src='img/publicidad.jpg';
	arrayImagenes[1] = new Image();
	arrayImagenes[1].src='img/publicidad2.jpg';
	arrayImagenes[2]=new Image();
	arrayImagenes[2].src='img/publicidad3.png';
    
  intervalo=setInterval(function (){control()},7000);
});
// POR DEFECTO: EN 7000                         ^
//                                              |
//                                              |


// Actualiza el contador
function actualizarContador (){
	var contadorReal=contador%arrayImagenes.length;
	ponerImagen(contadorReal);
	contador++;
}
// Hacer que aparezca y desaparezca la publicidad
function control(){
	fadeOut();
	setTimeout(function(){actualizarContador()},300);
	fadeIn();
}

// Colocar las imagenes

function ponerImagen(contador){
$("#publi").attr("src",arrayImagenes[contador].src);	
}

// Funcion para configurar la desaparicion de la imagen
function fadeOut(){
$("#publi").fadeOut(300);
}

// Funcion para configurar la aparicion de la imagen
function fadeIn(){
$("#publi").fadeIn(300);
}


// Activar o desactivar el scroll 
 $('#autoscroll').click(function(){activateScroll();});


//Activar - Desactivar scroll//
var scrolling = true;

function activateScroll(){
    if (scrolling){
        scrolling = false;
        $('#autoscroll').text('Scroll: OFF');
    }else {
        scrolling = true;
        $('#autoscroll').text('Scroll: ON ');  
    }
}

// Cargar el archivo JSON
var numjson = 1;

// Cargar noticias al hacer el scroll
$(window).scroll(function () {
    if (scrolling) {
        if($(window).scrollTop() + $(window).height() + 5 >= $(document).height()) {
            if (numjson < 4) {
                //loading div show
                $("#loading").fadeIn();
                //carga json
                $.getJSON("https://rawgit.com/" + numjson + ".json", function (jsonObject) {
                    buildrow(jsonObject);
                    //loading div hide
                    $("#loading").fadeOut();
                }); numjson++;
            }
        }
    }
});

// Cargar mas noticias a partir del archivo JSON

function cargar() {
    if (numjson < 4) {
        //loading div show
        $("#loading").fadeIn();
        //carga json
        $.getJSON("https://rawgit.com/" + numjson + ".json", function (jsonObject) {
            buildrow(jsonObject);
            //loading div hide
            $("#loading").fadeOut();
        }); numjson++;
    }
};