import { useEffect, useState } from 'react';

export default function useDeviceType() {
  const [deviceType, setDeviceType] = useState('');

  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setDeviceType('iOS');
      return;
    }

    if (/android/i.test(userAgent)) {
      setDeviceType('Android');
      return;
    }

    if (
      /Mobile|mini|Fennec|Android|iP(ad|od|hone)|IEMobile|BlackBerry|BB10|Silk/.test(
        userAgent,
      )
    ) {
      setDeviceType('Mobile');
      return;
    }

    setDeviceType('PC');
  }, []);

  return deviceType;
}
