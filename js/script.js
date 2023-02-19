function calculate(){
    let weightCurrent = document.getElementById('weightCurrent').value;
    let heightCurrent = document.getElementById('heightCurrent').value;
    let button = document.getElementById('button')
    let imc = weightCurrent/(heightCurrent*heightCurrent)
    
    let result= ""
    if(imc< 18.5)
    {
        result= ("Baixo peso")
    }
    else if(imc< 24.9)
    {
        result= ("peso Normal")
    }
    else if(imc< 29.99)
    {
        result= ("Sobrepeso")
    }
    else if(imc< 34.99)
    {
        result= ("Obesidade I")
    }
    else if(imc< 39.99)
    {
        result= ("Obesidade II")
    }
    else if(imc>= 40 )
    {
        result= ("Obesidade III")
    }
    
    document.getElementById('result').innerHTML="Seu IMC é: " + Math.round(imc) + " Você está com " + result
}
