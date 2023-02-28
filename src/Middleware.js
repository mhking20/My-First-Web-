import axios from "axios";

const Middleware = () => {
  return async (dispatch) => {
      if (
        window.location.href !== "https://mian-first-web.netlify.app/" &&
        window.location.href !== "https://mian-first-web.netlify.app/login" &&
        window.location.href !== "https://mian-first-web.netlify.app/reg"
      ) {
        try {
          dispatch({ type: "LOADING" });
          if (localStorage.getItem("token")) {
            const token = localStorage.getItem("token");
            const gettoken = await axios.get(
              "https://mian-first-web.onrender.com/api/v1/auth",
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            );
            dispatch({ type: "!LOADING" });
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

        try {
          const get = async () => {
            dispatch({ type: "LOADING" });
            const token = localStorage.getItem("token");
            const get = await axios.get("https://mian-first-web.onrender.com/api/v1/user", {
              headers: { Authorization: `Bearer ${token}` },
            });
            dispatch({ type: "!LOADING" });
            const info = get.data.get;
            dispatch({
              type: "ACCOUNT_INFO",
              payload: {
                _id: info._id,
                fullname: info.fullname,
                username: info.username,
                email: info.email,
              },
            });
          };
          dispatch({ type: "GET_INFO", payload: { get } });
        } catch (error) {
          localStorage.removeItem("token");
          console.log(error);
        }
      }
    }
  };

export { Middleware };
