export const menus = [
   
    {
        key: '/app/layout', title: '布局组件', icon: 'layout',
        sub: [
            { key: '/app/layout/layout', title: '布局', icon: '', breadcrumb: ['布局组件', '布局'] },
            { key: '/app/layout/grid', title: '栅格', icon: '', breadcrumb: ['布局组件', '栅格'] },
           
        ],
    },
    {
        key: '/app/ui', title: '常用组件', icon: 'appstore-o',
        sub: [
            { key: '/app/ui/buttons', title: '按钮', icon: '', breadcrumb: ['常用组件', '按钮'] },
            { key: '/app/ui/icons', title: '图标', icon: '', breadcrumb: ['常用组件', '图标'] },
          
            { key: '/app/ui/message', title: '消息提示框', icon: '', breadcrumb: ['常用组件', '消息提示框'] },
            { key: '/app/ui/notifications', title: '通知弹框', icon: '', breadcrumb: ['常用组件', '通知弹框'] },
            { key: '/app/ui/Dialog', title: '对话框', icon: '', breadcrumb: ['常用组件', '对话框'] },
            { key: '/app/ui/Tooltip', title: '提示框', icon: '', breadcrumb: ['常用组件', '提示框'] },
            //新增二级菜单Card、Collapse、Carousel组件
            { key: '/app/ui/Card', title: '卡片', icon: '', breadcrumb:['常用组件','卡片'] },
            { key: '/app/data/pagination', title: '分页', icon: '', breadcrumb: ['常用组件', '分页'] }
                      	
           
        ],
    },
    {
        key: '/app/nav', title: '导航', icon: 'scan',
        sub: [
            { key: '/app/nav/tabs', title: '标签页', icon: '', breadcrumb: ['导航', '标签页'] },
            
            { key: '/app/nav/step', title: '步骤', icon: '', breadcrumb: ['导航', '步骤'] },
        ],
    }, 
   
    // {
    //     key: '/app/animation', title: '动画', icon: 'rocket',
    //     sub: [
    //         { key: '/app/ui/testsize', title: '基础动画', icon: '', },
    //         { key: '/app/animation/exampleAnimations', title: '动画案例', icon: '', },
    //     ],
    // },
   
    {
        key: '/app/form', title: '表单', icon: 'form',
        sub: [
            { key: '/app/form/formElements', title: '表单元素', icon: '', breadcrumb: ['表单', '表单元素'] }
            //{ key: '/app/form/basicForm', title: '基础表单', icon: '', },
        
          
        ],
    },
    {
        key: '/app/chart', title: '图表', icon: 'area-chart',
        sub: [
            { key: '/app/chart/barchart', title: '柱状图', icon: '', breadcrumb: ['图表', '柱状图'] },
            { key: '/app/chart/piechart', title: '饼图', icon: '', breadcrumb: ['图表', '饼图'] },
            { key: '/app/chart/linechart', title: '折线图', icon: '', breadcrumb: ['图表', '折线图'] }
            //{ key: '/app/chart/recharts', title: 'recharts', icon: '', },
        ],
    }
    
    
];
