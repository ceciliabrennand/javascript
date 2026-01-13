function clicar() {
    var numero = document.getElementById('numero')
    var tab = document.getElementById('seltab') 

    if (numero.value.length == 0) {
        window.alert('[ERRO] Digite um número.')
    } else {
        var num = Number(numero.value)
        var c = 1

        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            tab.appendChild(item)
            c++
        }
    }
}