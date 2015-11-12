Package.describe({
    summary: "Code needed to communicate with Plex",
    version: "0.0.1",
    name: "psshaded:plex-integration"
});

Package.onUse(function(api) {
    api.addFiles('client/client.js', 'client');
    api.addFiles('server/readPlaylist.js', 'server');
});