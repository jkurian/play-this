module.exports = function makeDataHelpers(knex) {
 
    return { 
        getForums: function() {
            return knex('requests')
                .where({user_admin_id: 2})
                .then((results) => {
                    return results;
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getFriendsForums: function() {
            return knex('userfriends')
                .rightJoin('requests', 'user_id2', 'user_admin_id')
                .where({user_id1: 2})
                .then((results) => {
                    return results;
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
