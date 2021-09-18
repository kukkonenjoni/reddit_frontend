import './RegisterLoginModal.css';

export const RegisterLoginModal = ({ handlestate, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <button type="button" onClick={handlestate}>
            <span>&#10005;</span>
          </button>
          {children}
        </section>
      </div>
    );
  };