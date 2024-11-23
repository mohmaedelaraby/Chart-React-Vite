import axios from "axios";

/* export const fetchFredData = async (seriesId) => {
    seriesId = "GDP"
    const url = `http://localhost:3001/fred-data/${seriesId}`; // Request to the backend

    try {
      await axios.get(url).then((res)=>res).catch((err)=>console.log(err)).finally((res)=>console.log(res));
    } catch (err) {
      console.log('Error fetching data from the server');
      console.error('Error:', err);
    }
  }; */

  export const fetchFredData = (seriesId)=>{
    seriesId = "GDP"
    const url = `http://localhost:3001/fred-data/${seriesId}`;
    return axios.get(url).then((res)=>res).catch((err)=>console.log(err))
  }