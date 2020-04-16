import Taro, { Component } from '@tarojs/taro';
import { View, Text, Input, Button ,Icon} from '@tarojs/components';
import { qnRouter } from "tradePublic/qnRouter";
import taobaoSellercatsListGet from "tradePublic/taobaoSellercatsListGet"

import './index.scss';

class ItemChooseContent extends Component {

    constructor (props) {
        super(props);
        this.state={
            status:"onsale",
            class:"all",
            type:"keyword",
            value:"",
            classdata:[]
        }
    }
    componentDidMount () {
        taobaoSellercatsListGet({
            callback:(res)=>{
                res = res.seller_cats.seller_cat;
                console.log(res)
                this.setState({
                    classdata:res
                })
            }
        })
    }
    onPageChange = (type, v) => {

    };

    onTabChange = (v)=>{

    };
    search=()=>{

    }
    changeStatus(e,type){
        this.props.getmsg(e,type)
    }
    classList(data,parentid){
        data = data.filter(item=>{
            return item.parent_cid == parentid
        })
        console.log(data)
        return (
                data.map(item=>{
                    return (
                        <option >{item.name}</option>
                    )
                })
        )
    }
    render () {
        
        return (
            <view className="itemChoose">
                <view className="search">
                    <select className="select" onChange={(e)=>this.changeStatus(e,"status")} onBlur="onBlur"  defaultValue="出售中" >
                        <option value="onsale">出售中</option>
                        <option value="wherehouse">仓库中</option>
                        <option value="sellOut">已售完</option>
                    </select>
                    <select className="select" onChange={(e)=>this.changeStatus(e,"calss")} onBlur="onBlur"  defaultValue="全部分类" >
                        <option value="all">全部分类</option>
                        {
                            this.classList(this.state.classdata,0)
                        }
                    </select>
                    {
                            this.classList(this.state.classdata,0)
                        }
                    <select className="keyword" onChange={(e)=>this.changeStatus(e,"keyword")} onBlur="onBlur"  defaultValue="宝贝关键字" >
                        <option value="keyword">宝贝关键字</option>
                        <option value="itemId">商品编号</option>
                    </select>
                    <view className="input">
                        <Input className="inputContent" type='text' onChange={(e)=>this.changeStatus(e,"input")} placeholder='请输入搜索内容'/>
                        <Icon className="icon"  type='search'/>
                    </view>
                    
                    <button className="button" onClick={this.search()}>搜索</button>
                </view>
                <view className="list">
                    <view className="head">
                        <view className="check"><checkbox class="all">全选</checkbox></view>
                        <view className="name">宝贝信息</view>
                        <view className="price">价格</view>
                        <view className="num">库存</view>
                        <view className="sell">销量</view>
                    </view>
                    <view className="body">
                        {
                            this.props.data.map(item=>{
                                return (
                                    <view className="column">
                                        <view className="check"><checkbox class="listCheck"></checkbox></view>
                                        <view className="name">
                                            <image className="img" src={item.pic_url+"_60x60.jpg"}  lazy-load={true}/>
                                            <view className="text">{item.title}</view>
                                        </view>
                                        <view className="price">{item.price}</view>
                                        <view className="num">{item.num}</view>
                                        <view className="sell">{item.sold_quantity}</view>
                                    </view>
                                )
                            })
                        }
                        
                    </view>
                </view>

            </view>
        );
    }
}

export default ItemChooseContent;
