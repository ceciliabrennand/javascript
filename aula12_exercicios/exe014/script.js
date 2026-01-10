function carregar() {
            var texto = document.getElementById('horadodia')
            var img = document.getElementById('imagem')
            var fundo = document.querySelector('body')

            var hora = new Date()
            var h = hora.getHours()
            
            texto.innerHTML = `Agora são ${h} horas.`

            if (h > 5 && h < 12) {
                fundo.style.background = 'lightblue'
            } else if (h >= 12 && h < 18) {
                fundo.style.background = 'lightorange'
                img.src = 'tarde.jpg'
            } else {
                fundo.style.background = 'darkblue'
                img.src = './imagens/noite.jpeg'
            }
        }

        