const app = getApp();
Page({
    data: {
        updateTime: ''
        , version: ''
    }

    , onLoad: function () {
        this.setData({
            version: app.globalData.version
        })
    }
    , onShow: function () {
        const that = this;
        const u = wx.getStorageSync('username');
        const updateTime = new Date(wx.getStorageSync('updateTime'));
        if (u) {
            this.setData({
                updateTime: updateTime.getFullYear() + '年' + updateTime.getMonth() + '月' + updateTime.getDate() + '日'
            });
        }
    }

    , setBG() {
        const that = this;
        wx.showActionSheet({
            itemList: ['不使用', '使用系统自带', '从相册中选择']
            , success: (e) => {
                switch (e.tapIndex) {
                    case 0:
                        wx.setStorageSync('bg', '');
                        wx.showToast({
                            title: '设置成功！'
                        });
                        break;
                    case 1:
                        wx.setStorageSync('bg', app.globalData.bg);
                        wx.showToast({
                            title: '设置成功！'
                        });
                        break;
                    case 2:
                        wx.chooseImage({
                            count: 1,
                            sizeType: ['compressed'],
                            sourceType: ['album', 'camera'],
                            success(res) {
                                wx.showLoading({
                                    title: '处理中',
                                    mask: true
                                });
                                const tempFilePaths = res.tempFilePaths;
                                let imgPath = tempFilePaths[0];
                                let imgHZ = imgPath.split('.');
                                imgHZ = imgHZ[imgHZ.length - 1];
                                const base64 = wx.getFileSystemManager().readFileSync(imgPath, 'base64');
                                const img_base64 = 'data:image/' + imgHZ + ';base64,' + base64;
                                wx.setStorageSync('bg', img_base64);
                                wx.hideLoading();
                                wx.showToast({
                                    title: '设置成功！'
                                });
                            }
                        });
                        break;
                }
            }
        });
    }
});