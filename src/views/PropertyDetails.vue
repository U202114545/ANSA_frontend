<template>
  <div class="property-details" v-if="property">
    <img :src="property.image" alt="Imagen de propiedad" class="main-image" />

    <div class="details-container">
      <h1 class="title">{{ property.title }}</h1>
      <p class="price">\${{ property.price.toLocaleString() }}</p>

      <ul class="info-list">
        <li><strong>Dormitorios:</strong> {{ property.beds }}</li>
        <li><strong>Baños:</strong> {{ property.baths }}</li>
        <li><strong>Área:</strong> {{ property.area }} m²</li>
      </ul>

      <h2 class="section-heading">Resumen</h2>
      <p class="summary">{{ property.summary }}</p>

      <h2 class="section-heading">Tags</h2>
      <div class="tags">
        <span v-for="tag in property.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>

      <div v-if="property.location" class="map-container">
        <iframe
            :src="`https://www.google.com/maps?q=${property.location.latitude},${property.location.longitude}&output=embed`"
            width="100%"
            height="300"
            style="border:0;"
            allowfullscreen
            loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>

  <p v-else class="loading">Cargando detalles de la propiedad...</p>
</template>

<script>
import { getPropertyById } from '@/services/api'

export default {
  name: 'PropertyDetails',
  data() {
    return {
      property: null
    }
  },
  async mounted() {
    const id = this.$route.params.id
    try {
      this.property = await getPropertyById(id)
    } catch (error) {
      console.error('Error al obtener propiedad:', error)
    }
  }
}
</script>

<style scoped>
.property-details {
  max-width: 960px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
}

.main-image {
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
}

.details-container {
  padding: 0 0.5rem;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #111827;
}

.price {
  color: #dc2626;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.info-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  font-size: 1rem;
  color: #374151;
}

.info-list li {
  margin-bottom: 0.5rem;
}

.section-heading {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1.5rem 0 0.5rem;
  color: #1f2937;
}

.summary {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: #4b5563;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 2rem;
}

.tag {
  background-color: #f3f4f6;
  color: #1f2937;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  border: 1px solid #d1d5db;
}

.map-container {
  margin-top: 2rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.loading {
  text-align: center;
  padding: 2rem;
  font-size: 1.25rem;
  color: #6b7280;
}
</style>
