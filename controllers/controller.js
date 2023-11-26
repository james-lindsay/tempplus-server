const { validateJobInput } = require("../validation");

const knex = require("knex")(require("../knexfile"));

const fetchAllJobs = async (_req, res) => {
  try {
    const jobs = await knex("job_listings");
    res.status(200).json(jobs);
  } catch (error) {
    console.log(error, res, "Error fetching job list.");
  }
};

const fetchSingleJob = async (req, res) => {
  try {
    const jobFound = await knex("job_listings").where({
      id: req.params.id,
    });

    if (jobFound.length === 0) {
      return console.log(res, `Job with ID ${req.params.id} not found`);
    }

    const jobData = jobFound[0];
    res.status(200).json(jobData);
  } catch (error) {
    console.log(error);
    error,
      res,
      `Unable to retrieve warehouse data for Job with ID ${req.params.id}`;
  }
};

const addJob = async (req, res) => {
  if (!validateJobInput(req.body)) {
    return res
      .status(400)
      .json({ error: "Please fill in all components in the form" });
  }
  try {
    const newJobId = await knex("job_listings").insert(req.body);
    const createdJob = await knex("job_listings").where({
      id: newJobId[0],
    });
    res.status(201).json(createdJob);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to create new Warehouse" });
  }
};

module.exports = {
  addJob,
  fetchAllJobs,
  fetchSingleJob,
};
