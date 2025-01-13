import React, { useRef, useEffect } from 'react';
import './Button.css';

const CartModal = ({ onClose, children, onCheckout }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog.showModal(); // Avame dialoogi

    return () => {
      dialog.close(); // Sulgeme dialoogi
    };
  }, []);

  // Eemaldame taustale klikkimise sulgemise loogika
  const handleClose = (e) => {
    // Ei tee midagi, kui vajutati taustale
  };

  return (
    <dialog ref={dialogRef} className="modal" onClose={handleClose}>
      {children}
      <button className="button" onClick={onCheckout}>
        Checkout
      </button>
      <button className="text-button" onClick={onClose}>
        Close
      </button>
    </dialog>
  );
};

export default CartModal;