import { useState } from 'react';

function useTimeOut() {
  const [show, setSHow] = useState(false);

  const timeOut = () => {
    const TWO_SECONDS = 2000;
    const FOUR_SECONDS = 4000;
    setTimeout(setSHow(true), TWO_SECONDS);
    setTimeout(() => setSHow(false), FOUR_SECONDS);
  };
  return { show, timeOut };
}

export default useTimeOut;
