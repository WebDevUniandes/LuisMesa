
window.onload = function() {
    Particles.init({
        selector: '#myCanvas',
        color: '#0f9976',
        connectParticles:true,
        speed:0.4,
        maxParticles:100
    });
};

function ponerParticula(event)
{
    Particles.ponerParticula(event.clientX,event.clientY);
}

AOS.init({
    easing: 'ease-in-out-sine'
});



var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var div =document.getElementById('habilidades');
var ceroY=Math.floor(div.offsetHeight.toString()/4);
var ceroX=Math.floor(div.offsetWidth.toString()/4);

var lenguajes =[];
lenguajes.push(crearLenguaje('JavaScript',[0,0+ceroY],64,blue));
lenguajes.push(crearLenguaje('HTML',[-50,50+ceroY],32,purple));
lenguajes.push(crearLenguaje('CSS',[70,30+ceroY],25,green));
lenguajes.push(crearLenguaje('Java',[70,-55+ceroY],45,orange));
lenguajes.push(crearLenguaje('Play!',[30,-70 +ceroY],25,purple));
lenguajes.push(crearLenguaje('Node.js',[-10,70 +ceroY],25,red));
lenguajes.push(crearLenguaje('Scala',[-40,-60 +ceroY],30,green));
lenguajes.push(crearLenguaje('SQL',[-65,-35 +ceroY],25,red));


function crearLenguaje(a,b,c,d)
{
    var lenguaje = {
        nombre : a,
        posicion  : b,
        tamanio  : c,
        color  : d
    };
    return lenguaje;
}

drawCircles(lenguajes);
bounceBubbles();
bubbleShape = 'circle';

function iniciarMail()
{
    emailjs.init("user_WOBjkAcfsq3489qh2A2p2");
}
function sendMail()
{
    // emailjs.init("user_WOBjkAcfsq3489qh2A2p2");
    var nombreContacto=document.getElementById("nombreContacto").value;
    var mailContacto=document.getElementById('mailContacto').value;
    var mensajeContacto=document.getElementById('mensajeContacto').value;
    emailjs.send("default_service","prueba123",{name: nombreContacto+"  "+mailContacto, notes: mensajeContacto})
    .then( function(response)
            {
                alert("Tu correo se ha enviado, te contactare en breve.");
                console.log(nombreContacto+"  "+mailContacto+"  "+mensajeContacto);
            },
            function(err)
            {
                alert("El proceso ha fracasado :/ porfavor intenta comunicarte por los otros medios");
                console.log("FAILED. error=", err);
            });;
}


