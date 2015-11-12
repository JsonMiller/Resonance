Meteor.methods({
    "readPlaylists" : function() {
        console.log("server called!");

        var result = HTTP.call("GET", "https://68-46-76-110.5ea48635b4c94854b0daa32ed1709131.plex.direct:13481/playlists/all", {
            query : "type=15&sort=title:undefined",
            headers: {
                "Accept" : "text/plain, */*",
                "Accept-Encoding" : "gzip, deflate, sdch",
                "Accept-Language" : "en",
                "Connection": "keep-alive",
                "Host" : "68-46-76-110.5ea48635b4c94854b0daa32ed1709131.plex.direct:13481",
                "Origin" : "https://app.plex.tv",
                "Referer" : "https://app.plex.tv/web/app",
                "X-Plex-Client-Identifier": "b134f32f-2cce-4b0e-8a16-3ed2e539383a",
                "X-Plex-Device": "OSX",
                "X-Plex-Device-Name": "Plex Web (Chrome)",
                "X-Plex-Platform" : "Chrome",
                "X-Plex-Platform-Version" : "46.0",
                "X-Plex-Product" : "Plex Web",
                "X-Plex-Token": "Fx8ytFUD1DEJ3pqpFTRP",
                "X-Plex-Username": "Shaded",
                "X-Plex-Version":"2.4.23"
            },
            npmRequestOptions: {
                gzip : true
            }
        }, function(err, res) {
            console.log("err: ", err);
            console.log("res: ", res);
        });

        console.log("result: ", result);
    }
});