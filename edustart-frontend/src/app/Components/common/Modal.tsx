import { useTransition, animated, useSpring } from "@react-spring/web";
import { useEffect, useMemo, useState } from "react";

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-500 hover:text-gray-700 cursor-pointer"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M14.293 5.293a1 1 0 0 0-1.414 1.414L10 10.414l-2.879-2.88a1 1 0 0 0-1.414 1.414L8.586 12l-2.88 2.879a1 1 0 1 0 1.414 1.414L10 13.414l2.879 2.88a1 1 0 0 0 1.414-1.414L11.414 12l2.88-2.879a1 1 0 0 0 0-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  containerClassName?: string;
}

const Modal: React.FC<IModalProps> = ({
  isOpen,
  onClose,
  children,
  containerClassName = "",
}) => {
  const [modalScale, setModalScale] = useState("scale-80");

  useEffect(() => {
    if (isOpen) {
      setModalScale("scale-110");
    } else {
      setModalScale("scale-80");
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50`}>
      <div
        className="fixed inset-0 bg-black opacity-30"
        onClick={onClose}
      ></div>

      <div
        style={{ maxWidth: "90%" }}
        className={`transition-all relative duration-300 ease-in scale-40 ${modalScale} 
        fixed items-center justify-center z-10 bg-white p-6 rounded-md shadow-md ${containerClassName}`}
      >
        <div className="sticky flex justify-end absolute top-2 right-2">
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
