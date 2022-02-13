let stateDefault = {
  exercise:[]
}
export function reducers(state=stateDefault, action){
  if (action.type =="GETEXERCISE") {
    console.log(action.payload);
    state.exercise = action.payload
    console.log(state);
    return {...state}
  }
  return state;
}
