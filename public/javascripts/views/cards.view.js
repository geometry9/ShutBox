  //cards view
  var CardsView = Backbone.View.extend({
    el: '.cards',
    events: {
      'click .submit-play': 'submitPlay',
      'click .card': 'addPlay'
    },
    initialize: function(){
      _.bindAll(this, 'render');
      this.collection = new Cards(); // every function that uses 'this' as the current object should be in here
      this.render();
    },
    render: function(){
      //console.log($(this.el));
      
      for(var i=1;i < 10;i++){
        this.collection.add(new Card({value: i, flipped: false}));
      }
      console.log(this.collection);
    },
    addPlay: function(){

    },
    submitPlay: function(){

    }
    
  });
$(document).ready(function(){
  var cardsView = new CardsView();
});