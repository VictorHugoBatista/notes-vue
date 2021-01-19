import axios from 'axios'

const endpointUrl = `${process.env.NOTE_API_BASE_URL}/notes`

export default {
  async create (note) {
    const result = await axios.post(endpointUrl, note)
    return result.status === 200
  }
}
