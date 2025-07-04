<template>
  <header class="header">
    <img src="@/assets/logo.png" alt="Logo ANSA Inmobiliaria" class="logo" />
    <nav class="nav-links">
      <router-link to="/" exact class="nav-item">Inicio</router-link>
      <router-link to="/search" class="nav-item">Buscar</router-link>
      <router-link to="/contact" class="cta">Contáctanos</router-link>    </nav>

  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  height: 50px;
  object-fit: contain;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.nav-item {
  padding: 8px 14px;
  color: #333;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

.nav-item:hover {
  background-color: #f0f0f0;
  color: #d32f2f;
}

.router-link-exact-active {
  font-weight: bold;
  color: #d32f2f;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.contact-button {
  background-color: #d32f2f;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out;
}

.contact-button:hover {
  background-color: #b71c1c;
}
</style>
