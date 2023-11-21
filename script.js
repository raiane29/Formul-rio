function validaFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.getElementById("senha").value;
    const senhaconfir = document.getElementById("senhaconfir").value;

    //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

     if(nome == '' || email == '' || senha == ''){
    alert('Campos vazios!')
    return
     }

     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
     if(!emailRegex.test(email)){
    alert('Email inválido')
    return
     }

     if(senha.length < 9){
    alert('A senha tem que ter 7 caracteres!')
    return
     }

    if(senhaconfir.length < 9){
        alert('A senha tem que ter 7 caracteres!')
        return

        }else if(senhaconfir == senha){
        alert('Confirmação concluida!')
        return

        }else{
        alert('Senha incorreta!')
        return
        }
}

function darkMode(){
    const pagina = document.body 
    pagina.classList.toggle("dark-mode")
    const botao = document.getElementById("escuroButton")
    const isDarkMode = document.body.classList.contains("dark-mode")

    if(isDarkMode == true){
    botao.textContent = "Modo Pink"

    }else{
    botao.textContent = "Modo Escuro"
  
    }

}
