module.exports = function makeDataHelpers(knex) {
    return { 
        getRequests: function() {
            return knex('requests')
                .where({user_admin_id: 611})
                .then((results) => {
                    return results;
                })
                .catch(err => {
                    console.log(err)
                })
            }
    }
}