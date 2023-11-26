const router = require("express").Router();
const controller = require("../controllers/controller");

router.route("/").get(controller.fetchAllJobs).post(controller.addJob);

router.route("/:id").get(controller.fetchSingleJob);

module.exports = router;
