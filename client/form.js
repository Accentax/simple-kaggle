Template.form.events({
  'submit': function(event, template) {
    var name = template.find("input[name='name']").value;
    var score = template.find("input[name='score']").value;
    var comment = template.find("textarea[name='comment']").value;
    
    errors = [];
    if (name == "")
      errors.push("Please tell us a little bit about yourself (name?).");
    if (score == "" || !isNumber(score) || score < 0 || score > 1)
      errors.push("Please enter a valid error score: a number between 0 and 1.");
    if (errors.length > 0) {
      Session.set("form-errors", errors);
      mixpanel.track("Form errors");
      return false;
    }
    else {
      Session.set("form-errors", false);
    }
    
    Scores.insert({'name': name, 'score': score, 'comment': comment, 'when': new Date()});
    mixpanel.track("Score submitted");
    return false;
  }
})

Template.form.hasErrors = function() {
  var errors = Session.get("form-errors");

  return errors && errors.length > 0;
}
Template.form.errors = function() {
  return Session.get("form-errors").join("<br/>");
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

