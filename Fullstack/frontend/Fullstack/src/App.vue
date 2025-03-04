<template>
  <div class="form-container">
    <h1>Cadastro de Usuários</h1>
    <form @submit.prevent="addUser" class="user-form" autocomplete="on">
      <input type="text" v-model="name" placeholder="Nome" required class="input-field" id="name" name="name"
        autocomplete="name" />
      <input type="text" v-model="cpf" placeholder="CPF" required class="input-field" id="cpf" name="cpf"
        autocomplete="off" />
      <input type="date" v-model="birthdate" required class="input-field" id="birthdate" name="birthdate"
        autocomplete="bday" />
      <input type="email" v-model="email" placeholder="Email" required class="input-field" id="email" name="email"
        autocomplete="email" />

      <button type="submit" class="submit-button">Cadastrar</button>
    </form>
  </div>
</template>

<style scoped>
/* Estilos */
/* Importando fontes do Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Quicksand:wght@300;400;500&display=swap');

/* Container do formulário */
.form-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f8d8e2;
  /* Rosa claro */
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Quicksand', sans-serif;
  /* Fonte fofa e arredondada */
}

/* Título */
h1 {
  text-align: center;
  color: #ff65a3;
  /* Rosa vibrante */
  font-family: 'Poppins', sans-serif;
  /* Fonte moderna e mais suave */
  font-size: 2.5em;
  margin-bottom: 20px;
  letter-spacing: 2px;
}

/* Formulário */
.user-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Estilos dos campos de entrada */
.input-field {
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ff8cc2;
  /* Borda rosa suave */
  border-radius: 8px;
  outline: none;
  background-color: #fff2f7;
  /* Fundo de input rosado */
  transition: all 0.3s ease;
  font-family: 'Quicksand', sans-serif;
}

/* Efeito de foco nos campos de entrada */
.input-field:focus {
  border-color: #ff65a3;
  /* Rosa vibrante ao focar */
  box-shadow: 0 0 10px rgba(255, 101, 163, 0.5);
}

/* Estilo do botão */
.submit-button {
  padding: 15px;
  background-color: #ff65a3;
  /* Rosa vibrante */
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  font-family: 'Quicksand', sans-serif;
}

/* Efeito de hover no botão */
.submit-button:hover {
  background-color: #ff3b8c;
  /* Rosa mais forte ao passar o mouse */
}

.submit-button:active {
  background-color: #ff1d6b;
  /* Rosa bem intenso ao clicar */
}

.submit-button:disabled {
  background-color: #ffd4e2;
  /* Rosa claro para botão desabilitado */
  cursor: not-allowed;
}
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      cpf: '',
      birthdate: '',
      email: ''
    };
  },
  methods: {
    async addUser() {
      try {
        // Enviando os dados para o servidor
        await axios.post('http://localhost:5000/users', {
          name: this.name,
          cpf: this.cpf,
          birthdate: this.birthdate,
          email: this.email
        });
        // Limpar os campos após o cadastro
        this.name = '';
        this.cpf = '';
        this.birthdate = '';
        this.email = '';
        alert('Usuário cadastrado com sucesso!');
      } catch (error) {
        console.error("Erro ao cadastrar o usuário:", error);
        alert('Erro ao cadastrar o usuário.');
      }
    }
  }
};
</script>
