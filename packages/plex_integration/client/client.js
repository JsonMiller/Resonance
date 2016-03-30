Meteor.startup(function() {
    console.log("called!");
    Meteor.call("plexLogin", function(err, res) {
        console.log("callbacked!");
    });
});