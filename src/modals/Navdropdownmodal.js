import './Navdropdownmodal.css';

export default function Navdropdownmodal ({ handlestate, show, children }) {
    const showHideClassName = show ? "modal1" : "modal1 display-none1";
  
    return (
      <div className={showHideClassName} onClick={handlestate}>
        <section className="modal-main1">
          {children}
        </section>
      </div>
    );
  };

