var MinTemp = prompt("Diga-me a temperatura minima em graus celcius que deseja calcular");
var MaxTemp = prompt("Digite a temperatura maxima em graus celcus que deseja calcular");

if (MinTemp<MaxTemp && !(isNaN(MinTemp)) && !(isNaN(MaxTemp))){
    for (MinTemp; MinTemp<=MaxTemp; MinTemp++){
        var tempf = (MinTemp * (9/5)) + 32;
        console.log( MinTemp + "Graus Celsius são " + tempf + " graus fahrenheit");
    }}
else {
    console.log("Não cumpre os requisitos");
}
