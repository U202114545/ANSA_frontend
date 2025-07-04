// Filters.vue
<template>
  <div class="filters">
    <label>
      Dormitorios:
      <select v-model="selectedBedrooms">
        <option value="">Todos</option>
        <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
      </select>
    </label>

    <label>
      Precio máximo:
      <input type="number" v-model.number="maxPrice" placeholder="Ej: 700000" />
    </label>

    <button @click="$emit('filter', { bedrooms: selectedBedrooms, maxPrice })">
      Aplicar filtros
    </button>
  </div>
</template>

<script>
export default {
  name: 'Filters',
  data() {
    return {
      selectedBedrooms: '',
      maxPrice: null
    }
  }
}
</script>

<style scoped>
.filters {
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  flex-wrap: wrap;
  align-items: center;
}
.filters label {
  font-size: 0.95rem;
  color: #374151;
}
.filters input, .filters select {
  margin-left: 0.5rem;
  padding: 0.3rem 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
}
button {
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #1d4ed8;
}
</style>