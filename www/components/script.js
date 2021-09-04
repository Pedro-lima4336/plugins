window.onload = function(){
  document.querySelector("alerta1").addEventListener("click",function(){
 function retorno(){

 }
  navigator.notification.alert("alerta de teste", retorno , "titulo de alerta", "SIM");
  });
}
document.querySelector("alerta2").addEventListener("click",function(){
  function verifica(buttonIndex){
    if(buttonIndex == 1){
       navigator.notification.alert("escolheu a opção A");
    }else{
      navigator.notification.alert("escolheu a opção B")
    }
 }
navigator.notification.confirm("escolha A ou B", verifica , "opções de escolha",['A','B']);
});

 document.querySelector("beep").addEventListener("click",function(){
   navigator.notification.beep(2);
 });