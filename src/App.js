import React, { useState, useEffect } from 'react';

// Components
import ImageTrailEffect from './ImageTrailEffect/ImageTrailEffect';
import Menu from './Components/Menu/Menu';

// Hooks
import useForm from './Hooks/useForm';

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

  const [componentController, setComponentController] = useState(null);
  const [show, setShow] = useState(true);


  const images = [
    Alpha,
    Binance,
    Bitcoin,
    Busd,
    Link,
    Luna,
    Theter
  ];

  const form = useForm({
    animationFadeDuration: { value: 0.2 },
    animationFadeDelay: { value: 0.4 },
    animationMoveDuration: { value: 0.5 },
    animationFadeType: { value: "linear" },
    animationMoveType: { value: "ease-in-out" },
    endOpacity: { value: "0" },
    endScale: { value: 0.5 },
    floater: { valie: true },
    imageHeight: { value: 50 },
    imageWidth: { value: 50 },
    images: { value: images },
    maxImageCount: { value: 20 },
    movementXRation: { value: 1 },
    movementYRation: { value: 1 },
    spawnAdjustmentXValue: { value: 2 },
    spawnAdjustmentYValue: { value: 3 },
    startOpacity: { value: 1 },
    startScale: { value: 1 },
    triggerDistance: { value: 80 },
  })

  useEffect(() => {
    if (show) {
      setComponentController(
        <ImageTrailEffect
          animationFadeDuration={form.values["animationFadeDuration"]}
          animationFadeDelay={form.values["animationFadeDelay"]}
          animationMoveDuration={form.values["animationMoveDuration"]}
          animationFadeType={form.values["animationFadeType"]}
          animationMoveType={form.values["animationMoveType"]}
          endOpacity={form.values["endOpacity"]}
          endScale={form.values["endScale"]}
          floater={form.values["floater"]}
          imageHeight={form.values["imageHeight"]}
          imageWidth={form.values["imageWidth"]}
          images={images}
          maxImageCount={form.values["maxImageCount"]}
          movementXRation={form.values["movementXRation"]}
          movementYRation={form.values["movementYRation"]}
          spawnAdjustmentXValue={form.values["spawnAdjustmentXValue"]}
          spawnAdjustmentYValue={form.values["spawnAdjustmentYValue"]}
          startOpacity={form.values["startOpacity"]}
          startScale={form.values["startScale"]}
          triggerDistance={form.values["triggerDistance"]} />
      );
    } else {
      setComponentController(null);
    }

  }, [form.values, show])

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
      <Menu form={form} show={show} setShow={setShow} />
      {componentController && componentController}
    </div>
  );
}

export default App;