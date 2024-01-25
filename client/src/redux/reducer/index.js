import {GET_NAME_CHARACTERS,
  FILTER_BY_VALUE,
  GET_TEMPERAMENTS,
  FILTER_CREATED, 
  GET_CHARACTER,
  FILTER_BY_STATUS,
  POST_CHARACTER

} from '../actions'

const initialState = {
  characters: [],
  allCharacters: [], // Agregar coma aquí
  temperaments: []
};

  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GET_CHARACTER:
        return {
          ...state,
          characters: action.payload,
        allCharacters:action.payload
        };
        case GET_NAME_CHARACTERS:
          return{
            ...state,
            characters:action.payload //rederizado
          }
          case GET_TEMPERAMENTS:
  return {
    ...state,
    temperaments: action.payload,
  };

        case FILTER_BY_STATUS:
        const allCharacters=state.allCharacters
        const statusFiltered=action.payload==='Temperaments'? allCharacters:allCharacters.filter(el=>el.status===action.payload) //por payload se le pasa lo que llega por el back  
        return{
...state,
characters:statusFiltered
          }
          case POST_CHARACTER:
            return{
              ...state,
            }

          case FILTER_CREATED:
        const allCharacters2= state.allCharacters
          const createdFilter=action.payload === 'bueno'? allCharacter.filter(el=> el.createdInDb):
          allCharacters.filter(el=>!el.createdInDb) 
          return {
            ...state,
            characters:action.payload=== 'temperaments'?state.allCharacters : createdFilter

          }
      default:
        return state;
    }
  }
  
  




// const initialState = {
//     dog = []
// }


// function rootReducer(state =initialState, action){
//     switch(action.type){
//         case 'GET_DOG':
//             return{
//                 ...state,
//                 dog:action.payload
//             }
//     }

// }

export default rootReducer;