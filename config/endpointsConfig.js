module.exports = {
  API_ENDPOINTS: {
    MAIN: {
      DEFAULT: "/api",
    },

    USER: {
      GET: "/user/get/all",
      GET_BY_ID: "/user/get/:id",
      POST: "/user/create",
      PUT: "/user/update",
      DELETE: "/user/remove/:id",
      LOGIN: "/user/login",
      CHECKLOGIN: "/current/user",
    },
  },
};
