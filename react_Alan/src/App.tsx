
import React from 'react';
// import DemoPage from "./DemoPage"
import { Routes, Route,Link } from 'react-router-dom';
import Navbar from './Navbar'; // 导航栏
// import Home from './pages/Home'; // 首页组件
// // import About from './pages/About'; // 关于页组件
// // import Services from './pages/Services'; // 服务页组件
// // import Contact from './pages/Contact'; // 联系页组件
import routes from './routes'; // 导入集中配置的路由
function App() {
  return (
    <div className="App">
      {/* <div className='text-3xl font-bold underline'>React+Vite+TS+Tailwind+FramerMotion+</div> */}
      {/* <DemoPage /> */}
      <Navbar />
      {/* 其他路由或页面内容 */}
      <div className="pt-16"> {/* 确保内容不被固定导航栏遮挡 */}
        <Routes>
          {/* 使用 map 函数遍历 routes 数组并动态生成路由 */}
          {/* {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))} */}
          {routes.map((route) => (
            // <React.Fragment key={route.path}>
            //   <Link to={route.path} className="text-white basis-1/2">{route.name}</Link>
            //   {/* 如果有子路由，则生成子路由链接 */}
            //   {route.children && route.children.map((childRoute) => (
            //     <Link key={childRoute.path} to={`${route.path}/${childRoute.path}`} className="text-white basis-1/2">
            //       {childRoute.name}
            //     </Link>
            //   ))}
            // </React.Fragment>
            <Route key={route.path} path={route.path} element={route.element}>
              {/* 如果有子路由，则嵌套 Routes */}
              {route.children && route.children.map((childRoute) => (
                <Route key={childRoute.path} path={childRoute.path} element={childRoute.element} />
              ))}
            </Route>
          ))}
        </Routes>
      </div>
    </div>
  )
}

export default App
