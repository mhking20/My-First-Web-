const initialState = {
  Reg_fullname: "",
  Reg_username: "",
  Reg_email: "",
  Reg_password: "",
  Reg_confirmPassword: "",
  auth: false,
  loading: false,
  demo: true,
  theme_1: false,
  theme_2: false,
  default_theme: true,
};

const reducer = (state = initialState, action) => {
  if (action.type === "REG_FORM") {
    console.log(state);
    return {
      ...state,
      Reg_fullname: action.payload.fullname,
      Reg_username: action.payload.username,
      Reg_email: action.payload.email,
      Reg_password: action.payload.password,
      Reg_confirmPassword: action.payload.confirmPassword,
    };
  }
  if (action.type === "ACCOUNT_INFO") {
    localStorage.setItem(
      "account_info",
      JSON.stringify({
        fullname: action.payload.fullname,
        id: action.payload._id,
        username: action.payload.username,
        email: action.payload.email,
      })
    );
    return {
      ...state,
    };
  }
  if (action.type === "AUTH") {
    localStorage.setItem("auth", action.payload);
    return {
      ...state,
    };
  }
  if (action.type === "LOADING") {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === "!LOADING") {
    return {
      ...state,
      loading: false,
    };
  }
  return state;
};

export default reducer;
