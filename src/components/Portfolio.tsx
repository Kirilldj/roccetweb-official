import { memo } from 'react';

function Portfolio() {
  return (
    <>
      <section id="portfolio"><h2 data-i18n="pf"></h2><p className="lead" data-i18n="pfl"></p><div className="pgrid" id="pg"></div></section>
    </>
  );
}

export default memo(Portfolio);
