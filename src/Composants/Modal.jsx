import '../Assets/Styles/modal.css'

const Modal = ({ handleClose, show, children, modalname }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName} >
            <section className="modal-main" >
                {children}
                <div className='ModalContainerButton'>

                <button type="button" className="ModalButton btn btn-primary" onClick={handleClose}>
                    Fermer
                </button>
                    <button type="button" className="ModalButton btn btn-primary" onClick={handleClose}>
                    {modalname}
                </button>
                </div>
            </section>
        </div>
    );
};

export default Modal;