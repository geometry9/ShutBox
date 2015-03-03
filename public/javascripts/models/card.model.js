//cards.model.js
var Card = Backbone.Model.extend({
    defaults: {
      value: 0,
      flipped: false
    }
  });
  
var Cards = Backbone.Collection.extend({
    model: Card
});