module.exports = function (knex) {

  return {
    // getAll: function (table, callback) {
    //   knex.raw('select * from ' + table).then(function (resp) {
    //     callback(null, resp)
    //   })
    // },
    getAll: function(table, callback) {
      knex.select().table(table).then(function(resp) {
        callback(null, resp)
      })
    },

    find: function(table, params, callback) {
      knex(table).where(params).then(function(resp) {
        callback(null, resp)
      })
    },

    // findOne: function (table, params, callback) {
    //   knex.raw('select * from ' + table + ' where ' + 'id=' + params.id).then(function (resp) {
    //     callback(null, resp[0])
    //   })
    // },
    findOne: function(table, params, callback) {
      knex(table).where(params).then(function(resp) {
        callback(null, resp[0])
      })
    },

    // add: function(table, params, callback) {
    //   knex.raw('insert into '  + table + ' (name, year_debuted, created_at, updated_at) values("' + params.name + '", "' + params.year_debuted + '", "' + params.created_at + '", "' + params.updated_at + '")').then(function (resp) {
    //     callback(null, resp[0])
    //   })
    // },
    add: function(table, params, callback) {
      knex(table).insert(params).then(function(resp) {
        callback(null, resp[0])
      })
    },

    // delete: function (table, params, callback) {
    //   knex.raw('delete from ' + table + ' where id=' + params.id).then(function(resp) {
    //     callback(null, resp[0])
    //   })
    // },
    delete: function(table, params, callback) {
      knex(table).where(params).del().then(function(resp) {
        callback(null, resp[0])
      })
    },

    // update: function(table, searchParams, updateInfo, callback) {
    //   knex.raw('update ' + table + ' set year_disbanded=' + updateInfo.year_disbanded + " where id=" + searchParams.id).then(function(resp) {
    //     callback(null, resp[0])
    //   })
    // }
    update: function(table, searchParams, updateInfo, callback) {
      knex(table).where(searchParams).update(updateInfo).then(function(resp) {
        callback(null, resp[0])
      })
    }
  }
}
