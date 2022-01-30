import React, {useEffect, useState} from 'react';
import {Button, FormGroup, Label, Input} from "reactstrap";
import {IMAGE_EXTENSION} from "../../constants/imageExtension";
import {INPUT_TYPES} from "../../constants/inputTypes";
import {downloadImages} from "../../helpers/downloadFiles";
import {canvasService} from "../../services/canvasService";
import Range from "../base/Range";
import {
    MAX_BLUR, MAX_BRIGHTNESS,
    MAX_QUALITY_IMAGE,
    MAX_SCALE, MAX_SEPIA,
    MIN_BLUR, MIN_BRIGHTNESS,
    MIN_QUALITY_IMAGE,
    MIN_SCALE, MIN_SEPIA,
    STEP_SCALE_CHANGE
} from "../../constants";
import Select from "../base/Select";


const Menu = ({onChangeConfig, configurationValue}) => {
    const extensionOptions = Object.values(IMAGE_EXTENSION);

    const handleChange = (event) => {
        onChangeConfig({
            ...configurationValue,
            [event.target.name]: event.target.type === INPUT_TYPES.CHECKBOX
                ? event.target.checked
                : event.target.value,
        })
    };

    const handleDownloadResult = () => {
        downloadImages(canvasService.getResult(), 'result');
    };

    return <div className='menu' >
        <div>
            <Range
                label="Scale"
                name="scale"
                min={MIN_SCALE}
                max={MAX_SCALE}
                value={configurationValue.scale}
                onChange={handleChange}
                step={STEP_SCALE_CHANGE}
            />
            <Range
                label="Quality"
                name="quality"
                min={MIN_QUALITY_IMAGE}
                max={MAX_QUALITY_IMAGE}
                onChange={handleChange}
                value={configurationValue.quality}
            />
            <Select
                name="extension"
                onChange={handleChange}
                value={configurationValue.extension}
                options={extensionOptions}
            />

            <Button
                className='button download-button'
                tag='button'
                color='success'
                download='result'
                onClick={handleDownloadResult}>
                Download
            </Button>
        </div>
        <div>
            <Range
                label="Blur"
                name="blur"
                min={MIN_BLUR}
                max={MAX_BLUR}
                onChange={handleChange}
                value={configurationValue.blur}
            />
            <Range
                label="Brightness"
                name="brightness"
                min={MIN_BRIGHTNESS}
                max={MAX_BRIGHTNESS}
                onChange={handleChange}
                value={configurationValue.brightness}
            />
            <Range
                label="Sepia"
                name="sepia"
                min={MIN_SEPIA}
                max={MAX_SEPIA}
                onChange={handleChange}
                value={configurationValue.sepia}
            />
            <div className="offset">
                <FormGroup className="custom-input" >
                    <Label for="exampleRange" className="label">
                        Top
                    </Label>
                    <Input
                        name="top"
                        type="number"
                        onChange={handleChange}
                        value={configurationValue.top}
                    />
                </FormGroup>
                <FormGroup className="custom-input" >
                    <Label for="exampleRange" className="label">
                        Bottom
                    </Label>
                    <Input
                        name="bottom"
                        type="number"
                        onChange={handleChange}
                        value={configurationValue.bottom}
                    />
                </FormGroup>
                <FormGroup className="custom-input" >
                    <Label for="exampleRange" className="label">
                        Left
                    </Label>
                    <Input
                        name="left"
                        type="number"
                        onChange={handleChange}
                        value={configurationValue.left}
                    />
                </FormGroup>
                <FormGroup className="custom-input" >
                    <Label for="exampleRange" className="label">
                        Right
                    </Label>
                    <Input
                        name="right"
                        type="number"
                        onChange={handleChange}
                        value={configurationValue.right}
                    />
                </FormGroup>
            </div>
        </div>
    </div>
};

export default Menu;