<template>
  <div class="property-card">
    <img :src="property.image" :alt="property.title" class="property-image" />

    <div class="property-content">
      <h2 class="title">{{ property.title }}</h2>
      <p class="price">S/{{ formattedPrice }}</p>
      <p class="details">
        {{ property.beds }} Dorms · {{ property.baths }} Baños · {{ property.area }} m²
      </p>

      <router-link :to="`/property/${property.id}`" class="details-button">
        Ver detalles
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PropertyCard',
  props: {
    property: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedPrice() {
      return Number(this.property.price).toLocaleString('es-PE')
    }
  }
}
</script>

<style scoped>
.property-card {
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.property-card:hover {
  transform: scale(1.01);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}

.property-image {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-bottom: 1px solid #f3f3f3;
}

.property-content {
  padding: 20px;
}

.title {
  font-size: 1.25rem;
  margin-bottom: 10px;
  font-weight: 600;
  color: #111827;
}

.price {
  color: #dc2626;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.details {
  color: #4b5563;
  font-size: 0.95rem;
  margin-bottom: 16px;
}

.details-button {
  display: inline-block;
  padding: 10px 16px;
  background: #dc2626;
  color: white;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
}
.details-button:hover {
  background: #b91c1c;
  transform: translateY(-1px);
}
</style>
