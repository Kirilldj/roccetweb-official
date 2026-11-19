import { memo } from 'react';

function Process() {
  return (
    <>
      <section id="process"><h2 data-i18n="pr"></h2><br /><div className="steps" id="st"></div><div className="card" id="pd" aria-live="polite"></div></section>
    </>
  );
}

export default memo(Process);
