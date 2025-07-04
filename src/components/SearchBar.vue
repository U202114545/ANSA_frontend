<template>
  <div class="search-bar">
    <input
        type="text"
        v-model="searchQuery"
        placeholder="Buscar por título, zona, etc."
        @keyup.enter="$emit('search', searchQuery)"
    />
    <button @click="$emit('search', searchQuery)">Buscar</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchQuery: ''
    }
  }
}
</script>

<style scoped>
.search-bar {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}
button {
  padding: 0.5rem 1rem;
  background: #1d4ed8;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background: #2563eb;
}
</style>
