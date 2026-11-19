import { memo } from 'react';

function Services() {
  return (
    <>
      <section id="services"><h2 data-i18n="sv"></h2><p className="lead" data-i18n="svl"></p><div className="cards"><article className="card"><div className="orb"></div><h3>RoccetWeb</h3><p data-i18n="c1p"></p><ul><li><i className="dot"></i><span data-i18n="c1a"></span></li><li><i className="dot"></i><span data-i18n="c1b"></span></li><li><i className="dot"></i><span data-i18n="c1c"></span></li></ul></article><article className="card"><div className="orb b"></div><h3>RoccetWeb Automation</h3><p data-i18n="c2p"></p><ul><li><i className="dot"></i><span data-i18n="c2a"></span></li><li><i className="dot"></i><span data-i18n="c2b"></span></li><li><i className="dot"></i><span data-i18n="c2c"></span></li></ul></article></div><div className="card flow" style={{marginTop:'24px'}}><h3 data-i18n="fl"></h3><p data-i18n="flp"></p><div className="nodes"><div className="node" data-i18n="fn1"></div><div className="node" data-i18n="fn2"></div><div className="node" data-i18n="fn3"></div></div><button className="btn p mag" id="run" data-i18n="run"></button><ul id="log" aria-live="polite"></ul></div></section>
    </>
  );
}

export default memo(Services);
