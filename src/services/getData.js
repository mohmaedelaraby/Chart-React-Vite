import axios from "axios";

export const fetchFredData = async (seriesId) => {
    seriesId = "GDP"
    const url = `http://localhost:3001/fred-data/${seriesId}`; // Request to the backend

    try {
      const response = await axios.get(url);
      console.log(response.data); // Set the fetched data
    } catch (err) {
      console.log('Error fetching data from the server');
      console.error('Error:', err);
    }
  };