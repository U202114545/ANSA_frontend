<template>
  <form class="contact-form" @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Nombre</label>
      <input type="text" id="name" v-model="form.name" required />
    </div>

    <div class="form-group">
      <label for="email">Correo</label>
      <input type="email" id="email" v-model="form.email" required />
    </div>

    <div class="form-group">
      <label for="message">Mensaje</label>
      <textarea id="message" rows="5" v-model="form.message" required></textarea>
    </div>

    <button type="submit">Enviar mensaje</button>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      successMessage: '',
      errorMessage: ''
    }
  },
  methods: {
    async handleSubmit() {
      try {
        await axios.post('http://localhost:8080/api/contact', this.form)
        this.successMessage = '¡Gracias por contactarnos! Te responderemos pronto.'
        this.errorMessage = ''
        this.form = { name: '', email: '', message: '' }
      } catch (error) {
        this.errorMessage = 'Ocurrió un error al enviar el mensaje. Inténtalo nuevamente.'
        this.successMessage = ''
        console.error('Error al enviar el mensaje:', error)
      }
    }
  }
}
</script>

<style scoped>
.contact-form {
  flex: 1;
  min-width: 300px;
}
.form-group {
  margin-bottom: 1.5rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}
input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
}
input:focus,
textarea:focus {
  border-color: #2563eb;
}
button {
  padding: 0.75rem 1.5rem;
  background-color: #dc2626;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}
button:hover {
  background-color: #b91c1c;
}
.success {
  margin-top: 1rem;
  color: green;
}
.error {
  margin-top: 1rem;
  color: red;
}
</style>
