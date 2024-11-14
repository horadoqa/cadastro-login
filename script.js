function toggleTab(tab) {
    if (tab === 'cadastro') {
      document.getElementById('tab-cadastro').classList.add('active');
      document.getElementById('tab-login').classList.remove('active');
      document.getElementById('form-cadastro').style.display = 'block';
      document.getElementById('form-login').style.display = 'none';
    } else {
      document.getElementById('tab-login').classList.add('active');
      document.getElementById('tab-cadastro').classList.remove('active');
      document.getElementById('form-cadastro').style.display = 'none';
      document.getElementById('form-login').style.display = 'block';
    }
  }
  
  function cadastrarUsuario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email-cadastro').value;
    const senha = document.getElementById('senha-cadastro').value;
  
    if (!nome || !email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    // Simulação de cadastro (em um cenário real, isso seria feito no servidor)
    alert(`Usuário ${nome} cadastrado com sucesso!`);
    document.getElementById('nome').value = '';
    document.getElementById('email-cadastro').value = '';
    document.getElementById('senha-cadastro').value = '';
    toggleTab('login');  // Após cadastro, ir para a tela de login
  }
  
  function loginUsuario() {
    const email = document.getElementById('email-login').value;
    const senha = document.getElementById('senha-login').value;
  
    if (!email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    // Simulação de login (em um cenário real, isso seria feito no servidor)
    alert(`Login realizado com sucesso! Bem-vindo, ${email}`);
    document.getElementById('email-login').value = '';
    document.getElementById('senha-login').value = '';
  }
  