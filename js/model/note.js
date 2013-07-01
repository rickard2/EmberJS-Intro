App.Note = DS.Model.extend({
    title: DS.attr('string'),
    body: DS.attr('string'),
    excerpt: function () {
        var body = this.get('body');

        if (body && body.length > 40) {
            return body.substr(0, 40) + '…';
        }

        return body;

    }.property('body')
});