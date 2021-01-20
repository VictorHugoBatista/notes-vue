import axios from 'axios'

const endpointUrl = `${process.env.NOTE_API_BASE_URL}/notes`

export default {
  async get (noteId) {
    try {
      const response = await axios.get(`${endpointUrl}/${noteId}`)
      return response.data
    } catch (error) {
      return error.response
    }
  },
  async create (note) {
    const result = await axios.post(endpointUrl, note)
    return result.status === 200
  },
  async update (noteId, note) {
    const result = await axios.patch(`${endpointUrl}/${noteId}`, note)
    return result.status === 200
  }
}
