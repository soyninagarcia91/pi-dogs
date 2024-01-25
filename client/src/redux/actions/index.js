import axios from 'axios';  // Corregir la ruta del import para axios

export const GET_NAME_CHARACTERS = "GET_NAME_CHARACTERS"
export const GET_CHARACTER = "GET_CHARACTER"
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS"
export const POST_CHARACTER = "POST_CHARACTER"
export const FILTER_BY_VALUE = "FILTER_BY_VALUE"
export const FILTER_CREATED = "FILTER_CREATED"
export const FILTER_BY_STATUS = "FILTER_BY_STATUS"

export const getNameCharacter = (id) => async (dispatch) => {}

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
  type: FILTER_BY_VALUE,
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
    dispatch({
      type: POST_CHARACTER,
      payload: response.data,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const filterCreated = (payload) => ({
  type: FILTER_CREATED,
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

