import { useState } from 'react';
import Modal from 'react-modal';

import "./styles.css";

Modal.setAppElement('body');

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

interface MyModalProps {
  title: string
}

export function MyModal({ title }: MyModalProps) {
  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Criar novo</button>
      <Modal
        overlayClassName={"modal-overlay"}
        className={"modal"}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={title}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{title}</h2>
        <button className="x-button" onClick={closeModal}><span>x</span></button>
        <form>
          <div className="modal-first-row">
            <div className="modal-input-container">
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" />
            </div>
            <div className="modal-input-container">
              <label htmlFor="name">Email:</label>
              <input type="text" id="email" />
            </div>
          </div>
          <div className="modal-second-row">
            <div className="modal-input-container">
              <label htmlFor="telefone">Telefone:</label>
              <input type="text" id="telefone" />
            </div>
          </div>
          <div className="buttons-container">
            <button type="submit">Salvar</button>
            <button onClick={closeModal} type="button">Cancelar</button>
          </div>

        </form>
      </Modal>
    </div >
  )

}