var ds=0
var hs=0
var min=0
var seg=0

var interval

inicio() 

function inicio(){
  var dataInicio = new Date('2023-07-14T13:16:00');
  var dataAtual = new Date();
  var diferenca = dataAtual - dataInicio;

  var segundosDecorridos = Math.floor(diferenca / 1000);

  ds = Math.floor(segundosDecorridos / (24 * 60 * 60));
  hs = Math.floor((segundosDecorridos % (24 * 60 * 60)) / (60 * 60));
  min = Math.floor((segundosDecorridos % (60 * 60)) / 60);
  seg = segundosDecorridos % 60;

  contagem();
  interval = setInterval(contagem, 1000);
}

function NovoInicio(){
    contagem()
    interval=setInterval(contagem,1000)
}

// bntReset
function FoiDeBase(){
    clearInterval(interval)
    ds=0
    hs=0
    min=0
    seg=0

    NovoInicio()
}

function contagem(){
    seg++
    if(seg==60){
        min++
        seg=0
        if(min==60){
            min=0
            hs++
            if(hs==24){
                hs=0
                ds++
            }
        }
    }   
        document.getElementById('segundos').innerText=seg
        document.getElementById('minutos').innerText=min
        document.getElementById('horas').innerText=hs
        document.getElementById('dias').innerText=ds

}