function somar(){
    const numero1 = window.document.getElementById("numero1").value
    const numero2 = window.document.getElementById("numero2").value

    const valor1 = parseInt(numero1)
    const valor2 = parseInt(numero2)

    if (isNaN(valor1) || isNaN(valor2)){
        window.document.getElementById('resultado').innerHTML = "<i> Digite um valor, por favor! </i>"
        return;
    }

    const resultado = valor1 + valor2
    
    console.log(resultado)

    window.document.getElementById("resultado").innerHTML = `<strong>RESULTADO: ${resultado}</strong>`
}

function subtrair(){
    const numero1 = window.document.getElementById("numero1").value
    const numero2 = window.document.getElementById("numero2").value

    const valor1 = parseInt(numero1)
    const valor2 = parseInt(numero2)

    if (isNaN(valor1) || isNaN(valor2)){
        window.document.getElementById('resultado').innerHTML = "<i> Digite um valor, por favor! </i>"
        return;
    }

    const resultado = valor1 - valor2
    
    console.log(resultado)

    window.document.getElementById("resultado").innerHTML = `<strong>RESULTADO: ${resultado}</strong>`
}

function multiplicar(){
    const numero1 = window.document.getElementById("numero1").value
    const numero2 = window.document.getElementById("numero2").value

    const valor1 = parseInt(numero1)
    const valor2 = parseInt(numero2)

    if (isNaN(valor1) || isNaN(valor2)){
        window.document.getElementById('resultado').innerHTML = "<i> Digite um valor, por favor! </i>"
        return;
    }

    const resultado = valor1 * valor2

    console.log(resultado)

    window.document.getElementById("resultado").innerHTML = `<strong>RESULTADO: ${resultado}</strong>`
}

function dividir(){
    const numero1 = window.document.getElementById("numero1").value
    const numero2 = window.document.getElementById("numero2").value

    const valor1 = parseInt(numero1)
    const valor2 = parseInt(numero2)

    if (isNaN(valor1) || isNaN(valor2)){
        window.document.getElementById('resultado').innerHTML = "<i> Digite um valor, por favor! </i>"
        return;
    }else{
        if (valor2 === 0) {
            window.document.getElementById('resultado').innerHTML = "<i> Não é possível dividir por zero! </i>"
            return;
        }
    }

    const resultado = valor1 / valor2

    console.log(resultado)

    window.document.getElementById("resultado").innerHTML = `<strong>RESULTADO: ${resultado}</strong>`
}

function restoDivisao(){
    const numero1 = window.document.getElementById("numero1").value
    const numero2 = window.document.getElementById("numero2").value

    const valor1 = parseInt(numero1)
    const valor2 = parseInt(numero2)

    if (isNaN(valor1) || isNaN(valor2)){
        window.document.getElementById('resultado').innerHTML = "<i> Digite um valor, por favor! </i>"
        return;
    }

    const resultado = valor1 % valor2

    console.log(resultado)

    window.document.getElementById("resultado").innerHTML = `<strong>RESULTADO: ${resultado}</strong>`
}

function potencia(){
    const numero1 = window.document.getElementById("numero1").value
    const numero2 = window.document.getElementById("numero2").value

    const valor1 = parseInt(numero1)
    const valor2 = parseInt(numero2)

    if (isNaN(valor1) || isNaN(valor2)){
        window.document.getElementById('resultado').innerHTML = "<i> Digite um valor, por favor! </i>"
        return;
    }

    const resultado = Math.pow(valor1, valor2)

    console.log(resultado)

    window.document.getElementById("resultado").innerHTML = `<strong>RESULTADO: ${resultado}</strong>`
}