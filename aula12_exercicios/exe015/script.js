function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 5) {
                // bebe
                img.setAttribute('src', './imagens/bebe.jpeg')
            } else if (idade < 15) {
                // criança
                img.setAttribute('src', './imagens/menino.jpeg')
            } else if (idade < 19) {
                // adolescente
                img.setAttribute('src', './imagens/garoto.jpg')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', './imagens/homem.jpeg')
            } else {
                //idoso
                img.setAttribute('src', './imagens/idoso.png')
            }
        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 5) {
                // bebe
                img.setAttribute('src', './imagens/bebe.jpeg')
            } else if (idade < 15) {
                // criança
                img.setAttribute('src', './imagens/menina.png')
            } else if (idade < 19) {
                // adolescente
                img.setAttribute('src', './imagens/garota.jpg')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', './imagens/mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', './imagens/idosa.png')
            }
        }

        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}