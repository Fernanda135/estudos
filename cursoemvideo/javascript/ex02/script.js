function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'cm.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'avatar.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'avatar.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'vm.jpg')
            }
            
} else if (fsex[1].checked) {
    gênero = 'mulher'
    if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'cf.jpg')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'avatar.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'avatar.jpg')
                } else {
                    //idoso
                    img.setAttribute('src', 'vf.jpg')
                    }
            }
            

}
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.` 
        res.appendChild(img)   
}