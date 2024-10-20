import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi'; // 引入图标
import { motion } from 'framer-motion';
import Modal from '../../components/Modal';  // 弹窗组件
import routes from '../../routes';

const Writing = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 获取子路由
  const aboutChildrenRoutes = routes.find((route) => route.path === '/writer')?.children || [];

  // 打开模态框并导航到相应的路径
  const openModal = (path: string) => {
    setIsModalOpen(true);
    navigate(path);  // 改变 URL
  };

  // 关闭模态框并返回主路径
  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/writer');  // 返回主路径
  };

  // 存储当前轮播索引
  const [currentIndex, setCurrentIndex] = useState(0);

  // 控制轮播的下一项
  const handleNext = () => {
    if (currentIndex < aboutChildrenRoutes.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // 控制轮播的上一项
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // 实时更新div的宽度
  const divRef = useRef<HTMLDivElement[]>([]); // 用于存储所有子路由div的引 d
  const [divWidth, setDivWidth] = useState<number>(0);
  const parentRef = useRef<HTMLDivElement | null>(null); // 存储父级容器的引用
  const [parentWidth, setParentWidth] = useState<number>(0);

  useEffect(() => {
    if (divRef.current.length > 0) {
      const firstDiv = divRef.current[0];
      if (firstDiv) {
        setDivWidth(firstDiv.offsetWidth);  // 获取第一个子 div 的宽度
      }
    }

    if (parentRef.current) {
      setParentWidth(parentRef.current.offsetWidth);  // 获取父级容器的宽度
    }
  }, [divRef, parentRef]);

  // 监听窗口大小变化，实时更新宽度
  useEffect(() => {
    const handleResize = () => {
      if (divRef.current.length > 0) {
        const firstDiv = divRef.current[0];
        if (firstDiv) {
          setDivWidth(firstDiv.offsetWidth);
        }
        if (parentRef.current) {
          setParentWidth(parentRef.current.offsetWidth);  // 更新父级容器的宽度
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className="carousel-container h-full w-11/12 overflow-hidden relative py-14 my-20 mx-auto " ref={parentRef}>
      <motion.div
        className="carousel flex items-center justify-start"
        style={{
          transform: `translateX(-${currentIndex * 10}%)`, // 轮播移动
          transition: 'transform 0.5s ease-in-out' // 平滑过渡效果
        }}
      >
        {aboutChildrenRoutes.map((route, index) => (
          <motion.div
            key={route.path}
            className="flex items-center justify-center p-4 bg-blue-500 text-white cursor-pointer text-center h-80 m-2"
            onClick={() => openModal(route.path)}
            ref={(el) => (divRef.current[index] = el)} // 绑定ref
          >
            <span style={{
              writingMode: 'vertical-rl',   // 文字竖直排列
              textOrientation: 'upright',   // 字符保持正立
              width: '80px',
              textAlign: 'center',
              display: 'flex',
              flexFlow: 'column',
              justifyContent: 'center',
              padding:' 10px 0 0 '
            }}>
              {route.name}
            </span>
          </motion.div>
        ))}
      </motion.div>


      <div className="absolute inset-y-0 left-0 flex items-center p-4">
        <button
          className={`text-4xl ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'text-gray-500 hover:text-black'}`}
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          <FiArrowLeftCircle />
        </button>
      </div>
      {/* Test: 显示获取到的宽度 */}
      {/* <div className="text-black fixed bottom-4 left-4">
        Current div width: {divWidth}px
      </div> */}
      <div className="absolute inset-y-0 right-0 flex items-center p-4">
        <button
          // className={`text-4xl ${currentIndex === aboutChildrenRoutes.length - 1 ? 'opacity-50 cursor-not-allowed' : 'text-gray-500 hover:text-black'}`}
          className={`text-4xl ${(aboutChildrenRoutes.length - currentIndex + 2) * divWidth < parentWidth ? 'opacity-50 cursor-not-allowed' : 'text-gray-500 hover:text-black'}`}
          onClick={handleNext}
          // disabled={currentIndex === aboutChildrenRoutes.length - 1}
          disabled={(aboutChildrenRoutes.length - currentIndex + 2) * divWidth < parentWidth}
        >
          <FiArrowRightCircle />
        </button>
      </div>
      {/* Test: 显示 */}
      {/* <div className="text-black fixed bottom-4 right-4">
        Current div width: {parentWidth}px,{(aboutChildrenRoutes.length - currentIndex) * divWidth}px
      </div> */}

      {/* 弹窗组件 */}
      {isModalOpen && <Modal onClose={closeModal}><Outlet /></Modal>}
    </div>
  );
};

export default Writing;