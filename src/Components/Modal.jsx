import React from 'react';
import './Modal.scss';
import { useState } from 'react';

const Modal = ({ isOpen, closeModal, ApplyModal }) => {
   

    const [inputValue, setInputValue] = useState('');
    

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleApply = () => {
        ApplyModal(inputValue);
        closeModal();
        setInputValue('')
    }
    if (!isOpen) return null;
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="head_modal">
                    <h2>New Note</h2>
                    <input type="text"
                        className='new_task'
                        placeholder='Input your note..'
                        value={inputValue}
                        onChange={handleChange}
                    />
                </div>

                <div className="btn_group">
                    <button className='close_btn' onClick={closeModal}>Close</button>
                    <button className='apply_btn' onClick={handleApply}>Apply</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
