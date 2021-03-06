module.exports = {
    ports: ['{{your service port}}'],
    mongo: 'mongodb://localhost/parker',
    secret: '{{cookie secret}}',
    cookie: {
        domain: '{{cookie domain}}',
        path: '/',
        maxAge: 15552000000, // 6 * 30 days
        signed: true
    },
    oauth: {
        weixin: {
            appid: '{{app id}}',
            secret: '{{secret}}',
            baseurl: 'https://api.weixin.qq.com/cgi-bin/',
            apiurl: 'https://api.weixin.qq.com/cgi-bin/',
            authurl: 'authorize',
            tokenurl: 'token',
            callback: 'http://your.callback.url/'
        }
    },
    log: {
        appenders: [ {
            layout: {
                type: "pattern",
                pattern: "%[%d %-5p %-6c(%x{pid})%] - %m",
                tokens: {
                    pid: process.pid
                }
            },
            type: "console"
        }, {
            layout: {
                type: "pattern",
                pattern: "%d %-5p (%x{pid}) - %m",
                tokens: {
                    pid: process.pid
                }
            },
            type: "file",
            filename: "/var/log/parker/debug.log",
            category: "debug"
        }, {
            layout: {
                type: "pattern",
                pattern: "%d %-5p (%x{pid}) - %m",
                tokens: {
                    pid: process.pid
                }
            },
            type: "dateFile",
            filename: "/var/log/parker/access",
            category: "access",
            pattern: "_yyyy-MM-dd.log",
            alwaysIncludePattern: true
        } ]
    }
}
