//Dice View

  var DiceView = Backbone.View.extend({
    el: '.dice',
    events: {
      'click .roll': 'rollDice'
    },
    initialize: function(){
       _.bindAll(this, 'render'); // every function that uses 'this' as the current object should be in here
      this.render();
    },
    render: function(){
      //console.log($(this.el));
      console.log($(this.el).find('.die'))
      $(this.el).find('.die').text(0);
    },
    rollDice: function(e){
      var self = this;
      $(this.el).find('.die').each(function(){
        $(this).text(self.rand());
      });
      
    },
    rand: function(){
      return Math.floor(Math.random() * (6 - 1 +1)) + 1;
    }
  });
$(document).ready(function(){
  var diceView = new DiceView();
});
  
