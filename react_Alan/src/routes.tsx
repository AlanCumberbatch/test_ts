// import React from 'react';
import Home from './pages/Home';// 首页组件
import Reading from './pages/Reading'; // 阅读
import Shadering from './pages/Shadering'; // 着色器相关
import Writing from './pages/Writing'; // 关于页组件
import Chapter from './pages/Writing/Essay/Chapter';
import Chapter2 from './pages/Writing/Essay/Chapter2';
import Chapter3 from './pages/Writing/Essay/Chapter3';
import Chapter4 from './pages/Writing/Essay/Chapter4';
import Chapter5 from './pages/Writing/Essay/Chapter5';
import Chapter6 from './pages/Writing/Essay/Chapter6';
import Chapter7 from './pages/Writing/Essay/Chapter7';
import Chapter8 from './pages/Writing/Essay/Chapter8';
import Chapter9 from './pages/Writing/Essay/Chapter9';
import Chapter10 from './pages/Writing/Essay/Chapter10';
import Chapter11 from './pages/Writing/Essay/Chapter11';
import Chapter12 from './pages/Writing/Essay/Chapter12';
import Chapter13 from './pages/Writing/Essay/Chapter13';
// addRoute


// 定义动态子路由数组 - - - 未来的每一篇文章
const writingChildRoute = [

  {
    path: 'chapter',
    element: <Chapter />,
    name: '"元神归位？"',
  },
  {
    path: 'chapter2',
    element: <Chapter2 />,
    name: '庆幸自己不只买了馒头',
  },
  {
    path: 'chapter3',
    element: <Chapter3 />,
    name: '是否上车？',
  },
  {
    path: 'chapter4',
    element: <Chapter4 />,
    name: '关于让座',
  },
  {
    path: 'chapter5',
    element: <Chapter5 />,
    name: '地铁观察|1',
  },
  {
    path: 'chapter6',
    element: <Chapter6 />,
    name: '关于动手打了猫咪',
  },
  {
    path: 'chapter7',
    element: <Chapter7 />,
    name: '中寰吃饭',
  },
  {
    path: 'chapter8',
    element: <Chapter8 />,
    name: '节后第一天上班',
  },
  {
    path: 'chapter9',
    element: <Chapter9 />,
    name: '穿裤子的困扰',
  },
  {
    path: 'chapter10',
    element: <Chapter10 />,
    name: '关于是否创建一个书评的网站',
  },
  {
    path: 'chapter11',
    element: <Chapter11 />,
    name: '上班路上遇见合作过的同事没理我',
  },
  {
    path: 'chapter12',
    element: <Chapter12 />,
    name: '地铁上一个中年男人突然站到我面前',
  },
  {
    path: 'chapter13',
    element: <Chapter13 />,
    name: '今天迟到了',
  },
  // 你可以继续动态添加其他路由
];


// 定义一个路由配置对象数组
const routes = [
  {
    path: '/',        // 路由路径
    element: <Home />, // 对应的页面组件
    name: 'Home',
  },
  {
    path: '/writer',
    element: <Writing />,
    name: 'writer',
    children: writingChildRoute,
    // children: [],
    // children: [
    //   {
    //     path: 'team', // 子路由的路径
    //     element: <Chapter />, // 对应的组件
    //     name: 'Our Team',
    //   },
    // ],
  },
  {
    path: '/shadering',
    element: <Shadering />,
    name: 'Shadering',
  },
  {
    path: '/reading',
    element: <Reading />,
    name: 'Reading',
  },
];

export default routes;