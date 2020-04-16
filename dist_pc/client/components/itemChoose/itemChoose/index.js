"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/_tarojs/taro-alipay/index.js");

var _index2 = _interopRequireDefault(_index);

var _taobaoSellercatsListGet = require("../../../public/tradePublic/taobaoSellercatsListGet.js");

var _taobaoSellercatsListGet2 = _interopRequireDefault(_taobaoSellercatsListGet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propsManager = my.propsManager;

var ItemChooseContent = (_temp2 = _class = function (_BaseComponent) {
  _inherits(ItemChooseContent, _BaseComponent);

  function ItemChooseContent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ItemChooseContent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ItemChooseContent.__proto__ || Object.getPrototypeOf(ItemChooseContent)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray83", "anonymousState__temp", "anonymousState__temp2", "status", "type", "value", "classdata", "getmsg", "data"], _this.onPageChange = function (type, v) {}, _this.onTabChange = function (v) {}, _this.search = function () {}, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ItemChooseContent, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ItemChooseContent.prototype.__proto__ || Object.getPrototypeOf(ItemChooseContent.prototype), "_constructor", this).call(this, props);
      this.state = {
        status: "onsale",
        class: "all",
        type: "keyword",
        value: "",
        classdata: []
      };
      this.$$refs = [];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      (0, _taobaoSellercatsListGet2.default)({
        callback: function callback(res) {
          res = res.seller_cats.seller_cat;
          console.log(res);
          _this2.setState({
            classdata: res
          });
        }
      });
    }
  }, {
    key: "changeStatus",
    value: function changeStatus(e, type) {
      this.props.getmsg(e, type);
    }
  }, {
    key: "_createClassListData",
    value: function _createClassListData(_$uid) {
      return function (data, parentid) {
        data = data.filter(function (item) {
          return item.parent_cid == parentid;
        });
        console.log(data);
        return {
          data: data
        };
      };
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var anonymousState__temp = this._createClassListData(__prefix + "fgzzzzzzzz")(this.__state.classdata, 0);

      var anonymousState__temp2 = this._createClassListData(__prefix + "fhzzzzzzzz")(this.__state.classdata, 0);

      this.anonymousFunc0 = function (e) {
        return _this3.changeStatus(e, "status");
      };

      this.anonymousFunc1 = function (e) {
        return _this3.changeStatus(e, "calss");
      };

      this.anonymousFunc2 = function (e) {
        return _this3.changeStatus(e, "keyword");
      };

      this.anonymousFunc3 = function (e) {
        return _this3.changeStatus(e, "input");
      };

      this.anonymousFunc4 = this.search();

      var loopArray83 = this.__props.data.map(function (item, _anonIdx3) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };
        var $loopState__temp4 = item.$original.pic_url + "_60x60.jpg";
        return {
          $loopState__temp4: $loopState__temp4,
          $original: item.$original
        };
      });

      Object.assign(this.__state, {
        loopArray83: loopArray83,
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      ;
    }
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(e) {
      ;
    }
  }]);

  return ItemChooseContent;
}(_index.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4"], _class.$$componentPath = "components/itemChoose/itemChoose/index", _temp2);
exports.default = ItemChooseContent;

Component(require('../../../npm/_tarojs/taro-alipay/index.js').default.createComponent(ItemChooseContent));