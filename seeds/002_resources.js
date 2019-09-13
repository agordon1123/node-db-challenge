
exports.seed = function(knex) {
  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        { name: "Screwdriver", description: "Phillips/Flathead combination" },
        { name: "Nest Cameras", description: "New in box" },
        { name: "Pipe Wrench", description: "" },
        { name: "Laptop", description: "13\" Macbook Pro" },
        { name: "Starter", description: "New OEM starter" },
        { name: "Rags", description: "" },
        { name: "Holesaw", description: "1\"" },
        { name: "Socket set", description: "SAE and Metric combination socket set" },
        { name: "Youtube", description: "" },
        { name: "IDE", description: "Code editor: Currently VSCode" },
        { name: "Screws", description: "Standard #2 1-3/4\" screws" },
        { name: "Lambda P.M.", description: "Currently Ryan McLaughlin" },
        { name: "Node.js", description: "" },
        { name: "Git", description: "Version control" },
        { name: "Impact Gun", description: "Dewalt 12v cordless" },
        { name: "Google", description: "" },
        { name: "Netlify", description: "" },
        { name: "Package manager", description: "NPM and yarn" },
        { name: "Ladder", description: "6 foot ladder" },
      ]);
    });
};
