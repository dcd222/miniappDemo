if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../client/app');
require('../../client/public/mapp_common/marketing/modalAD/ModalADpc?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/public/mapp_common/marketing/modalAD/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/public/mapp_common/marketing/bannerAD/bannerADpc?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/public/mapp_common/marketing/bannerAD/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/public/mapp_common/marketing/afterActionAD/afterActionPC?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/public/mapp_common/marketing/afterActionAD/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/public/mapp_common/marketing/renewBox/renewBoxPC?hash=741099c67ffc48c87975c63aaac2d777f1c3cd36');
require('../../client/public/mapp_common/marketing/renewBox/index?hash=741099c67ffc48c87975c63aaac2d777f1c3cd36');
require('../../client/public/mapp_common/marketing/midCoupon/midCouponPC?hash=741099c67ffc48c87975c63aaac2d777f1c3cd36');
require('../../client/public/mapp_common/marketing/midCoupon/index?hash=741099c67ffc48c87975c63aaac2d777f1c3cd36');
require('../../client/public/mapp_common/marketing/notice/noticePC?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/public/mapp_common/marketing/notice/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/public/mapp_common/marketing/modalVIP/ModalVIPpc?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/public/mapp_common/marketing/modalVIP/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/public/mapp_common/marketing/midCard/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/npm/taro-ui/dist/weapp/components/modal/header/index?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../client/npm/taro-ui/dist/weapp/components/modal/content/index?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../client/npm/taro-ui/dist/weapp/components/modal/action/index?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../client/npm/taro-ui/dist/weapp/components/modal/index?hash=c386a5f0f6c503592f4411f09072ccbd92d45fd4');
require('../../client/public/mapp_common/marketing/payResult/payResultPC?hash=5e7f8f4b2ec58f467543f991a56ae695799c9e67');
require('../../client/public/mapp_common/marketing/payResult/index?hash=5e7f8f4b2ec58f467543f991a56ae695799c9e67');
require('../../client/public/mapp_common/marketing/index?hash=4001dd8bc322ab0d74e00e4291a3c747112587ca');
require('../../client/public/mapp_common/marketing/notice/pcNoticeBallon?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/public/mapp_common/components/myTab/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/components/emptyPage/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/components/refundManagement/orderCard/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/components/refundManagement/refundCard/index?hash=3fa1172147070a407af8e26f677a8eee1cd8e764');
require('../../client/components/refundManagement/refundList/index?hash=3d3c07e6370a0ac6e0a30be6ad26c12c31bcc5ac');
require('../../client/components/myPagination/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/pages/refundManagement/index?hash=21a15d8a6cfbcd58f16c8fc4fd5c8e6d38df4254');
require('../../client/pages/test/index?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../client/components/testDialog/index?hash=5e7f8f4b2ec58f467543f991a56ae695799c9e67');
require('../../client/components/myDialog/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/components/myDialog/confirmDialog?hash=395a7bf4d772b4a41d34f914f75cf6f53d0c325a');
require('../../client/components/myDialog/InputDialog?hash=395a7bf4d772b4a41d34f914f75cf6f53d0c325a');
require('../../client/components/dialogManager/index?hash=5d42a8715427921ffee642338deb4f4bdb551e34');
require('../../client/components/miniapp-router/router-view/router-view?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/pages/index/index?hash=f943834dc691b91229ec7196b2e3246bd97225bc');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}