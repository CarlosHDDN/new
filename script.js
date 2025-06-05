 // Função para verificar o login
function checkLogin(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
  
    // Usuário e senha pré-definidos
    const validUsername = 'usuario';
    const validPassword = 'senha123';
  
    // Verificar se as credenciais são válidas
    if (username === validUsername && password === validPassword) {
      // Armazenar informações no localStorage
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', username);
      // Redirecionar para a página de conteúdo
      window.location.href = 'conteudo.html';
    } else {
      // Exibir mensagem de erro
      errorMessage.textContent = 'Usuário ou senha incorretos.';
    }
  }
  
  // Verificar se o usuário está logado
  function checkIfLoggedIn() {
    if (localStorage.getItem('loggedIn') === 'true') {
      window.location.href = 'youtube.html';
    }
  }
  
  // Adicionar evento de submit ao formulário
  document.getElementById('loginForm').addEventListener('submit', checkLogin);
  
  // Verificar se o usuário já está logado ao carregar a página
  checkIfLoggedIn();
  
