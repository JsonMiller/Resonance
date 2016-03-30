Meteor.methods({
    "plexLogin" : function() {
        console.log("logging in!");

        var data = {
            "user[login]" : "dev.jmiller@gmail.com",
            "user[password]" : "snotblu3",
            "user[remember_me]" : 1,
            "commit" : "Sign In"
        };

        var result = HTTP.post("https://plex.tv/users/sign_in", {
            headers: {
                "Accept" : "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
                "Accept-Encoding" : "gzip, deflate",
                "Accept-Language" : "en-US,en;q=0.8",
                "Cache-Control": "max-age=0",
                "Connection": "keep-alive",
                "Content-Length" : data.length,
                "Content-Type": "application/x-www-form-urlencoded",
                "Host": "plex.tv",
                "Origin" : "https://plex.tv",
                "Referer" : "https://app.plex.tv/users/sign_in",
                "Upgrade-Insecure-Requests":1,
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36"
            },
            auth: "dev.jmiller@gmail.com:snotblu3",
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