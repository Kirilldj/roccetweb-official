import { memo } from 'react';

function Contact() {
  return (
    <>
      <section id="contact"><h2 data-i18n="ct"></h2><p className="lead" data-i18n="ctl"></p><div className="cgrid"><div className="card"><h3 data-i18n="es"></h3><p data-i18n="esp"></p><br /><label><span data-i18n="et"></span><select id="et"><option value="4" data-i18n="et1"></option><option value="8" data-i18n="et2"></option><option value="6" data-i18n="et3"></option></select></label><label><span><span data-i18n="ep"></span>: <b id="pv">5</b></span><input type="range" id="ep" min="1" max="15" defaultValue="5" /></label><label className="chk"><input type="checkbox" defaultValue="2" data-n="x1" /><span data-i18n="x1"></span></label><label className="chk"><input type="checkbox" defaultValue="2" data-n="x2" /><span data-i18n="x2"></span></label><label className="chk"><input type="checkbox" defaultValue="3" data-n="x3" /><span data-i18n="x3"></span></label><div className="out"><span data-i18n="eo"></span><br /><b id="eout"></b><p style={{margin:'6px 0 0',fontSize:'13px',color:'var(--m)'}} data-i18n="en"></p></div><button className="btn mag" id="use" data-i18n="use"></button></div><form className="card" id="f" noValidate><h3 data-i18n="fm"></h3><br /><label><span data-i18n="fn"></span><input id="nm" autoComplete="name" /><span className="err" id="e1"></span></label><label><span data-i18n="fc"></span><input id="cn" autoComplete="email" /><span className="err" id="e2"></span></label><label><span data-i18n="fmsg"></span><textarea id="tx" rows={4}></textarea><span className="err" id="e3"></span></label><div className="row"><button className="btn p mag" type="submit" data-i18n="send"></button><button className="btn" type="button" id="cq" data-i18n="copyq"></button></div><p id="msg" role="status"></p></form></div><div className="final"><span>RoccetWeb</span></div></section>
    </>
  );
}

export default memo(Contact);
