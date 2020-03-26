export const ADD_AGENCY_DATA = "ADD_AGENCY_DATA ";
export const DELETE_AGENCY_DATA = "DELETE_AGENCY_DATA ";
export const UPDATE_AGENCY_DATA = "UPDATE_AGENCY_DATA ";


export function addAgency(newData) {
     return { type: ADD_AGENCY_DATA, payload: newData }
}

export function deleteAgencyData(index) {
     return { type: DELETE_AGENCY_DATA, payload: index }
}

export function updateAgencyData(id, updatedData) {
     return { type: UPDATE_AGENCY_DATA, payload: { id, updatedData } }
} 