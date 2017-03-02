const APIUtil = require("./api_util.js");

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = $(".users-search input");
    this.$ul = $(".users-search ul");
    this.$input.on("keypress", this.handleInput.bind(this));
  }

  handleInput (event) {
    APIUtil.searchUsers(this.$input.val());
  }

  successCallback () {
    console.log("callback");
  }
}

module.exports = UsersSearch;
