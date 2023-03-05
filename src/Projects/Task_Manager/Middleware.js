import axios from "axios";

const alltask = async (dispatch) => {
  try {
    const info = await JSON.parse(localStorage.getItem("account_info"));
    const alltask = await axios.get("https://mian-first-web.onrender.com/api/v1/task", {
      params: { User: info.username },
    });
    await dispatch({
      type: "ALL_TASK",
      payload: { array: alltask.data.task, username: info.username },
    });
  } catch (error) {
    console.log(error);
  }
};

export { alltask };
