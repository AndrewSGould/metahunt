// Modal.tsx
import React, { useRef, useEffect } from 'react';

const Modal: React.FC<ModalProps> = ({
  id,
  title,
  children,
  isOpen,
  onClose,
}) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const showModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      showModal();
    } else {
      closeModal();
    }
  }, [isOpen]);

  return (
    <dialog id={id} className='modal' ref={modalRef}>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>{title}</h3>
        <div className='py-4'>{children}</div>
      </div>
      <form method='dialog' className='modal-backdrop' onClick={closeModal}>
        <button type='button'>close</button>
      </form>
    </dialog>
  );
};

interface ModalProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default Modal;
