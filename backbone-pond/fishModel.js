// Please modify this file!

var Fish = Backbone.Model.extend({
	
  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  },
  this.toggleDescription : function() {
  	this.set('description', !this.get('description'))
  },


});
