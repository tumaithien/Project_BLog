import './modal.css'
import ReactDOM from "react-dom";
import cls from 'classnames'
const Modal = ({ show, close, title, children, onLogout, className }) => {

    const classes = cls('modal', className)

    return ReactDOM.createPortal(
        <>
            <div className={`modalContainer ${show ? "show" : ""}`} onClick={() => close()}>
                <div className={classes} onClick={(e) => e.stopPropagation()}>
                    <header className="modal_header">
                        <h2 className="modal_header-title">{title}</h2>
                        <button className="close" onClick={() => close()}>
                            <i className="ion-close"></i>
                        </button>
                    </header>
                    <main className="modal_content">{children}</main>
                    <footer className="modal_footer">
                        <button className="modal-close" onClick={() => close()}>
                            Hủy bỏ
                        </button>
                        <button className="modal-submit" onClick={onLogout}>Đồng ý</button>
                    </footer>
                </div>
            </div>
        </>,
        document.getElementById("modal")
    );
};

export default Modal