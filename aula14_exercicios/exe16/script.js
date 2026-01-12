function contar() {
    var i = Number(document.getElementById('inicio').value)
    var f = Number(document.getElementById('fim').value)
    var p = Number(document.getElementById('passo').value)
    var res = document.getElementById('resp')

    if (p == 0) {
        window.alert('Passo inválido! Irei considerar PASSO 1')
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
    
    res.innerHTML += `&#x1F3C1;`
}