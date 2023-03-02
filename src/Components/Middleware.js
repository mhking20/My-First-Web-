import axios from "axios";
const Auth = async (dispatch) => {
  if (
    window.location.href !== "https://mian-first-web.onrender.com/" &&
    window.location.href !== "https://mian-first-web.onrender.com/login" &&
    window.location.href !== "https://mian-first-web.onrender.com/reg"
  ) {
    try {
      if (localStorage.getItem("token")) {
        const token = localStorage.getItem("token");
        const gettoken = await axios.get("https://mian-first-web.onrender.com/api/v1/auth", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (gettoken.data.auth) {
          dispatch({ type: "AUTH", payload: true });
        } else if (gettoken.data.msg) {
          dispatch({ type: "AUTH", payload: false });
        }
      } else {
        dispatch({ type: "AUTH", payload: false });
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    localStorage.clear()
  }
};

const Get = async (dispatch) => {
  try {
    if(localStorage.getItem("token")){ 
    const token = localStorage.getItem("token");
    const get = await axios.get("https://mian-first-web.onrender.com/api/v1/user", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const info = get.data.get;
    dispatch({
      type: "ACCOUNT_INFO",
      payload: {
        _id: info._id,
        fullname: info.fullname,
        username: info.username,
        email: info.email,
      },
    })}
  } catch (error) {
    localStorage.removeItem("token");
    console.log(error);
  }
};

export { Auth, Get };
