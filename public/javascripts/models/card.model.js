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
    model: Card,
    total: function(){
    	return this.reduce(function(memo, value) { 
    		if(!value.get("flipped"))
    			return memo + value.get("value");
    		else
    			return memo;
    	}, 0);
    }
});