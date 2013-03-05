Template.board.scores = function() {
  return Scores.find({}, {sort:[["score", "asc"], ["when", "desc"]]});
}

Template.row.when = function() {
  return moment(this.when).fromNow();
}

Template.row.score = function() {
  return (this.score * 100).toFixed(2);
}
Template.row.comment = function() {
  return this.comment.trunc(40, true);
}
Template.row.longComment = function() {
  return this.comment.length > 40;
}
Template.row.fullComment = function() {
  return converter.makeHtml(this.comment);
}

Template.board.rendered = function() {
  $('a[rel=collapse]').collapse();
}


/* Misc useful functions and objects */
var converter = new Showdown.converter();
String.prototype.trunc =
     function(n,useWordBoundary){
         var toLong = this.length>n,
             s_ = toLong ? this.substr(0,n-1) : this;
         s_ = useWordBoundary && toLong ? s_.substr(0,s_.lastIndexOf(' ')) : s_;
         return  s_;
      };
