/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("job_listings").del();
  await knex("job_listings").insert([
    {
      title: "Carpenter",
      description: "Skilled carpenter needed for construction projects.",
      company: "BuildIt Construction",
      location: "Cityville, CA",
      desc: "BuildIt Construction is seeking a highly skilled carpenter to join our team for various construction projects in Cityville, CA. As a carpenter, you will be responsible for interpreting blueprints, selecting materials, measuring and cutting materials to the required specifications, and constructing frameworks, structures, and fixtures. Attention to detail and precision are crucial in ensuring the successful completion of our projects.",
      salary: 250.0,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Construction Laborer",
      description: "Assist carpenters and other trades in construction tasks.",
      company: "ConstructCo",
      location: "Townsville, TX",
      desc: "ConstructCo is currently hiring construction laborers to assist our skilled tradespeople in the bustling town of Townsville, TX. As a construction laborer, your role will involve performing a variety of tasks, including but not limited to lifting and carrying materials, operating hand and power tools, and providing support to carpenters and other construction professionals. This position is an excellent opportunity to gain hands-on experience in the construction industry.",
      salary: 120.0,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Carpentry Supervisor",
      description: "Lead and supervise carpentry teams on construction sites.",
      company: "MasterBuilders Inc.",
      location: "Buildersburg, FL",
      desc: "Join MasterBuilders Inc. as a Carpentry Supervisor in Buildersburg, FL, where you will play a crucial role in leading and supervising carpentry teams on construction sites. The ideal candidate will have extensive carpentry experience, strong leadership skills, and the ability to coordinate and manage construction projects efficiently. This position offers the opportunity to take on a leadership role and contribute to the success of our construction endeavors.",
      salary: 300.0,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Concrete Finisher",
      description:
        "Specialized in finishing concrete surfaces for construction projects.",
      company: "SolidFoundations",
      location: "Concrete City, CA",
      desc: "SolidFoundations is in search of a skilled Concrete Finisher to join our team in Concrete City, CA. As a Concrete Finisher, you will specialize in creating smooth and durable finishes on concrete surfaces for construction projects. This role requires expertise in concrete mixing, pouring, and finishing techniques, as well as a keen eye for detail to achieve high-quality results that meet project specifications.",
      salary: 250.0,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Heavy Equipment Operator",
      description: "Operate heavy machinery on construction sites.",
      company: "BigDig Construction",
      location: "Excavation Town, AZ",
      desc: "BigDig Construction is hiring a Heavy Equipment Operator to work in Excavation Town, AZ. In this role, you will be responsible for operating a variety of heavy machinery, including bulldozers, excavators, and loaders, to perform tasks such as excavation, grading, and site preparation. The ideal candidate will have experience in heavy equipment operation and a commitment to safety on construction sites.",
      salary: 250.0,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Construction Project Manager",
      description:
        "Oversee and manage construction projects from start to finish.",
      company: "ProjectMasters LLC",
      location: "Managerial Heights, NY",
      desc: "ProjectMasters LLC is looking for an experienced Construction Project Manager to oversee and manage construction projects from start to finish in Managerial Heights, NY. The Project Manager will be responsible for planning, coordinating, and executing projects, ensuring they are completed on time, within budget, and in accordance with quality standards. Strong organizational and communication skills are essential for success in this role.",
      salary: 400.0,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
