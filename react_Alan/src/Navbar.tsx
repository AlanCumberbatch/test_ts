import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // 如果你使用了 react-router
import logo from '@/assets/logos/1.png';  // 根据文件路径引入 logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Framer Motion 动画配置
  const navVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <nav className="bg-blue-600 px-4 py-2 fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
            {/* Tailwind 样式可选 */}
          <Link to="/"> <img src={logo} alt="Website Logo" className="w-16 h-16 rounded-full" /></Link>
          {/* <Link to="/">My Website</Link> */}
        </div>

        {/* 菜单按钮（仅在手机端显示） */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* 汉堡菜单动画 */}
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              className="w-6 h-0.5 bg-white mb-1"
            />
            <motion.div
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-white mb-1"
            />
            <motion.div
              animate={{ rotate: isOpen ? -45 : 0 }}
              className="w-6 h-0.5 bg-white"
            />
          </button>
        </div>

        {/* 链接列表（在大屏设备上显示） */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/writer">Writing</Link></li>
          {/* <li><Link to="/writer/team">Chapter</Link></li> */}
          <li><Link to="/shadering">Shadering</Link></li>
          <li><Link to="/reading">Reading</Link></li>
        </ul>
      </div>

      {/* 响应式菜单（Framer Motion 动画，适用于移动端） */}
      <motion.div
        className={`md:hidden overflow-hidden ${isOpen ? "block" : "hidden"}`}
        animate={isOpen ? "open" : "closed"}
        variants={navVariants}
        initial="closed"
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col space-y-4 text-white p-4 bg-blue-600">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/writer" onClick={() => setIsOpen(false)}>Writing</Link></li>
          {/* <li><Link to="/writer/team" onClick={() => setIsOpen(false)}>Chapter</Link></li> */}
          <li><Link to="/shadering" onClick={() => setIsOpen(false)}>Shadering</Link></li>
          <li><Link to="/reading" onClick={() => setIsOpen(false)}>Reading</Link></li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;