"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/_tarojs/taro-alipay/index.js");

var _index2 = _interopRequireDefault(_index);

var _taobaoItemsOnsaleGet = require("../../public/tradePublic/taobaoItemsOnsaleGet.js");

var _resolveTopResponse = require("../../public/tradePublic/tradeDataCenter/common/resolveTopResponse.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propsManager = my.propsManager;
var ItemChoose = (_temp2 = _class = function (_BaseComponent) {
  _inherits(ItemChoose, _BaseComponent);

  function ItemChoose() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ItemChoose);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ItemChoose.__proto__ || Object.getPrototypeOf(ItemChoose)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__23", "data"], _this.onPageChange = function (type, v) {}, _this.getmsg = function (e, type) {
      switch (type) {
        case "status":
          _this.setState({
            status: e.target.value
          });
        case "calss":
          _this.setState({
            calss: e.target.value
          });
        case "keyword":
          _this.setState({
            keyword: e.target.value
          });
        case "input":
          _this.setState({
            input: e.target.value
          });
      }
    }, _this.search = function () {
      (0, _taobaoItemsOnsaleGet.taobaoItemListGet)({
        fields: "sold_quantity,pic_url,num,title,price",
        q: "",
        cid: "",
        page_size: 20,
        callback: function callback(res) {
          console.log(res);
          _this.setState({
            data: (0, _resolveTopResponse.getItems)(res)
          });
        }
      });
    }, _this.onTabChange = function (v) {}, _this.customComponents = ["ItemChooseContent"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ItemChoose, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ItemChoose.prototype.__proto__ || Object.getPrototypeOf(ItemChoose.prototype), "_constructor", this).call(this, props);
      this.state = { data: [] };
      this.$$refs = [];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      (0, _taobaoItemsOnsaleGet.taobaoItemListGet)({
        fields: "sold_quantity,pic_url,num,title,price",
        callback: function callback(res) {
          console.log(res);
          _this2.setState({
            data: (0, _resolveTopResponse.getItems)(res)
          });
        }
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__23"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__23 = _genCompid2[0],
          $compid__23 = _genCompid2[1];

      propsManager.set({
        "getmsg": this.getmsg,
        "data": this.__state.data
      }, $compid__23, $prevCompid__23);
      Object.assign(this.__state, {
        $compid__23: $compid__23
      });
      return this.__state;
    }
  }]);

  return ItemChoose;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/itemChoose/index", _temp2);
exports.default = ItemChoose;

Component(require('../../npm/_tarojs/taro-alipay/index.js').default.createComponent(ItemChoose));