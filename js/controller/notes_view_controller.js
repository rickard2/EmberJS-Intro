App.NotesViewController = Ember.ObjectController.extend({
    remove: function () {
        var note = this.get('content');
        note.deleteRecord();
        App.store.commit();

        this.transitionTo('notes.index');
    }
});