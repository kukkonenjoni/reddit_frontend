

export default function CreateCommPostModal ({ handlestate, show, children }) {
    const showHideClassName = show ? "modal1" : "modal1 display-none1";
  
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

