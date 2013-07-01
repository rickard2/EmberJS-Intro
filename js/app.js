App = Ember.Application.create();

App.store = DS.Store.create({
    adapter: DS.LSAdapter.create()
});

App.Router.map(function () {
    this.resource('notes', function () {
        this.route('view', {path: '/:note_id'});
        this.route('edit', {path: '/edit/:note_id'});
        this.route('add');
    });
});

App.IndexRoute = Ember.Route.extend({
    redirect: function () {
        this.transitionTo('notes.index');
    }
});

App.NotesRoute = Ember.Route.extend({
    model: function () {
        return App.Note.find();
    }
});

App.NotesAddRoute = Ember.Route.extend({
    model: function () {
        return App.Note.createRecord({});
    }
});
