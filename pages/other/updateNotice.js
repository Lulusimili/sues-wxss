const app = getApp();
Page({
    data: {
        version: ''
        , updateTime: ''
        , updateText: []
    },
    onLoad: function (options) {
        const globalData = app.globalData;
        this.setData({
            version: globalData.version
            , updateTime: globalData.update.time
            , updateText: globalData.update.text
        })
    },
    okBtnTap: function (e) {
        wx.setStorageSync('updateNoticeLook-' + app.globalData.version, true);
        wx.switchTab({
            url: '/pages/index/index'
        })
    }
});