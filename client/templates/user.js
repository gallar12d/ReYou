Template.user.events({ 
    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
       Router.go('/');   
    }
});



Template.user.helpers({

 imagenface: function(){
      return  Meteor.users.findOne({_id: Meteor.userId()});
    }

});