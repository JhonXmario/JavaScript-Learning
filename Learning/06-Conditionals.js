// Condicionales

let age = 12;
// if (Si pasa esto, entonces haz esto)
if (age > 17) {
    console.log("Eres mayor de edad");
}else{ // else (si no pasa lo anterior, entonces haz esto)
    console.log("Eres menor de edad");
}


let age2 = 12;
// if (Si pasa esto, entonces haz esto)
if (age2 > 17 && age2 < 50) {
    console.log("Eres mayor de edad");
}else if(age < 11){ // else if (si no pasa lo anterior, entonces haz esto)
    console.log("Eres menor de edad");
}else{ // else (si no pasa lo anterior, entonces haz esto)
    console.log("Eres un adolescente");
}

// Operadores termarios
const message = age == 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(message);

// Switch
let day = 2;
let dayname
switch(day){
    case 0:
        dayname = 'Lunes';
        break;
    case 1:
        dayname = 'Martes';
        break;
    case 2:
        dayname = 'Miercoles';
        break;
    case 3:
        dayname = 'Jueves';
        break; 
    case 4:
        dayname = 'Viernes';
        break
    case 5:
        dayname = 'Sabado';
        break;
    case 6:
        dayname = 'Domingo';
        break;
    default:
        dayname = 'Dia no valido';
}

console.log(dayname)