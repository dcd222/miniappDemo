"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _qnRouter = require("./qnRouter.js");

var _qnRouter2 = _interopRequireDefault(_qnRouter);

var _index = require("../tradePolyfills/index.js");

var _resolveTopResponse = require("./tradeDataCenter/common/resolveTopResponse.js");

var _utils = require("./utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 获取商品类目
 * @param query
 * @param callback
 * @param errCallback
 */
function taobaoSellercatsListGet(_ref) {
  var _ref$query = _ref.query,
      query = _ref$query === undefined ? {} : _ref$query,
      _ref$callback = _ref.callback,
      _callback = _ref$callback === undefined ? _index.NOOP : _ref$callback,
      _ref$errCallback = _ref.errCallback,
      _errCallback = _ref$errCallback === undefined ? undefined : _ref$errCallback;

  (0, _qnRouter2.default)({
    api: 'taobao.sellercats.list.get',
    params: query,
    callback: function callback(rsp) {
      _callback((0, _resolveTopResponse.resolveTopResponse)(rsp));
    },
    errCallback: function errCallback(error) {
      if (_errCallback) {
        _errCallback(error);
      } else {
        (0, _utils.showErrorDialog)('温馨提示', '获取商品类名，请稍候再试！', JSON.stringify(error));
      }
    }
  });
}

exports.default = taobaoSellercatsListGet;