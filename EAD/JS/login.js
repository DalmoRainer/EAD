function logar() {
    usuario = document.getElementById("usuario").value;
    senha = document.getElementById("senha").value;
    valor = document.getElementById("valor").checked;
    if (usuario == "aluno" && senha == "123" &&  valor == true){
        window.open("conteudo.html");
    } else {
        alert("Usuario ou senha incorreta, marque o checkbox");
    }
}
