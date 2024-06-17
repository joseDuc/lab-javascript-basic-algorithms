// Iteration 1: Names and Input

let hacker1 ="Meteroro";
let hacker2 ="Chrome";


console.log("The driver's name is " + hacker1);
console.log("The navigator is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters");
}else if(hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.o");
}else{
    console.log("Wow, you both have equally long names, XX characters!");
}

// Iteration 3: Loops
let s ="";
for (i=0; i<hacker1.length; i++){
    s = s + " " + hacker1[i];
}
console.log(s.toUpperCase());
s="";
for (i=0; i<hacker1.length; i++){
    s = hacker1[i] + " " + s;
}
console.log(s.toUpperCase());


/* busco la mínima longitud para comparar la mima cantidad de letras en las dos palabras (comenzando por la izq) */
let min=0;
if (hacker1.length < hacker2.length){
    min=hacker1.length;
}else if(hacker2.length < hacker1.length) {
    min=hacker2.length;
}else{
    min=hacker2.length; /*cualquier valor de longitud de las dos palabras me sirve (son igual de largas) */
}
console.log(min);

let primero="";/*aquí guardaré el resultado (si no son iguales)*/
i=0;/*inicializo a 0 el contador de posiciones utilizado anteriormente*/
if(hacker1!=hacker2){
    while (i<min){
        console.log("Iterando en while");
        if(hacker1.charCodeAt(i) < hacker2.charCodeAt(i) ){
            console.log("Comparando letra " + (i+1) + " es menor en " + hacker1);
            primero=hacker1;
            break;
        }else if(hacker2.charCodeAt(i) < hacker1.charCodeAt(i)){
            console.log("Comparando letra " + (i+1) + " es menor en " + hacker2);
            primero=hacker2;
            break;
        }else{
            console.log("Comparando letra " + (i+1) + " son iguales");
            if(hacker1.length===min){
                primero=hacker1;
            }
        }
        i++;
    }
    if (primero===hacker1){
        console.log("The driver's name goes first. Es " + primero);
    }else if (primero===hacker2){
        console.log("Yo, the navigator goes first, definitely. Es " + primero);
    }
    
}else{
    console.log("What?! You both have the same name?");
}




