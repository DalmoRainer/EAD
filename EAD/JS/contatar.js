function contatar() {
    nomecompleto = document.getElementById("nomecompleto").value;
    telefone = document.getElementById("telefone").value;
    email = document.getElementById("email").value;
    mensagem = document.getElementById("mensagem").value;
    if(nomecompleto.length == 0){
        alert("Preencha o campo com o seu nome completo!");
    }
    if(telefone == 0){
        alert("Preencha o campo com o seu telefone!");
    }
    if(email == 0){
        alert("Preencha o campo com o seu email!"); 
    }
    if(mensagem == 0) {
        alert("Preencha o campo com uma mensagem!");
    }
}