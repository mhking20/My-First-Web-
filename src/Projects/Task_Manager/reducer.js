
const initialState = {
  loading: false,
  array: [],
  clearbtn : false,
  edit : false,
  id : ""

};

const reducer = (state = initialState, action) => {
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "NOLOADING") {
    return { ...state, loading: false };
  }
  if (action.type === "ALL_TASK") {
    localStorage.setItem("all_task" , JSON.stringify(action.payload.array))
    return { ...state , array : action.payload.array };
  }
  if (action.type === "CLEAR_BTN") {
    return { ...state , clearbtn : true };
  }
  if (action.type === "EDIT") {
    return { ...state , edit : action.payload };
  }
  if (action.type === "ID") {
    return { ...state , id : action.payload };
  }

  return state;
};

export default reducer;
