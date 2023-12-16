import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    stops: []
  },
  actions: {
    async fetchStops() {
      try {
        const result = await axios.get('http://127.0.0.1:3000/stops')
        this.state.stops = result?.data
      } catch (error) {
        console.error(error)
      }
    }
  }
})
