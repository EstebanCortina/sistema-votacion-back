module.exports = (() => {
  const router = require("express").Router();

  const ApiController = require("../controllers/api_controller");
  router.get("/", ApiController);
  return router;
})();
