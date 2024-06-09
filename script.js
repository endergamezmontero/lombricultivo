var estado = "";
var temperatura = Math.round(Math.random()*(40-15)+parseInt(15));
var humedad = Math.round(Math.random()*(100-10)+parseInt(10));
/*var pH = Math.round(Math.random()*(14-0)+parseFloat(0));*/
var pH = parseFloat(Math.round(Math.random()*(14)));

if (temperatura >= 15 && temperatura <=20)
{
    t="Temperatura Baja";
    te="Low Temperature";
}
if (temperatura > 20 && temperatura <=35)
{
    t="Temperatura Normal";
    te="Normal Temperature";
}
if (temperatura > 35)
{
    t="Temperatura Alta";
    te="High Temperature";
}

if (humedad >= 10 && humedad <= 40)
{
    h="Humedad Baja";
    he="Low Humidity";
}
if (humedad > 40 && humedad <= 80)
{
    h="Humedad Normal";
    he="Normal Humidity";
}
if (humedad > 80)
{
    h="Humedad Alta";
    he="High Humidity";
}

if (pH >=0 && pH <= 6.5)
{
    p="pH Acido";
    pe="Low pH";
}
if (pH > 6.5 && pH <= 7.5)
{
    p="pH Ideal";
    pe="Normal pH";
}
if (pH > 7.5)
{
    p="pH Alcalino";
    pe="High pH";
}

document.getElementById('hablar').addEventListener("click",()=>{
    decir(document.getElementById("texto").value);
});

document.getElementById('datos').addEventListener("click",()=>{
    leer_datos(temperatura,humedad,pH);
    
});

document.getElementById('actualizar').addEventListener("click",()=>{
    window.location.reload();
    
});

document.getElementById('traducir').addEventListener("click",()=>{
    say(document.getElementById("texto").value);
});

document.getElementById('dato').addEventListener("click",()=>{
    read_data(temperatura,humedad,pH);
    
});



function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   /* var message = (new SpeechSynthesisUtterance(texto));
    message.lang = 'en-GB';*/
}

function say(texto){
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = texto;
    utterance.lang = 'en-UK';
    const speechSynthesis = window.speechSynthesis;
    speechSynthesis.speak(utterance)
}

function leer_datos(temperatura, humedad, pH){
    document.getElementById('temp').value=temperatura;
    document.getElementById('hume').value=humedad;
    document.getElementById('pH').value=pH;
    document.getElementById('texto').value="El invernadero tiene"+" "+t+", "+" "+h+" "+"y"+" "+p;
}

function read_data(temperatura, humedad, pH){
    document.getElementById('temp').value=temperatura;
    document.getElementById('hume').value=humedad;
    document.getElementById('pH').value=pH;
    document.getElementById('texto').value="The Greenhouse has"+" "+te+", "+" "+he+" "+"and"+" "+pe;
}