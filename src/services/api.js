import axios from 'axios'

const API = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 5000
})

export default API // 👈 Agrega esta línea

export async function getAllProperties() {
    try {
        const response = await API.get('/properties')
        return response.data
    } catch (error) {
        console.error('Error al obtener las propiedades:', error)
        return []
    }
}

export async function getPropertyById(id) {
    try {
        const response = await API.get(`/properties/${id}`)
        return response.data
    } catch (error) {
        console.error(`Error al obtener la propiedad con ID ${id}:`, error)
        return null
    }
}
