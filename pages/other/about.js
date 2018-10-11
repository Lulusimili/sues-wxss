const app = getApp();
Page({
    data: {
        github: app.globalData.github,
        LICENSE: ''
    },
    copyURL() {
        wx.setClipboardData({
            data: 'https://github.com/' + app.globalData.github
        })
    },
    onLoad() {
        const LICENSE = wx.getFileSystemManager().readFileSync('/pages/other/LICENSE.txt', 'utf-8');
        this.setData({
            LICENSE: LICENSE
        })
    }
});