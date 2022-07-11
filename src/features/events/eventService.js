import axios from 'axios'


const API_URL = 'https://imarikapeaceadmin.herokuapp.com/events/'



//get all events
const getEvents = async () => {
  

  const response = await axios.get(API_URL)

    return response.data
}


const eventsService = {
    getEvents,

}

export default eventsService