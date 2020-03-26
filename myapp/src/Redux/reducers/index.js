import { ADD_AGENCY_DATA, DELETE_AGENCY_DATA, UPDATE_AGENCY_DATA } from "../actions/agencies";

let initialState = {
     data: [
          {
               id: 1,
               name: "New York Times",
               location: "New York"
          },
          {
               id: 2,
               name: "Boston Times",
               location: "Boston"
          },
          {
               id: 3,
               name: "Virginia Times",
               location: "Virginia"
          },
          {
               id: 4,
               name: "New Jersey",
               location: "New Jersey"
          },
          {
               id: 5,
               name: "New York Times",
               location: "New York"
          },
          {
               id: 6,
               name: "New York Times",
               location: "New York"
          },
     ]
}

const Reducer = (state = initialState, action) => {
     switch (action.type) {
          case ADD_AGENCY_DATA:
               const newData = action.payload;
               return {
                    ...state, data: [newData, ...state.data]
               }
          case DELETE_AGENCY_DATA:
               return {
                    ...state,
                    data: state.data.filter((agency) => agency.id !== action.payload)
               }
          case UPDATE_AGENCY_DATA:
               let { id, updatedData } = action.payload
               updatedData = { ...updatedData, id }
               let updatedAgencies = state.data.map(agency => (agency.id === id ? updatedData : agency));

               return {
                    ...state, data: updatedAgencies
               }
          default:
               return state;
     }
}


export default Reducer;