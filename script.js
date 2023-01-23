
    // obter formulário
    var formulario = document.getElementById('login')


    formulario.addEventListener('submit', function (event) {
      // Previne o envio padrão do formulário
      event.preventDefault()

      // busca input pelo id
      var inputSenha = document.getElementById("senha");
      var inputEmail = document.getElementById("email");

      // pega o valor digitado no input
      var inputSenhaValor = inputSenha.value;
      var inputEmailValor = inputEmail.value;

      {/*
       Se inputSenhaValor estiver vazio mostre um alerta

       Se inputSenhaValor e inputEmail valor estiverem vazios
       mostre um alerta
      */}

      if (inputSenhaValor == '' && inputEmailValor == '') {
        alert('Preencha os campos antes de continuar');
        return

      }

      {/*
        Se inputSenhaValor ou inputEmailValor estiverem vazios
        mostre um alerta
      */}

      if (inputSenhaValor == '' || inputEmailValor == '') {
        alert('Este campo é obrigatório')
        return
      }

      var usuarios = [
        {
          email: 'joaopmata182@gmail.com',
          password: '3nSY4KmJ58Zu'
        },
        {
          email: 'pedrohnleal@gmail.com',
          password: '38Zx24vQJb2w'
        },
        {
          email: 'lagoawb2gmail.com',
          password: 'h93ZBshJDZa7'
        },
        {
          email: 'augusto.azalim@gmail.com',
          password: 'p33478vWvkEU'
        },
        {
          email: 'vitor.viana2016@gmail.com',
          password: 'EB5wwf38tNX3'
        },
        {
          email: 'lorrainypamela99@gmail.com',
          password: '4ZFVNghj3c2Z'
        },
        {
          email: 'kutacalaissa@gmail.com',
          password: '&!kF8jS%^a56'
        },
        {
          email: 'danielazalim13@gmail.com',
          password: 'jiM5w647d#K8'
        },
        {
          email: 'pedro_araujo1@hotmail.com',
          password: 'h#ZB870gGF^&'
        }
      ]

      for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == inputEmailValor && usuarios[i].password == inputSenhaValor) {
          window.location.href = '/home'
          return
        }
      }


      alert('Usuário ou senha não encontrado na base de dados')



    })
