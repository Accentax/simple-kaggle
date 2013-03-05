Scores = new Meteor.Collection("scores");

if (Meteor.isClient) {
  Meteor.subscribe("scores");
}

if (Meteor.isServer) {
  Meteor.startup(function() {
    Scores.allow({
      insert: function(userId, doc) {
        return true;
      }
    });
  });
  
  Meteor.publish("scores", function() {
  	return Scores.find({});
  });
}