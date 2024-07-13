exports.constants = {
  PORT: 5000,

  APP: {
    NAME: "Login Template",
  },

  DB: {
    URI: "mongodb+srv://Zero:zero1234@login.b6xhjrr.mongodb.net/?retryWrites=true&w=majority&appName=LOGIN",
  },

  STATUS: {
    VALIDATION_ERROR: {
      CODE: 400,
      TITLE: "Validation Failed",
    },
    UNAUTHORIZED: {
      CODE: 401,
      TITLE: "Unauthorized",
    },
    FORBIDDEN: {
      CODE: 403,
      TITLE: "Forbidden",
    },
    NOT_FOUND: {
      CODE: 404,
      TITLE: "Not Found",
    },
    SERVER_ERROR: {
      CODE: 500,
      TITLE: "Server Error",
    },
  },

  ORIGIN: {
    // adjust this to your frontend URL
    URL: "http://localhost:5173",
  },

  JWTCONFIG: {
    // adjust this to your secret key and expiration time
    SECRET: "P!$@r@S3cr3t",
    ADMIN_EXPIRESIN: "1d",
    EXPIRESIN: "1h",
    BEARER_REGEX: /^Bearer\s+(\S+)/,
  },

  ERROR: {
    MONGODB_NOT_DEFINE:
      "MONGODB_URI is not defined in the environment variables.",
    CONNECTION_FAILED: "Database connection failed:",
    UNEXPECTED: "An unexpected error occurred. Please try again later.",

    USER: {
      NOT_AUTHORIZED: "User is not authorized",
      NOT_FOUND: "User not found",
      INVALID_CREDENTIALS: "Invalid credentials",
      EMAIL_ALREADY_EXISTS: "Email already exists",
      NO_ACCOUNT: "No account found with this email. Please register.",
      INVALID_EMAIL: "Invalid email format",
      REQUIRED_FIELDS: "Both email and password are required.",
      ALREADY_EXIST: "User already exists",
      UPDATE_FAILED: "An error occurred during the update.",
      INVALID_ID: "Invalid user ID",
    },
  },

  SUCCESS: {
    SERVER: "Server running on port",
    DATABASE: "Database connected:",

    USER: {
      REGISTER: "User registered successfully",
      LOGIN: "Login successful",
      UPDATE: "Update successful",
      DELETE: "Delete successful",
    },
  },

  VALIDATION: {
    USER: {
      EMAIL: "email",
      PASSWORD: "password",
      ID: "id",
    },
  },

  POPULATE: {
    USER: {
      PATH: "createdBy",
      SELECT: "firstname lastname",
    },
  },

  METHOD: {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
  },
};
