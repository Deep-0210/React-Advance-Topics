import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='w-max mx-auto mt-20'>
      <button className='border-2 p-2 border-green-700 rounded-md' onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </div>
  );
}
