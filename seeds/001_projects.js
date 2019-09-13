
exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        { name: "Replace Car Starter", description: "Replace starter in my 2003 VW Golf GTI" },
        { name: "Create Portfolio Website", description: "", },
        { name: "Install Security Cameras", description: "Install Nest security cameras in two location outside the house", completed: true }
      ]);
    });
};
