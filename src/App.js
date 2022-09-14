import React from 'react';

// Components
import ImageTrailEffect from './ImageTrailEffect/ImageTrailEffect';

// Images
import Alpha from './Assets/alpha.png';
import Binance from './Assets/binance.png';
import Bitcoin from './Assets/bitcoin.png';
import Busd from './Assets/busd.png';
import Link from './Assets/link.png';
import Luna from './Assets/luna.png';
import Theter from './Assets/theter.png';
import Background from './Assets/background.jpg';

function App() {

  const images = [
    Alpha,
    Binance,
    Bitcoin,
    Busd,
    Link,
    Luna,
    Theter
  ];

  return (
    <div style={{
      backgroundImage: `url(${Background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
    }}>
      <ImageTrailEffect
        animationDuration={0.5}
        switchAnimation="80%"
        animationType="ease-in-out"
        endOpacity={0}
        endScale={0.5}
        imageHeight={50}
        imageWidth={50}
        images={images}
        maxImageCount={10}
        spawnAdjustmentXValue={2}
        spawnAdjustmentYValue={3}
        startOpacity={1}
        startScale={1}
        triggerDistance={80} />
    </div>
  );
}

export default App;