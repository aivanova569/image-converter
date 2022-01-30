import { parseBase64 } from "../helpers/parseBase64";

import { IMAGE_EXTENSION } from "../constants/imageExtension";
import {
    DEFAULT_BLUR,
    DEFAULT_BRIGHTNESS,
    DEFAULT_OFFSETS,
    DEFAULT_SEPIA,
    DEFAULT_SHADOW_HEIGHT,
    DEFAULT_SHADOW_WIDTH,
    MAX_QUALITY_IMAGE
} from "../constants";


class CanvasService {

    static extensionPrefix = 'image/';

    constructor() {
        this.canvas = null;
        this.context = null;
        this.image = null;
        this.width = 0;
        this.height = 0;
        this.extension = IMAGE_EXTENSION.PNG;
        this.quality = MAX_QUALITY_IMAGE;
        this.blur = DEFAULT_BLUR;
        this.brightness = DEFAULT_BRIGHTNESS;
        this.sepia = DEFAULT_SEPIA;
        this.offsets = DEFAULT_OFFSETS;
        this.shadowBlur = DEFAULT_BLUR;
        this.shadowWidth = DEFAULT_SHADOW_WIDTH;
        this.shadowHeight = DEFAULT_SHADOW_HEIGHT;
    }

    init(image, canvas, config) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.image = image;
        this.#initSize(image.width, image.height);
        this.changeConfig(config);
        this.#loadImage();
    }

    changeConfig (config) {
        if (!this.canvas) return;
        this.offsets = {
            top: config.top,
            bottom: config.bottom,
            left: config.left,
            right: config.right,
        }
        this.#calculateSize();
        this.#changeScale(config.scale);
        this.#changeQuality(config.quality);
        this.blur = config.blur;
        this.brightness = config.brightness;
        this.sepia = config.sepia;
        this.extension = config.extension;
        this.shadowBlur = config.shadowBlur;
        this.shadowWidth = config.shadowWidth;
        this.shadowHeight = config.shadowHeight;
        this.#loadImage(this.canvas.width, this.canvas.height);
    }

    #initSize(width, height) {
        this.width = width;
        this.canvas.width = width;
        this.height = height;
        this.canvas.height = height;
    }

    #calculateSize() {
        const { top, bottom, right, left} = this.offsets;
        this.canvas.height = this.canvas.height + Number(bottom) + Number(top);
        this.canvas.width = this.canvas.width + Number(right) + Number(left);
    }

    #changeScale(scale) {
        if (!this.canvas) return;
        const { top, bottom, right, left} = this.offsets;
        this.canvas.width = (scale * this.width ) + Number(right) + Number(left);
        this.canvas.height = (scale * this.height) + Number(bottom) + Number(top);
    }

    #changeQuality(qualityPercent) {
        this.quality = qualityPercent / 100;
    }

    #loadImage() {
        const {top, bottom, right, left} = this.offsets;
        this.context.filter = `blur(${this.blur}px) sepia(${this.sepia}%) brightness(${this.brightness}%) drop-shadow(${this.shadowWidth}px ${this.shadowHeight}px ${this.shadowBlur}px #000000)`;
        this.context.drawImage(
            this.image,
            0,
            0,
            this.width,
            this.height,
            this.offsets.left,
            this.offsets.top,
            this.canvas.width - Number(right) - Number(left),
            this.canvas.height - Number(top) - Number(bottom),
        );
    }

    getResult() {
        const source = parseBase64(this.image.src);
        const edited  = parseBase64(
            this.canvas.toDataURL(`${CanvasService.extensionPrefix}${this.extension}`)
        );

        return [
            {
                name: `original.${source.extension}`,
                src: source.link,
            },
            {
                name: `edited.${edited.extension}`,
                src: edited.link,
            }
        ]
    }

}

export const canvasService = new CanvasService()