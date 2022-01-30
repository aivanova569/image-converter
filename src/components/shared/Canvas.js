import React, { useCallback, useEffect, useRef } from 'react';

import { canvasService } from "../../services/canvasService";
import { debounce } from "../../helpers/debounce";


const Canvas = ({image, imageConfig, className}) => {
    const canvasRef = useRef();

    const changeConfigWithDebounce = useCallback(
        debounce(canvasService.changeConfig.bind(canvasService), 300),
        [image]);

    useEffect(() => {
        changeConfigWithDebounce(imageConfig)
    }, [imageConfig]);

    useEffect(() => {
        if (image) {
            canvasService.init(image, canvasRef.current, imageConfig)
        }
    }, [image]);


    return (
        <div className={className}>
            <canvas className="canvas" id="canvas"  ref={canvasRef} />
        </div>
    );
};

export default Canvas;