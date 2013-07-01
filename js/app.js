App = Ember.Application.create();

App.store = DS.Store.create({
    adapter: DS.LSAdapter.create()
});

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
