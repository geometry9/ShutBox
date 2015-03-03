//Dice View
  var vent = {}; 
  _.extend(vent, Backbone.Events);
  var DiceView = Backbone.View.extend({
    el: '.dice',
    events: {
      'click .roll': 'rollDice',
      'check .dice': 'check'

    },
    initialize: function(){
       _.bindAll(this, 'render');
        this.collection = new Dice();
        this.listenTo(vent, "check", this.check);
        this.collection.add(new Die({ id: 0, value: 0}));
        this.collection.add(new Die({ id: 1, value: 0}));
        this.render();
    },
    render: function(){
        var dice = $('.die');
        for(var x = 0; x < this.collection.length; x++){
            var die = this.collection.get(x);
            $(dice[x]).text(die.get('value'));
        }
    },
    rollDice: function(e){
        var self = this;
        for(var x = 0; x < this.collection.length; x++){
            var die = this.collection.get(x);
            die.set({value: this.rand() });
        }
        this.render();
        $('.roll').addClass('disabled');
    },
    rand: function(){
      return Math.floor(Math.random() * (6 - 1 +1)) + 1;
    },
    check: function(data){
        
        if(data !== this.collection.total()){
            alert("Your play doesn't quite add up! Try again.");
        }else{
            vent.trigger('acceptPlay');
            $('.roll').removeClass('disabled');
        }
    }
  });
$(document).ready(function(){
  var diceView = new DiceView();
});
  
