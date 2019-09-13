
exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
          tbl.increments();
          tbl
              .string('name', 128)
              .notNullable();
          tbl
              .string('description');
          tbl
              .boolean('completed')
              .defaultTo(false);
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
              .string('description', 255)
              .notNullable();
          tbl
              .boolean('completed')
              .defaultTo(false);
          tbl
              .string('notes');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
  };
  