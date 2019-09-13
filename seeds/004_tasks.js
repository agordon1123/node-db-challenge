
exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(function () {
      return knex('tasks').insert([
        { project_id: "1", description: "Remove battery", completed: "true", notes: "" },
        { project_id: "1", description: "Remove wiring to starter", completed: "false", notes: "" },
        { project_id: "1", description: "Remove start", completed: "false", notes: "" },
        { project_id: "1", description: "Install new starter", completed: "false", notes: "" },
        { project_id: "1", description: "Re-install battery", completed: "false", notes: "Be sure to clean battery terminal connections" },
        { project_id: "1", description: "Test", completed: "false", notes: "" },
        { project_id: "2", description: "Create respository", completed: "true", notes: "" },
        { project_id: "2", description: "Create react app", completed: "true", notes: "" },
        { project_id: "2", description: "Install dependencies", completed: "true", notes: "" },
        { project_id: "2", description: "Code front-end", completed: "false", notes: "" },
        { project_id: "2", description: "Deploy", completed: "false", notes: "" },
        { project_id: "3", description: "Mount new camera in desired location", completed: "true", notes: "" },
        { project_id: "3", description: "Drill hole for power cable feed", completed: "true", notes: "" },
        { project_id: "3", description: "Run cable and secure with screws", completed: "true", notes: "" },
        { project_id: "3", description: "Plug camera in and test", completed: "true", notes: "" },
      ]);
    });
};
