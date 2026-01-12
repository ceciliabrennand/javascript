function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('resp')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados.') 
    } else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        res.innerHTML = 'Contando... <br>'
        
        if (p <= 0) {
            window.alert('Passo inválido! Irei considerar PASSO 1.')
            p = 1
        }
        if (i < f) { // contagem crescente
            for(var c = i; c <= f; c += p) {
            res.innerHTML += `${c} &#x1F449; ` 
            }
        } else { // contagem decrescente
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} &#x1F449; ` 
            }
        }
    }

    res.innerHTML += `&#x1F3C1;`
}

     /* o que eu tinha feito:
        else if (p == 0) {
        window.alert('Passo inválido! Irei considerar PASSO 1.')
        res.innerHTML = 'Contando... <br>'
        for (var c = i ; c <= f ; c++) {
        res.innerHTML += `${c} &#x1F449; `
        }
    } else {
        res.innerHTML = 'Contando... <br>'
        for (var c = i ; c <= f ; c += p) {
        res.innerHTML += `${c} &#x1F449; `
        }
    }
    
    res.innerHTML += `&#x1F3C1;`*/
