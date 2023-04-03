/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';
import './LoginModal.scss';

type LoginModalProps = {
  onClose: () => void;
  visible: boolean;
  children: React.ReactNode;
};

const LoginModal: React.FC<LoginModalProps> = ({ onClose, visible, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  if (!visible) return null;

  return (
    <div className="LoginModal">
      <div className="modal-back" ref={modalRef}>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default LoginModal;
