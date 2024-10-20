// Modal.tsx
import React from 'react';
import { FiX } from 'react-icons/fi';  // 引入 X 图标

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      {/* <div className="bg-white p-5 rounded-lg shadow-lg">
        <button className="text-red-500" onClick={onClose}>Close</button>
        <div>{children}</div>
      </div> */}
      <div className="relative bg-white p-5 rounded-lg shadow-lg w-full max-w-lg max-h-96 overflow-y-auto">
        {/* Close button as an X icon */}
        <button
          className="absolute top-1 right-1 text-blue-500 hover:text-red-700 focus:outline-none"
          onClick={onClose}
        >
          <FiX className="w-6 h-6" />  {/* "X" icon */}
        </button>

        {/* Modal content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;