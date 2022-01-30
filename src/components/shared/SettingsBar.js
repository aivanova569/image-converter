import React, { useMemo } from 'react';
import { Button, FormGroup, Label, Input } from "reactstrap";

import { downloadImages } from "../../helpers/downloadFiles";
import { canvasService } from "../../services/canvasService";
import Range from "../base/Range";
import Select from "../base/Select";


import {
    MAX_BLUR,
    MAX_BRIGHTNESS,
    MAX_QUALITY_IMAGE,
    MAX_SCALE, MAX_SEPIA,
    MAX_SHADOW_BLUR,
    MAX_SHADOW_HEIGHT,
    MAX_SHADOW_WIDTH,
    MIN_BLUR, MIN_BRIGHTNESS,
    MIN_QUALITY_IMAGE,
    MIN_SCALE,
    MIN_SEPIA,
    MIN_SHADOW_BLUR,
    MIN_SHADOW_HEIGHT,
    MIN_SHADOW_WIDTH,
    STEP_SCALE_CHANGE
} from "../../constants";
import { IMAGE_EXTENSION } from "../../constants/imageExtension";


const SettingsBar = ({onChangeConfig, configurationValues, resetConfigs}) => {
    const rangeData = useMemo(
() => [
        {
            label: 'Top',
            inputName: 'top',
            inputValue: configurationValues?.top,

        },
        {
            label: 'Left',
            inputName: 'left',
            inputValue: configurationValues?.left,

        },
        {
            label: 'Bottom',
            inputName: 'bottom',
            inputValue: configurationValues?.bottom,

        },
        {
            label: 'Right',
            inputName: 'right',
            inputValue: configurationValues?.right,

        },
    ], [configurationValues]);

    const extensionOptions = Object.values(IMAGE_EXTENSION);

    const handleChange = (event) => {
        onChangeConfig({
            ...configurationValues,
            [event.target.name]: event.target.type ==='checkbox'
                ? event.target.checked
                : event.target.value,
        });
    };

    const handleDownloadResult = () => {
        downloadImages(canvasService.getResult(), 'result');
    };

    return (
        <div className="settings-box">
            <div className="settings-box__item">
                <Range
                    label="Scale"
                    name="scale"
                    min={MIN_SCALE}
                    max={MAX_SCALE}
                    step={STEP_SCALE_CHANGE}
                    value={configurationValues.scale}
                    onChange={handleChange}
                />
                <Range
                    label="Blur"
                    name="blur"
                    min={MIN_BLUR}
                    max={MAX_BLUR}
                    value={configurationValues.blur}
                    onChange={handleChange}
                />
                <Range
                    label="Brightness"
                    name="brightness"
                    min={MIN_BRIGHTNESS}
                    max={MAX_BRIGHTNESS}
                    value={configurationValues.brightness}
                    onChange={handleChange}
                />
                <Range
                    label="Sepia"
                    name="sepia"
                    min={MIN_SEPIA}
                    max={MAX_SEPIA}
                    value={configurationValues.sepia}
                    onChange={handleChange}
                />
                <Range
                    label="Quality"
                    name="quality"
                    min={MIN_QUALITY_IMAGE}
                    max={MAX_QUALITY_IMAGE}
                    value={configurationValues.quality}
                    onChange={handleChange}
                />
                <Range
                    label="Shadow Width"
                    name="shadowWidth"
                    min={MIN_SHADOW_WIDTH}
                    max={MAX_SHADOW_WIDTH}
                    onChange={handleChange}
                    value={configurationValues.shadowWidth}
                />
                <Range
                    label="Shadow Height"
                    name="shadowHeight"
                    min={MIN_SHADOW_HEIGHT}
                    max={MAX_SHADOW_HEIGHT}
                    onChange={handleChange}
                    value={configurationValues.shadowHeight}
                />
                <Range
                    label="Shadow Blur"
                    name="shadowBlur"
                    min={MIN_SHADOW_BLUR}
                    max={MAX_SHADOW_BLUR}
                    onChange={handleChange}
                    value={configurationValues.shadowBlur}
                />
            </div>

            <div className="settings-box__item">
                {
                    rangeData.map((item, i) => {
                        return (
                            <FormGroup className="custom-input">
                                <Label  className="custom-label" for="exampleRange">
                                    {item.label}
                                </Label>
                                <Input
                                    name={item.inputName}
                                    type="number"
                                    value={item.inputValue}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        );
                    })
                }

                <Select
                    label="Extension"
                    name="extension"
                    onChange={handleChange}
                    value={configurationValues.extension}
                    options={extensionOptions}
                />
            </div>
            <div>
                <Button
                    className="btn btn_cancel"
                    tag="button"
                    onClick={resetConfigs}
                >
                    Reset
                </Button>
                <Button
                    className="btn btn_download"
                    tag="button"
                    download="result"
                    onClick={handleDownloadResult}
                >
                    Save
                </Button>
            </div>
        </div>
        )
};

export default SettingsBar;