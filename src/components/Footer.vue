<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="footer-text">
        Síguenos:
        <a href="#" class="footer-link">Facebook</a> ·
        <a href="#" class="footer-link">LinkedIn</a> ·
        <a href="#" class="footer-link">Instagram</a>
      </p>
      <p class="footer-copy">
        © 2025 ANSA Inmobiliaria. Todos los derechos reservados.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: darkgrey; /* Gris oscuro */
  color: black; /* Gris claro */
  padding: 2rem 1rem;
  text-align: center;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
}

.footer-text {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.footer-copy {
  font-size: 0.875rem;
  color: black;
}

.footer-link {
  color: #dc2626; /* Rojo institucional */
  text-decoration: none;
  font-weight: 500;
}

.footer-link:hover {
  text-decoration: underline;
  color: #ef4444; /* Rojo más claro al hacer hover */
}
</style>
