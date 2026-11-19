import { memo } from 'react';

function Hero() {
  return (
    <>
      <section id="hero"><div className="tag"><i className="dot"></i><span>Digital Studio</span></div><h1 aria-label="Создаём. Автоматизируем. Развиваем."><span><i data-i18n="h1"></i></span><span><i data-i18n="h2"></i></span><span className="vi"><i data-i18n="h3"></i></span></h1><p className="sub" data-i18n="sub"></p><div className="row"><a className="btn p mag" href="#services" data-i18n="b1"></a><a className="btn mag" href="#about" data-i18n="b2"></a></div><div className="forge"><span data-i18n="forge"></span><button className="on" data-st="0" data-i18n="s0"></button><button data-st="1" data-i18n="s1"></button><button data-st="2" data-i18n="s2"></button></div></section>
    </>
  );
}

export default memo(Hero);
