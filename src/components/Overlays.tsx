import { memo } from 'react';

function Overlays() {
  return (
    <>
      <div id="prog"></div><div id="cur" aria-hidden="true"></div><div id="pl" role="status" aria-label="Loading"><div className="in"><div className="lg">RoccetWeb</div><div className="bar"><i></i></div></div></div><canvas id="gl" aria-hidden="true"></canvas><div id="fb" aria-hidden="true"></div>
    </>
  );
}

export default memo(Overlays);
