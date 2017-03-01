const FollowToggle = require('./follow_toggle.js');

$(() => {
  $(".follow-toggle").each((idx, el) => {

    let buttonState = new FollowToggle(el);
    console.log(el);
    console.log(buttonState);
  });
});
