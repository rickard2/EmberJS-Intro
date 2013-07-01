App.NotesAddController = Ember.ObjectController.extend({
    save: function () {
        App.store.commit();
        this.transitionTo('notes.view', this.get('content'));
    }
});