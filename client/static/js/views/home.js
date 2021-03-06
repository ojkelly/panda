PANDA.views.Home = Backbone.View.extend({
    initialize: function(options) {
        _.bindAll(this);
    },

    render: function() {
        var recent_datasets = new PANDA.collections.Datasets()

        recent_datasets.fetch({
            data: { limit: 5 },
            success: _.bind(function() {
                var context = PANDA.utils.make_context({
                    recent: recent_datasets.results()
                });

                this.$el.html(PANDA.templates.home(context));
            }, this)
        });
    }
});

