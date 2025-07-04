<template>
  <div class="search-view">
    <h1 class="title">Resultados</h1>

    <div v-if="filteredProperties.length > 0" class="cards-container">
      <PropertyCard
          v-for="property in filteredProperties"
          :key="property.id"
          :property="property"
      />
    </div>

    <p v-else class="no-results">
      No se encontraron propiedades para tu búsqueda.
    </p>
  </div>
</template>

<script>
import PropertyCard from '@/components/PropertyCard.vue'
import { getAllProperties } from '@/services/api.js'

export default {
  name: 'SearchView',
  components: {
    PropertyCard
  },
  data() {
    return {
      allProperties: [],
      query: ''
    }
  },
  computed: {
    filteredProperties() {
      if (!this.query) return this.allProperties
      const search = this.query.toLowerCase()
      return this.allProperties.filter(property =>
          property.title.toLowerCase().includes(search) ||
          property.summary.toLowerCase().includes(search) ||
          property.tags?.some(tag => tag.toLowerCase().includes(search)) ||
          property.location?.address?.toLowerCase().includes(search)
      )
    }
  },
  async mounted() {
    try {
      this.query = this.$route.query.q || ''
      this.allProperties = await getAllProperties()
    } catch (error) {
      console.error('Error al obtener propiedades:', error)
    }
  }
}
</script>

<style scoped>
.search-view {
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 2.5rem;
  border-left: 6px solid #dc2626;
  padding-left: 12px;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 2rem;
}

.no-results {
  font-size: 1.25rem;
  color: #6b7280;
  text-align: center;
  margin-top: 3rem;
  background: #fef2f2;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid #fca5a5;
}
</style>
