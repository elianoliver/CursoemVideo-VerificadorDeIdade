function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resultado = document.getElementById('resultado')

    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')

    } else {
        var genero_masculino = document.getElementById('masculino')
        var genero_feminino = document.getElementById('feminino')

        var idade = ano - fano.value
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (genero_masculino.checked) {
            var genero = 'Homem'

            if(idade>=0 && idade <= 10){
                //criança
                img.setAttribute('src','./img/foto-bebe-m.png')
            }else if(idade < 21){
                //adolescente
                img.setAttribute('src','./img/foto-jovem-m.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','./img/foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src','./img/foto-idoso-m.png')
            }
        } else if (genero_feminino.checked) {
            var genero = 'Mulher'

            if(idade>=0 && idade <= 10){
                //criança
                img.setAttribute('src','./img/foto-bebe-f.png')
            }else if(idade < 21){
                //adolescente
                img.setAttribute('src','./img/foto-jovem-f.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','./img/foto-adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src','./img/foto-idoso-f.png')
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }



}