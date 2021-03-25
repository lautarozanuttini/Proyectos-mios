var alumno = prompt("Nombre del alumno");
var asistencia = prompt("Cantidad de asistencias");
var notatp1 = prompt("Notas TP1");
var notatp2 = prompt("Notas TP2");
var notaParcial1= prompt("Notas Parcial 1");
var notaParcial2= prompt("Notas Parcial 2");
var notaParcial3= prompt("Notas Parcial 3");

var notasTps = parseInt(notatp1) + parseInt(notatp2);
var notasParciales = parseInt(notaParcial1) + parseInt(notaParcial2) + parseInt(notaParcial3);

var notaFinal = (asistencia/ 2) + ((notasTps / 100)*30) + ((notasParciales / 100)* 20)
document.write(`La nota final de ${alumno}, ${asistencia}, ${notasTps}, ${notasParciales} es ${notaFinal}`)
