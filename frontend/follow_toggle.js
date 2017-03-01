const APIUtil = require("./api_util.js");

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.$el.on("click", this.handleClick.bind(this));
  }

  render() {
    const text = this.followState === "unfollowed" ? "Follow" : "Unfollow";
    this.$el.html(text);
  }

  handleClick(event) {
    event.preventDefault();
    if (this.followState === 'unfollowed') {
      APIUtil.followUser(this.userId).then(this.successActions());
    } else {
      APIUtil.unfollowUser(this.userId).then(this.successActions());
    }
  }

  successActions() {
   this._toggleState();
   this.render();
 }

  _toggleState() {
    this.followState = this.followState === "unfollowed" ?
                                            "followed" : "unfollowed";
  }

} //closes class
module.exports = FollowToggle;
