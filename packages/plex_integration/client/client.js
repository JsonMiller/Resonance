Meteor.startup(function() {
    console.log("called!");
    Meteor.call("readPlaylists", function(err, res) {
        console.log("callbacked!");
    });
});