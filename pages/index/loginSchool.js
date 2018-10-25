const app = getApp();
Page({
    data: {
        showTopTips: false
        , btnLoading: false
        , tipes: '错误提示'
        , img: ''
    }
    , onLoad() {
        const u = wx.getStorageSync('username');
        const p = wx.getStorageSync('password');
        this.setData({
            username: u
            , password: p
            , u: u
            , p: p
        })
    }
    , usernameInput: function (e) {
        this.setData({
            u: e.detail.value
        })
    }
    , passwordInput: function (e) {
        this.setData({
            p: e.detail.value
        })
    }
    , onImport(e) {
        const that = this;
        that.setData({
            btnLoading: true
            , showTopTips: false
        });
        const username = this.data.u;
        const password = this.data.p;
        const url = app.globalData.apiServer + 'sues/courses';
        let data = {
            username: username
            , password: password
        };
        wx.request({
            url: url
            , data: data
            , method: 'GET'
            , success: res => {
                wx.setStorageSync('username', username);
                wx.setStorageSync('password', password);
                if (res.statusCode === 200) {
                    const resData = res.data;
                    that.setData({
                        btnLoading: false
                    });
                    if (resData.hasOwnProperty('detail')) {
                        that.setData({
                            showTopTips: true
                            , tipes: resData.detail + '，请重试'
                        });
                    } else if (resData.hasOwnProperty('errMsg')) {
                        that.setData({
                            showTopTips: true
                            , tipes: resData.errMsg + '，请重试'
                        });
                    } else {
                        that.setData({
                            showTopTips: false
                        });
                        wx.setStorageSync('updateTime', (new Date()).getTime());
                        wx.showToast({
                            title: '导入成功'
                            , complete: () => {
                                setTimeout(() => {
                                    app.globalData.course = res.data;
                                    wx.setStorageSync('course', res.data);
                                    wx.navigateBack();
                                }, 1500);
                            }
                        })
                    }
                } else {
                    that.setData({
                        showTopTips: true
                        , btnLoading: false
                        , tipes: '服务器维护中，请稍后再试'
                    });
                }
            }
        })
    }
});