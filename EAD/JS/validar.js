function validar() {
    var x=0;
    var y=10;
    if(document.getElementById("resp1").checked==true){
        x=x+1;
    }
    if (document.getElementById("resp2").checked==true) {
        x=x+1;
    }
    if (document.getElementById("resp3").checked == true) {
        x = x + 1;
    }
    if (document.getElementById("resp4").checked == true) {
        x = x + 1;
    }
    if (document.getElementById("resp5").checked == true) {
        x = x + 1;
    }
    if (document.getElementById("resp6").checked == true) {
        x = x + 1;
    }
    if (document.getElementById("resp7").checked == true) {
        x = x + 1;
    }
    if (document.getElementById("resp8").checked == true) {
        x = x + 1;
    }
    if (document.getElementById("resp9").checked == true) {
        x = x + 1;
    }
    if (document.getElementById("resp10").checked == true) {
        x = x + 1;
    }

    if(x>=6){
        alert("Você acertou " + x + " questões de " + y + "!");
        window.open("certificado.html");
    }else{
        alert("Você não fez uma pontuação suficiente, tente novamente.");
        window.open("prova.html");
    }
}