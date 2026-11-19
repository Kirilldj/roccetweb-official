import { memo } from 'react';

function Header() {
  return (
    <>
      <header><a className="logo" href="#hero" aria-label="RoccetWeb"><svg width="30" height="30" viewBox="0 0 32 32"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff"/><stop offset=".5" stopColor="#7d7d8c"/><stop offset="1" stopColor="#8B2BFF"/></linearGradient></defs><circle cx="16" cy="16" r="13" fill="none" stroke="url(#lg)" strokeWidth="3.5"/><path d="M11 23V9h6a4 4 0 010 8h-6m6 0l5 6" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round"/></svg>RoccetWeb</a><nav className="main" id="nav"><a href="#services" data-i18n="n1"></a><a href="#portfolio" data-i18n="n2"></a><a href="#about" data-i18n="n3"></a><a href="#contact" data-i18n="n4"></a></nav><div className="right"><button className="snd" id="snd" aria-pressed="false"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4zM15.5 8.5a5 5 0 010 7"/><path className="x" d="M18 6l4 12"/></svg></button><div className="lang" role="group" aria-label="Language"><button data-l="ru" className="on">RU</button><button data-l="en">EN</button></div><a className="btn p mag hide-m" href="#contact" data-i18n="cta"></a><button className="burger" id="bg" aria-label="Menu" aria-expanded="false"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button></div></header>
    </>
  );
}

export default memo(Header);
