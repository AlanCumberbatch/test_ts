import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Modal from '../../components/Modal';  // 弹窗组件
import routes from '../../routes';

const Writing = () => {

  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (path: string) => {
    setIsModalOpen(true);
    navigate(path);  // 改变 URL
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/writer');  // 返回主路径
  };

  const aboutChildrenRoutes = routes.find((route) => route.path === '/writer')?.children || [];

  // 轮播按钮
  // const handleNext = () => {
  //   if (currentIndex < aboutChildrenRoutes.length - 1) {
  //     setCurrentIndex((prevIndex) => prevIndex + 1);
  //   }
  // };

  // const handlePrevious = () => {
  //   if (currentIndex > 0) {
  //     setCurrentIndex((prevIndex) => prevIndex - 1);
  //   }
  // };

   // 控制轮播的下一项
   const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutChildrenRoutes.length);
  };

  // 控制轮播的上一项
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + aboutChildrenRoutes.length) % aboutChildrenRoutes.length);
  };


  return (
    // <div className="p-4">
    <div className="carousel-container h-screen w-screen overflow-hidden relative bg-black">

      {/* <h1 className="text-2xl font-bold">Welcome to the Writing Page</h1> */}
      {/* <Outlet /> 用于渲染子路由内容
      <button onClick={() => navigate('team')}>Go to Our Team</button> */}

      <motion.div
        className="carousel flex items-center"
        // animate={{ x: [0, -200, 0] }}  // 实现上下滚动效果
        // transition={{
        //   duration: 6,
        //   repeat: Infinity,
        //   ease: 'easeInOut'
        // }}
        key={currentIndex} // 更改当前索引时强制重渲染
        transition={{ duration: 0.5 }} // 设置过渡动画的持续时间
      >
        {aboutChildrenRoutes.map((route) => (
          // <button key={route.path} onClick={() => openModal(route.path)}>
          //   {route.name}  - - -
          // </button>
          <motion.div
            key={route.name}
            className="flex items-center justify-center p-4 bg-blue-500 text-white cursor-pointer text-center h-60 w-20 m-10"
            onClick={() => openModal(route.path)}
          >
            {/* 文字旋转 90 度 */}
            {/* <span className="rotate-90">{route.name}</span> */}
            {/* <span className="writing-mode-vertical">{route.name}</span> */}
            <span style={{
                writingMode: 'vertical-rl',   // 文字竖直排列
                textOrientation: 'upright',   // 字符保持正立
            }}>{route.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* 控制按钮 */}
      <div className="flex justify-between w-full px-4 mt-4">
        <button
          className={`bg-gray-500 text-white p-2 rounded ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <button
          className={`bg-gray-500 text-white p-2 rounded ${currentIndex === aboutChildrenRoutes.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleNext}
          disabled={currentIndex === aboutChildrenRoutes.length - 1}
        >
          Next
        </button>
      </div>

      {/* 弹窗组件 */}
      {isModalOpen && <Modal onClose={closeModal}><Outlet /></Modal>}
    </div>
  );
};

export default Writing;