function carregar() {
var msg = window.document.querySelector('#msg')
var img = window.document.querySelector('#imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`

    if( hora >= 0 && hora < 12){
        //dia
        img.src = 'imagens/manha.png'
        document.body.style.background = '#EAB83A';
        document.querySelector('section').style.background = '#ffffff'
        document.querySelector('#msg').style.background= '#FEE473'
          document.querySelector('#msg').style.color= 'black'

    }else if( hora >= 12 && hora < 18){
        //tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#F94802'
    }else{
        //noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#484B67'   
    }

}
