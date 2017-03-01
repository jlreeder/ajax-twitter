class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.attr("data-user-id");
    this.followState = this.$el.attr("data-initial-follow-state");
    this.render();
    this.$el.on("click", this.handleClick.bind(this));
  }

  render() {
    const text = this.followState === "unfollowed" ? "Follow" : "Unfollow";
    this.$el.html(text);
  }

  handleClick(event) {
    event.preventDefault();
    let method = this.followState === 'unfollowed' ? 'POST' : 'DELETE';

    $.ajax({
      method: method,
      url: `/users/${this.userId}/follow`,
      dataType: "json",
      data: {
        followee_id: this.userId
      },
      success: () => {
        this._toggleState();
        this.render();
      }
    });
  }

  _toggleState() {
    this.followState = this.followState === "unfollowed" ?
                                            "followed" : "unfollowed";
  }

} //closes class
module.exports = FollowToggle;
