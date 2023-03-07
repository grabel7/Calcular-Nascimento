var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //Janeiro é 0
var yyyy = today.getFullYear();
var hoje = yyyy + '-' + mm + '-' +dd
var hora = today.getHours()
var minutos = today.getMinutes()


document.getElementById('birthday')
function enviar() {
    let form = document.getElementById('birthday').value
    let cortado = form.split('-')

    let hh = document.getElementById('hora')
    let min = document.getElementById('minute')

        if (hoje < form || Number(hh.value) >= 24 || Number(hh.value) < 0 || Number(min.value) >=60 || Number(min.value) < 0) {
            window.alert('[ERRO] Dados Inválidos')
        } else {

    let dia = document.getElementById('dia')
    let mes = document.getElementById('mes')
    let ano = document.getElementById('ano')
    
    let horares = document.getElementById('horares')
    let minres = document.getElementById('minres')

    /* Cálculo da diferença*/
    let difdd = Number(dd) - Number(cortado[2])
    let difmm = Number(mm) - Number(cortado[1])
    let difyyyy = Number(yyyy) - Number(cortado[0])
    if (difdd < 0){
        difmm--
        difdd+= 31
    }
    if (difmm < 0){
        difyyyy--
        difmm += 12
    }
    let difhh = Number(hora) - Number(hh.value)
    let difmin = Number(minutos) - Number(min.value)
    
    if (difmin < 0){
        difhh++
        difmin+=60
    }
 
    if (difhh < 0){
        difdd--
        difhh+=23
    }

    dia.innerHTML = difdd
    mes.innerHTML = difmm
    ano.innerHTML = difyyyy
    horares.innerHTML = difhh
    minres.innerHTML = difmin
    document.getElementById('mostrar-resultado').innerHTML = `Você nasceu há ${difhh} horas ${difmin} minutos de ${difyyyy} anos atrás e ${difmm} meses e ${difdd} dias`
}
}