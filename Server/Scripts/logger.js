﻿function Logger(display) {
    
    var logQueue = [];
    var loggerHub = null;
    var connected = false;

    var write = function(message) {
        console.log(message);

        if (!connected)
        {
            logQueue.push(message);
        }
        else
        {
            loggerHub.server.info(message);
        }

        if (!display)
            return;

        display.prepend(message + "<br />");
    };

    var connect = function (connection) {
        loggerHub = connection.logEntriesHub;
        connected = true;

        for (var i = 0; i < logQueue.len; i++) {
            loggerHub.server.info(logQueue[i]);
        }

        logQueue = [];
    };

    return {
        write: write,
        connect: connect
    };
}