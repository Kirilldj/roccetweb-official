import { memo } from 'react';

function CaseDialog() {
  return (
    <>
      <dialog id="dlg"><div className="art" id="dart" style={{borderRadius:'16px',marginBottom:'16px'}}></div><span className="note" data-i18n="demo"></span><h3 id="dt"></h3><p id="dd" style={{color:'var(--m)'}}></p><p id="ds" style={{fontSize:'14px'}}></p><br /><div className="row"><button className="btn" id="dp" aria-label="Previous">←</button><button className="btn" id="dn" aria-label="Next">→</button><button className="btn" id="dc" data-i18n="close"></button><button className="btn p" id="dcase" data-i18n="ocase"></button></div></dialog>
    </>
  );
}

export default memo(CaseDialog);
