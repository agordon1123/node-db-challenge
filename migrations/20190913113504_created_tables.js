
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl
            .string('name', 128)
            .notNullable();
        tbl
            .string('description');
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl
            .string('name', 128)
            .notNullable();
        tbl
            .string('description');
    })
    .createTable('project_resources', tbl => {
        tbl.increments();
        tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .integer('resource_id')
            .unsigned()
            .references('id')
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .string('use', 255);
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .string('notes');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks');
};
