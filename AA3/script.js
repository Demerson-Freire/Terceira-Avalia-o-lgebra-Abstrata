// Algoritmo da primeira questão!
function verificar(){
    let num = window.document.getElementById('num')
    let num2 = window.document.getElementById('num2')
    let div01 = window.document.getElementById('div01')

    let z = Number(num.value)
    let n = Number(num2.value)

    if(num.value.length == 0 || num2.value.length == 0){
        window.alert('Erro: Verifique se todos os valores foram preenchidos corretamente.')
    } else {

        div01.innerHTML = ``

        let p = 1
        let i = 1

        div01.innerHTML += `${p} \u{1F449}`

        while(n >= i){ 

            p = p * z
            i = i + 1

            div01.innerHTML += `${p} \u{1F449}`
        }

        div01.innerHTML += `\u{1F3C1}`
    }
}

//Algoritmo da segunda questão!
function verificar02(){
    let num3 = window.document.getElementById('num3')
    let num4 = window.document.getElementById('num4')
    let div02 = window.document.getElementById('div02')

    let z = Number(num3.value)
    let n = Number(num4.value)

    if(num3.value.length == 0 || num4.value.length == 0){
        window.alert('Erro: Verifique se todos os valores foram preenchidos corretamente.')
    } else { 
        
        b = z
        e = n
        p = 1

        div02.innerHTML += `${p} \u{1F449}`

        while(e != 0){
            if(e % 2 != 0){
                p = b * p
            }
            e = Math.floor(e / 2)
            b = b * b

            div02.innerHTML = `${z}<sup>${n}</sup> é = ${p}. \u{1F913}`
        }

    }
}