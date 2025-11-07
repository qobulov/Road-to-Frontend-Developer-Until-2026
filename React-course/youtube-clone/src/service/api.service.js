const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': (process.env.REACT_APP_API_KEY).toString(),
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

const ApiService = {
  fetching: async (url) => {
    try {
      const response = await fetch(`${BASE_URL}/${url}`, options);
      if (!response.ok) {
        throw new Error(`HTTP xato: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API xatolik:', error);
    }
  },
};

export default ApiService