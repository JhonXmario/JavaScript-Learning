// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let age = 19;
if (age > 18){
    console.log("Jhon Mario");
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "Jhon";
let password = "1234"
if (user == "Jhon" && password == "1234"){
    console.log("Bienvenido");
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 5;
if (number > 0) {
    console.log("El numero es positivo");
} else if (number < 0){
    console.log("El numero es negativo");
} else{
    console.log("El numero es cero");
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
age = 14;
if (age >= 18) {
    console.log("Puedes votar");
} else{
    console.log("No puedes votar, te faltan", 18 - age, "anios");
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let persona = 18
let edad = persona >= 18 ? console.log("Adulto") : console.log("Menor");
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "Marzo"
if (mes == "Marzo" || mes == "Abril" || mes == "Mayo" || mes == "Junio") {
    console.log("Primavera");
} else if(mes == "Julio" || mes == "Agosto" || mes == "Septiembre"){
    console.log("Verano");
} else if(mes == "Octubre" || mes == "Noviembre" || mes == "Diciembre"){
    console.log("Otonio");
} else if(mes == "Enero" || mes == "Febrero"){
    console.log("Invierno");
} else{
    console.log("Mes no valido");
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes == "Abril" || mes == "Junio" || mes == "Septiembre" || mes == "Noviembre") {
    console.log("30 dias");
} else if(mes == "Enero" || mes == "Marzo" || mes == "Mayo" || mes == "Julio" || mes == "Agosto" || mes == "Octubre" || mes == "Diciembre"){
    console.log("31 dias");
} else if (mes == "Febrero"){
    console.log("28 dias");
} else{
    console.log("Nothing")
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let language = 3
switch(language){
    case 0:
        console.log("Hello");
        break
    case 1:
        console.log("Ola");
        break
    case 2:
        console.log("Bonjour");
        break
    case 3:
        console.log("Ciao");
        break
    case 4:
        console.log("Ahoj");
        break
    default:
        console.log("ni idea")

}
// 9. Usa un switch para hacer de nuevo el ejercicio 6
mes = 3
switch(mes){
    case 0:
        console.log("Invierno");
        break
    case 1:
        console.log("Invierno");
        break
    case 2:
        console.log("Primavera");
        break
    case 3:
        console.log("Primavera");
        break
    case 4:
        console.log("Primavera");
        break
    case 5:
        console.log("Primavera");
        break
    case 6:
        console.log("Verano");
        break
    case 7:
        console.log("Verano");
        break
    case 8:
        console.log("Verano");
        break
    case 9:
        console.log("Otono");
        break
    case 10:
        console.log("Otono");
        break
    case 11:
        console.log("Otono");
        break
    default:
        console.log("ni idea")
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7
mes = 5
switch(mes){
    case 0:
        console.log("31");
        break
    case 1:
        console.log("28");
        break
    case 2:
        console.log("30");
        break
    case 3:
        console.log("31");
        break
    case 4:
        console.log("30");
        break
    case 5:
        console.log("31");
        break
    case 6:
        console.log("30");
        break
    case 7:
        console.log("31");
        break
    case 8:
        console.log("30");
        break
    case 9:
        console.log("31");
        break
    case 10:
        console.log("30");
        break
    case 11:
        console.log("31");
        break
    default:
        console.log("ni idea")
}