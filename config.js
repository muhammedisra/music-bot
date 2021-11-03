module.exports = {
    app: {
        px: '--',
        token: "ODQ2MjU5NDg5ODYxNjY0Nzk4.YKs6kQ.473sOGvBwt85xie2F2qbm8G8eOY",
        playing: 'Made by isra7766'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
