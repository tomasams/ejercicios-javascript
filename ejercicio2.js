let peso = prompt("Ingrese su peso")

let altura = prompt("Ingrese su altura")

let imc = peso / (altura**2)

console.log(imc)

if (imc < 18.5){
    console.log(`Usted esta en un peso bajo`)
}else{
    if (imc >= 18.5 && imc <= 24.9){
        console.log("Su peso esta dentro de lo normal")
    }else{
        if (imc >= 25 && imc <= 29.9){
            console.log("Usted en en sobrepeso")
        }else{
            console.log("Usted esta en condicion de Obesidad")
        }
        
    }
}