const tempcontrol = document.getElementById("temperaturacontrol");
const temp = document.querySelector(".temperatura");
const led = document.querySelector(".luz");          //Led de prendido
var paleta = document.querySelectorAll(".paleta");
const botones = document.querySelectorAll(".botones");
var valor = 24;
var estadoMovido = 0;

function prender() {
    prenderdisplay();
    prenderpaletas();
    prenderled();
    ocultarbotones();
    prenderdisplaycontrol()
    sonidoaireprendido()
}

//animacion de las paletas

function prenderpaletas() {
    paleta.forEach(paleta => {
        if (led.classList.contains("prendido")) {
            paleta.classList.remove("prendidas");
            paleta.classList.remove("auto");
            paleta.classList.add("apagadas");
        } else {
            paleta.classList.add("prendidas");
            paleta.classList.remove("apagadas");

        }
    })
}

function auto() {
    paleta.forEach(paleta => {
        paleta.classList.toggle("auto")
    })
}

function mover() {
    console.log("entrando", estadoMovido);
    if (estadoMovido >= 0 && estadoMovido < 4) {
        switch (estadoMovido) {
            case 0:
                paleta.forEach(x => x.classList.remove("prendidas"));
                paleta.forEach(x => x.classList.add("posicion0"));
                estadoMovido++;
                break;
                
            case 1:
                paleta.forEach(x => x.classList.remove("posicion0"));
                paleta.forEach(x => x.classList.add("posicion1"));
                estadoMovido++;
                break;
            case 2:
                paleta.forEach(x => x.classList.remove("posicion1"));
                paleta.forEach(x => x.classList.add("posicion2"));
                estadoMovido++;
                break;
            case 3:
                paleta.forEach(x => x.classList.remove("posicion2"));
                paleta.forEach(x => x.classList.add("prendidas"));
                estadoMovido++;
                break;                
        }
    } else {
        estadoMovido = 0;
    }
}

//Activa o desactiva los botones

function ocultarbotones() {
    botones.forEach(botones => {
        if (led.classList.contains("prendido")) {
            botones.removeAttribute("disabled")

        } else {
            botones.setAttribute("disabled", "true")
        }
    })

}

//prende el led de prendido

function prenderled() {
    led.classList.toggle("prendido");
}

//prende el display del aire

function prenderdisplay() {
    if (led.classList.contains("prendido")) {
        temp.innerHTML = "--"
    } else {
        temp.innerHTML = valor + "°";
    }
}

//prende el display del Control

function prenderdisplaycontrol() {
    if (led.classList.contains("prendido")) {
        tempcontrol.innerHTML = valor;
    } else {
        tempcontrol.innerHTML = "--"
    }
}

// Subir y Bajar la Temperatura

function subir() {
    if (valor > 17 && valor < 31) {
        temp.innerHTML = ++valor + "°";
        tempcontrol.innerHTML = valor;
    }
}

function bajar() {
    if (valor > 18 && valor < 32) {
        temp.innerHTML = --valor + "°";
        tempcontrol.innerHTML = valor;
    }
}

//sonido aire prendido

function sonidoaireprendido() {
    var sonidoaire = document.getElementById("sonidoaire")
    sonidoaire.volume = 0.2;
    return sonidoaire.paused ? sonidoaire.play() : sonidoaire.pause();
}

//sonido botones

var beep = new Audio();
beep.src = "beep.m4a";


