
const initState = {
  count:0,
  count2:999
}


export default (state=initState, action:{type:string})=> {
  switch (action.type) {
    case "incremented":
      return { ...state,count:state.count + 1 };
    case "decremented":
      return { ...state,count:state.count - 1 };
    default:
      return state;
  }
}