var ds = 0;
var hs = 0;
var min = 0;
var seg = 0;

var interval;
var dataInicio;


function inicio() {
  dataInicio = new Date('2023-07-14T13:16:00');
  contagem();
  interval = setInterval(contagem, 1000);
}

function FoiDeBase(dataAtual) {
  clearInterval(interval);
  ds = 0;
  hs = 0;
  min = 0;
  seg = 0;
  contagem();

  dataInicio = dataAtual;
  interval = setInterval(contagem, 1000);
}

function contagem() {
  var dataAtual = new Date();
  var diferenca = dataAtual - dataInicio;
  var segundosDecorridos = Math.floor(diferenca / 1000);

  ds = Math.floor(segundosDecorridos / (24 * 60 * 60));
  hs = Math.floor((segundosDecorridos % (24 * 60 * 60)) / (60 * 60));
  min = Math.floor((segundosDecorridos % (60 * 60)) / 60);
  seg = segundosDecorridos % 60;

  document.getElementById('segundos').innerText = seg;
  document.getElementById('minutos').innerText = min;
  document.getElementById('horas').innerText = hs;
  document.getElementById('dias').innerText = ds;
}
