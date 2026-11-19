import { memo } from 'react';

function About() {
  return (
    <>
      <section id="about"><h2 data-i18n="ab"></h2><p className="lead" data-i18n="abl"></p><div className="about"><div><h3 data-i18n="a1h"></h3><p data-i18n="a1"></p></div><div><h3 data-i18n="a2h"></h3><p data-i18n="a2"></p></div><div><h3 data-i18n="a3h"></h3><p data-i18n="a3"></p></div></div></section>
    </>
  );
}

export default memo(About);
