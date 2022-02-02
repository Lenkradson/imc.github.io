 function calcular(){
  var altura = (document.getElementById('altura').value)/100
   
  var peso = document.getElementById('peso').value;
   
  var imc = peso / altura **2;
  
   document.getElementById('resultado').innerHTML = imc;
}
