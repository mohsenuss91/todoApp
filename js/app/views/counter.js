define([
   'jquery',
   'underscore',
   'backbone'
], function ($, _, Backbone) {
    'use strict';
    var CounterView = Backbone.View.extend({
        count: 0,
        
        initialize: function () {},
        
        events: {
            'click span': 'addToCounter',
            'click strong': 'removeView'
        },
        
        render: function () {
            var html = '<h3>This view has been <span>clicked</span> ' + this.count + ' times<strong>remove</strong></h3>';
            this.$el.html(html);
            return this;
        },

        addToCounter: function (e) {
            this.count++;
            this.render();
        },

        removeView: function (e) {
            this.remove();
        } 
    });
    return CounterView;
});
