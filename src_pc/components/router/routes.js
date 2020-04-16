export const routes = [
    {
        name: '订单管理',
        path: '/tradeManagement',
        abstract: true,
        children: [
            {
                name: '退款管理',
                default: true,
                component: 'refundManagement',
                path: '/refundManagement',
                icon: 'iconfont-tuikuanguanli',

            },
            {
                name: '宝贝选择',
                default: false,
                component: 'itemChoose',
                path: '/itemChoose',
                icon: 'iconfont-tuikuanguanli',

            }
        ],
    }
    
];
export const defaultPath = '/tradeManagement/refundManagement';
