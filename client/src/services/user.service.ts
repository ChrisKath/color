import axios from '@/libs/axios'

export const userService = {
  /**
   * GET all users.
   */
  async getAll(): Promise<any> {
    try {
      const response = await axios.get('/users')
      return response.data
    } catch (error) {
      return error
    }
  },

  /**
   * GET user by userId.
   *
   * @param {string | number} id
   */
  async getById(userId: string | number): Promise<any> {
    try {
      const response = await axios.get(`/users/${userId}`)
      return response.data
    } catch (error) {
      return error
    }
  },

  /**
   * Register service.
   *
   * @param {object} payload
   */
  async register(payload: any): Promise<any> {
    try {
      const response = await axios.post('/users/register', payload)
      return response.data
    } catch (error) {
      return error
    }
  },

  /**
   * UPDATE user profile.
   *
   * @param {object} payload
   */
  async setProfile(payload: any): Promise<any> {
    try {
      const response = await axios.patch(`/users/${payload.id}`, payload)
      return response.data
    } catch (error) {
      return error
    }
  }
}
