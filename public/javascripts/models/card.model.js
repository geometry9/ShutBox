//cards.model.js
var Card = Backbone.Model.extend({
    defaults: {
      id: '',
      value: 0,
      flipped: false
    },
    idAttribute: "id"
  });
  
var Cards = Backbone.Collection.extend({
    model: Card
});