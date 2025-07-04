<template>
  <section class="contact-section">
    <h1 class="section-title">Contáctanos</h1>
    <p class="section-subtitle">¿Tienes preguntas? Estamos aquí para ayudarte.</p>

    <div class="contact-grid">
      <!-- Formulario -->
      <form class="contact-form" @submit.prevent="sendMessage">
        <label>Nombre</label>
        <input type="text" v-model="form.name" required />

        <label>Correo</label>
        <input type="email" v-model="form.email" required />

        <label>Mensaje</label>
        <textarea v-model="form.message" rows="5" required></textarea>

        <button type="submit">Enviar mensaje</button>
        <p v-if="successMessage" class="success">{{ successMessage }}</p>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>

      <!-- Información de contacto -->
      <div class="contact-info">
        <h2>Información de contacto</h2>
        <p><strong>Teléfono:</strong> <a href="tel:+51998112213">+51 998 112 213</a></p>
        <p><strong>Correo:</strong> <a href="mailto:informes@ansacontratistas.com">informes@ansacontratistas.com</a></p>
        <p><strong>Dirección:</strong> Cal. Almirante Lord Cochrane Nro. 220, San Isidro</p>

        <div class="map-container">
          <iframe
              src="https://www.google.com/maps?q=Av.+Aurelio+Miro+Quesada+136,+San+Isidro,+Lima&output=embed"
              allowfullscreen
              loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '../services/api'

export default {
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
    async sendMessage() {
      try {
        await axios.post('/contact', {
          name: this.form.name,
          email: this.form.email,
          message: this.form.message
        })

        this.successMessage = '¡Gracias por contactarnos! Te responderemos pronto.'
        this.errorMessage = ''
        this.form = { name: '', email: '', message: '' }
      } catch (error) {
        console.error('Error al enviar mensaje:', error)
        this.errorMessage = 'Ocurrió un error. Inténtalo nuevamente.'
        this.successMessage = ''
      }
    }
  }
}
</script>

<style scoped>
.contact-section {
  max-width: 1200px;
  margin: auto;
  padding: 2rem 1rem;
}
.section-title {
  font-size: 2.2rem;
  text-align: center;
  color: #1e3a8a;
}
.section-subtitle {
  text-align: center;
  color: #555;
  margin-bottom: 2rem;
}
.contact-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.contact-form, .contact-info {
  flex: 1 1 380px;
}
.contact-form label {
  font-weight: bold;
  display: block;
  margin-top: 1rem;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.75rem;
  margin-top: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}
.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #2563eb;
  outline: none;
}
.contact-form button {
  margin-top: 1rem;
  background: #dc2626;
  color: white;
  padding: 0.7rem 1.4rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}
.contact-form button:hover {
  background: #b91c1c;
}
.success {
  margin-top: 1rem;
  color: green;
}
.contact-info {
  padding: 1rem;
  background: #f9fafb;
  border-radius: 12px;
}
.contact-info h2 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}
.contact-info a {
  color: #1d4ed8;
  text-decoration: none;
}
.contact-info a:hover {
  text-decoration: underline;
}
.map-container {
  margin-top: 1rem;
  border-radius: 12px;
  overflow: hidden;
}
.map-container iframe {
  width: 100%;
  height: 250px;
  border: none;
}
</style>
