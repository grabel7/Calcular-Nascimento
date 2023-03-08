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
    let cortado = form.split('-').join('T').split('T')
    let separators = ["T", ':'];
    let cortadohoras = form.split(new RegExp('(['+ separators.join('') + '])'));

        if (hoje < form || Number(cortadohoras[2].value) >= 24 || Number(cortadohoras[2].value) < 0 || Number(cortadohoras[4].value) >=60 || Number(cortadohoras[4].value) < 0) {
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
    let difhh = Number(hora) - Number(cortadohoras[2])
    let difmin = Number(minutos) - Number(cortadohoras[4])
    
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
    document.getElementById('mostrar-resultado').innerHTML = `Você nasceu há ${difhh} horas ${difmin} minutos de ${difyyyy} anos, ${difmm} meses e ${difdd} dias atrás`
}
}