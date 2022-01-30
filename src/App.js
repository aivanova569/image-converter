import { useState } from "react";

import Dropzone from "./components/shared/Dropzone";
import ImageView from "./components/shared/ImageView";
import Canvas from "./components/shared/Canvas";
import SettingsBar from "./components/shared/SettingsBar";
import { acceptFile } from "./helpers/acceptFile";

import './App.css';

import {
    DEFAULT_BLUR,
    DEFAULT_BRIGHTNESS,
    DEFAULT_OFFSETS,
    DEFAULT_SCALE,
    DEFAULT_SEPIA, DEFAULT_SHADOW_HEIGHT, DEFAULT_SHADOW_WIDTH,
    MAX_QUALITY_IMAGE
} from "./constants/index";
import { IMAGE_EXTENSION } from "./constants/imageExtension";


function App() {
    const [image, setImage] = useState(null);
    const handleLoadImage = acceptFile(setImage);

    const [imageConfig, setImageConfig] = useState({
        scale: DEFAULT_SCALE,
        blur: DEFAULT_BLUR,
        brightness: DEFAULT_BRIGHTNESS,
        sepia: DEFAULT_SEPIA,
        quality: MAX_QUALITY_IMAGE,
        extension: IMAGE_EXTENSION.PNG,
        shadowBlur: DEFAULT_BLUR,
        shadowHeight: DEFAULT_SHADOW_HEIGHT,
        shadowWidth: DEFAULT_SHADOW_WIDTH,
        ...DEFAULT_OFFSETS,
    });
    const handleChangeConfig = (newValue) => {
        setImageConfig(newValue);
    };

    const resetConfigs = () => {
        setImageConfig({
            scale: DEFAULT_SCALE,
            blur: DEFAULT_BLUR,
            brightness: DEFAULT_BRIGHTNESS,
            sepia: DEFAULT_SEPIA,
            quality: MAX_QUALITY_IMAGE,
            extension: IMAGE_EXTENSION.PNG,
            shadowBlur: DEFAULT_BLUR,
            shadowHeight: DEFAULT_SHADOW_HEIGHT,
            shadowWidth: DEFAULT_SHADOW_WIDTH,
            ...DEFAULT_OFFSETS,
        });
    };


    return (
    <div className="App">
      <div className="container">
          {!image
              ?  <Dropzone className="dropzone" onChange={handleLoadImage} />
              :  <>
                  <div className="img-views__wrapper">
                      <ImageView className="img-views__item" image={image} />
                      <Canvas className="img-views__item" image={image} imageConfig={imageConfig} />
                  </div>
                  <SettingsBar
                      onChangeConfig={handleChangeConfig}
                      configurationValues={imageConfig}
                      resetConfigs={resetConfigs}
                  />
              </>
          }
      </div>
    </div>
  );
}

export default App;
