function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anas = document.getElementById('iano')
    var sexo = document.getElementsByName('sexo')
    var img = document.getElementById('imagem')
    var txt = document.getElementById('texto')

    if (Number(iano.value) < 1925 || Number(iano.value) > 2025) {
        window.alert('[ERRO] Complete o formulário corretamente') 
    } else if ( ano - Number(iano.value) < 5) {
        var idade = ano - Number(iano.value)
        txt.innerHTML = `Foi detectado um bebê de ${idade} anos.`
        img.style.display = 'block'
    } else if (ano - Number(iano.value) >= 5 && Number(iano.value) < 14) {
        
    }
}