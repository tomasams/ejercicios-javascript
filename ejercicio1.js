let tempCelsius = prompt("Ingrese un valor de Celsius: ")

let tempFarenheit = tempCelsius  * 1.8 + 32


if (tempFarenheit > 85) {
    console.log(`La temperatura es de ${tempFarenheit} por lo tanto la temperatura es alta`)
}else{
    if (tempFarenheit < 32){
        console.log(`La temperatura es de ${tempFarenheit} por lo tanto es Baja`)
    }else{
        console.log(`La temperatura es de ${tempFarenheit} por lo tanto es Moderada`)
    }
}
