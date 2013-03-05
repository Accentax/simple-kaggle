Template.main.created = function() {
  $('#navbar').scrollspy()
  
  initMixpanel();
  if (document.location.hostname.search("localhost") != -1) {
    mixpanel.register({"development": 'true'});
  }
  mixpanel.track("Loaded");
}