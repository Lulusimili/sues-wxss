const app = getApp();
Page({
    data: {
        github: app.globalData.github
    },
    copyNUM() {
        wx.setClipboardData({
            data: '470879821'
        })
    },
    copyURL() {
        wx.setClipboardData({
            data: 'https://github.com/' + app.globalData.github + '/issues'
        })
    }
});