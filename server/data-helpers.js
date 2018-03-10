module.exports = function makeDataHelpers(knex) {
    return { 
        getForums: function() {
            return knex('requests')
                .where({user_admin_id: 780})
                .then((results) => {
                    return results;
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getFriendsForums: function() {
            return knex('requests')
                .where({user_admin_id: 780})
                .then((results) => {
                    return results;
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}