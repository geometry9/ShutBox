//dice.model.js
var Die = Backbone.Model.extend({
    defaults: {
      id: '',
      value: 0
    },
    idAttribute: "id",
  });
  
var Dice = Backbone.Collection.extend({
    model: Die,
    total: function(){
    	return this.reduce(function(memo, value) { return memo + value.get("value") }, 0);
    }
});
