var expect    = require("chai").expect;
var logout    = require('../src/js/actions/logout.js')

describe("Logout", function() {
  describe("Logout Action", function() {
    it("Should dispatch payload of cookieSession null to reducer", function() {
      console.log(logout)
      var result = logout('test')
      expect(result).to.deep.equal({
        type: 'USER_LOGOUT',
        payload: {
          cookieSession: null
        },
    });
    });
  });
});