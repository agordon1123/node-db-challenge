
exports.seed = function(knex) {
  return knex('project_resources').truncate()
    .then(function () {
      return knex('project_resources').insert([
        { project_id: "1", resource_id: "8", use: "" },
        { project_id: "1", resource_id: "1", use: "" },
        { project_id: "1", resource_id: "5", use: "" },
        { project_id: "1", resource_id: "6", use: "" },
        { project_id: "1", resource_id: "4", use: "Research" },
        { project_id: "1", resource_id: "16", use: "Research" },
        { project_id: "1", resource_id: "9", use: "Research" },
        { project_id: "2", resource_id: "10", use: "" },
        { project_id: "2", resource_id: "13", use: "" },
        { project_id: "2", resource_id: "14", use: "" },
        { project_id: "2", resource_id: "17", use: "" },
        { project_id: "2", resource_id: "18", use: "" },
        { project_id: "2", resource_id: "4", use: "" },
        { project_id: "2", resource_id: "9", use: "" },
        { project_id: "2", resource_id: "12", use: "Peer review" },
        { project_id: "3", resource_id: "1", use: "" },
        { project_id: "3", resource_id: "15", use: "" },
        { project_id: "3", resource_id: "11", use: "" },
        { project_id: "3", resource_id: "7", use: "Drilling hole for cord to run through wall" },
        { project_id: "3", resource_id: "2", use: "" },
        { project_id: "3", resource_id: "19", use: "" },
      ]);
    });
};
