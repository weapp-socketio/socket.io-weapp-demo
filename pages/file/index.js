const io = require('../../utils/weapp.socket.io.dev.js');
const base64 = require('./base64');

Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const buf = io('http://localhost:3000/buf', {
      path: '/test',
    });

    // const base64 = 'CxYh';
    const bbb = wx.base64ToArrayBuffer(base64);
    console.log('bbb: ', bbb);

    // socket.on('connection', () => {});
    // const arrayBuffer = wx.base64ToArrayBuffer('CxYh');
    // console.log('buffer: ', arrayBuffer.length);

    buf.emit('upload', new Uint8Array(bbb));
  },

  open: function(e) {},
});
