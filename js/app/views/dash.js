define([
   'jquery',
   'underscore',
   'backbone'
], function ($, _, Backbone) {
    'use strict';
    var DashView = Backbone.View.extend({
        count: 0,
        
        initialize: function () {},
        
        render: function () {
            var html = '<h3>This Dashbord view</h3>';
            this.$el.html(html);
            return this;
        },

    });
    return DashView;
});