<template>
  <div class="hero-container">
    <div class="hero-content">
      <h1 class="hero-title">Encuentra tu próximo hogar</h1>
      <p class="hero-subtitle">
        Explora las mejores propiedades en Lima con ANSA Inmobiliaria
      </p>
      <div class="search-box">
        <input
            v-model.trim="query"
            type="text"
            class="search-input"
            placeholder="Buscar por distrito, ciudad o dirección"
            @keyup.enter="search"
        />
        <button @click="search" class="search-button">Buscar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const query = ref('')
const router = useRouter()

const search = () => {
  const term = query.value.trim()
  if (term.length < 2) {
    alert('Por favor ingresa al menos 2 caracteres para buscar.')
    return
  }
  router.push({ path: '/search', query: { q: term } })
}
</script>

<style scoped>
.hero-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #f9f9f9;
  padding: 2rem;
  text-align: center;
}

.hero-content {
  max-width: 640px;
}

.hero-title {
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #4b5563;
  margin-bottom: 2rem;
}

.search-box {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.search-input {
  padding: 0.75rem;
  width: 60%;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
}

.search-button {
  background-color: red;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: darkred;
}
</style>
