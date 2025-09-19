module.exports = {
    bot: {
        tokens: [
          "MTQxODY2NTE1MDkzMTUzMzk2Ng.GHWB-I.i_YGVgZ_A43I_t6djg3mN0E4h5I4NJ3j3-mchw",              // Main bot token - Replace with your actual token
        //  "YOUR_SECOND_BOT_TOKEN_HERE",      // 2 bot token - Uncomment and replace to use
        //  "YOUR_THIRD_BOT_TOKEN_HERE",       // 3 bot token - Uncomment and replace to use
        //  "YOUR_FOURTH_BOT_TOKEN_HERE",      // 4 bot token - Uncomment and replace to use
        //  "YOUR_FIFTH_BOT_TOKEN_HERE",       // 5 bot token - Uncomment and replace to use
        ].filter(Boolean),

        defaultLanguage: 'ar', // ar | en لغة البوت
        
        activity: {
            name: 'Wick Studio', // رسالة حالة البوت
            type: 'WATCHING', // PLAYING, STREAMING, LISTENING, WATCHING, COMPETING
            status: 'dnd' // online, idle, dnd, invisible
        }
    },
    server: {
        guildId: '1412014160644145154',         // ايدي السيرفر
        broadcastRoleId: '1412014429100576839', // ايدي الرول اللي يستخدم عليها البوت
        reportChannelId: '1412015744430112840' // ايدي الروم اللي يرسل فيه البوت التقارير
    },
    broadcast: {
        cooldownTime: 1000, // لا تلعب فيها
        memberCooldown: 100, // لا تلعب فيها
        requestsPerSecond: 1 // لا تلعب فيها
    },

    colors: {
        primary: '#5865F2',    // Discord Blue (used for standard messages)
        success: '#57F287',    // Green (used for successful operations)
        warning: '#FEE75C',    // Yellow (used for warnings)
        error: '#ED4245',      // Red (used for errors)
        neutral: '#5D5D5D'     // Gray (used for neutral messages)
    }

};
