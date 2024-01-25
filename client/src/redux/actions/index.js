import axios from 'axios';  // Corregir la ruta del import para axios
import { GET_NAME_CHARACTERS, Filter_By_value, GET_TEMPERAMENTS, Filter_created } from './index';

export const getCharacter = (name) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/dogs/${name}`);
    dispatch({
      type: GET_NAME_CHARACTERS,
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const filterCharactersByStatus = (payload) => ({
  type: Filter_By_value,
  payload,
});

export const getTemperaments = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/temperaments");
    dispatch({
      type: GET_TEMPERAMENTS,
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const postCharacter = (payload) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3001/character", payload);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const filterCreated = (payload) => ({
  type: Filter_created,
  payload,
});

// import axios from 'axios';

// export function getDog(){
//     return async function(dispatch){
//         var json = await axios.get('http://localhost:3001/dogs'{

//         }) ;
//     return dispatch({
// type:'GET_DOG',
// payload:json.data
//     }) 
//   }
// }

// export function filterCreated(payload) {
//   return {
//     type: "Filter_created",
//     payload
//   };
// }

