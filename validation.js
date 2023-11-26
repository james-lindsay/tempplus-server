const validateJobInput = (body) => {
  return (
    body.title &&
    body.location &&
    body.salary &&
    body.description &&
    body.desc &&
    body.company
  );
};

module.exports = {
  validateJobInput,
};
