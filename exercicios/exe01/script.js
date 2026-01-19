let inicio = document.getElementById('valori')
let fim = document.getElementById('valorf')
let resul = document.getElementById('res')

function contar() {
    if (inicio.value.length == 0 || fim.value.length == 0 || inicio.value == fim.value) {
        window.alert('[ERRO] Digite os valores corretamente.')
    } else {
        numi = Number(inicio.value)
        numf = Number(fim.value)
        

        if (numi < numf) {
            resul.innerHTML = `<h3>Contando de ${numi} até ${numf}</h3>`
            for (var c = numi; c <= numf; c++) {
                resul.innerHTML += `${c} &#x1F449 `
            }
            resul.innerHTML += `&#x1F3C1`
        } else {
            resul.innerHTML = `<h3>Contando de ${numi} até ${numf}</h3>`
            for (var c = numi; c >= numf; c--) {
                resul.innerHTML += `${c} &#x1F449 `
            }
            resul.innerHTML += `&#x1F3C1`
        }
    }

}