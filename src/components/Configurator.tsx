import { memo } from 'react';

function Configurator() {
  return (
    <>
      <section id="config"><h2 data-i18n="cf"></h2><p className="lead" data-i18n="cfl"></p><div className="card"><div className="cfp"><i id="cfbar"></i></div><div id="cfb"></div></div></section>
    </>
  );
}

export default memo(Configurator);
