import Taro, { Component } from '@tarojs/taro';
import { View, Text, Input, Button } from '@tarojs/components';
import ItemChooseContent from 'pcComponents/itemChoose/itemChoose'
import './index.scss';
import {taobaoItemListGet} from "tradePublic/taobaoItemsOnsaleGet";
import { getItems } from "tradePublic/tradeDataCenter/common/resolveTopResponse";


class ItemChoose extends Component {

    constructor (props) {
        super(props);
        this.state = { data:[]};
    }
    componentDidMount () {

        taobaoItemListGet({
            fields:"sold_quantity,pic_url,num,title,price",
            callback:(res)=>{
                console.log(res)
                this.setState({
                    data :getItems(res)
                });
            },
        })
    }
    onPageChange = (type, v) => {

    };
    getmsg=(e,type)=>{
        switch(type){
            case "status":
                this.setState({
                    status:e.target.value
                })
            case "calss":
                this.setState({
                    calss:e.target.value
                })
            case "keyword":
                this.setState({
                    keyword:e.target.value
                })
            case "input":
                this.setState({
                    input:e.target.value
                })
        }
    }
    search=()=>{
        taobaoItemListGet({
            fields:"sold_quantity,pic_url,num,title,price",
            q:"",
            cid:"",
            page_size:20,
            callback:(res)=>{
                console.log(res)
                this.setState({
                    data :getItems(res)
                });
            },
        })
    }
    onTabChange = (v)=>{

    };
    render () {

        return (
            <View >
                <text className = 'title'>宝贝选择</text>
                <ItemChooseContent  getmsg={this.getmsg} data={this.state.data}/>
            </View>
        );
    }
}

export default ItemChoose;
