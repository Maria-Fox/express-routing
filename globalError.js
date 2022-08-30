class GlobalError extends Error {
  constructor(message, status) {
    // we have to pull from the parent Error class we're extending from
    super();
    // items to be passed in/ sent back for errors in app.js
    this.message = message;
    this.status = status;
    console.log(this.status);
  }
}

// export the class to be used in routes.js
module.exports = GlobalError;
