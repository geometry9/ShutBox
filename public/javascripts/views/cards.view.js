  var vent = {}; // or App.vent depending how you want to do this
  _.extend(vent, Backbone.Events);
  var CardsView = Backbone.View.extend({
    el: '.cards',
    play: [],
    events: {
      'click .pick-play': 'submitPlay',
      'click .card': 'addPlay',
      'click .end-game': 'score',
    },
    initialize: function(){
      _.bindAll(this, 'render');
      this.collection = new Cards();
      this.populate();
      this.listenTo(vent, "acceptPlay", this.acceptPlay);
      this.render();
    },
    render: function(){
      var cards = $('.card');
      $('.card.chosen').removeClass('chosen');
      for(var x = 0; x < this.collection.length; x++){
        var card = this.collection.get(x+1);
        $(cards[x]).text(card.get('value'));
        if(card.get('flipped'))
          $(cards[x]).addClass('flipped')
      }
      $('.card.flipped').on('click', function(){ return false; });
    },
    populate: function(){
      for(var i=1;i < 10;i++){
        this.collection.add(new Card({ id: i, value: i, flipped: false}));
      }
    },
    addPlay: function(ev){
      var el = $(ev.target).toggleClass('chosen')
      if($(el).hasClass('chosen')){
        this.play.push(parseInt($(el).text()));
      }else{
        for(var n = 0; n < this.play.length; n++){
          if(this.play[n] === parseInt($(el).text())){
            this.play.splice(n, 1);
          }
        }
      }
    },
    submitPlay: function(){
      if(this.play.length > 0 ){
        var sum = this.play.reduce(function(prev, cur) {
                        return prev + cur;
                    });
      }
     vent.trigger('check', sum);
      
    },
    acceptPlay: function(){
      for (var i = 0; i < this.play.length; i++) {
        var card = this.collection.get(this.play[i]);
        card.set({flipped: true});
      };
      this.render();
      this.play = [];
    },
    score: function(){
      alert("Your score is: " + this.collection.total() + "!!!");
    }
    
  });
$(document).ready(function(){
  var cardsView = new CardsView();
});