import React from 'react';
import {FormGroup, Label, Input} from 'reactstrap';
import {INPUT_TYPES} from "../../constants/inputTypes";


const Range = ({min, max, value, label, onChange, step, name}) => (
    <FormGroup className="custom-input">
        <Label for="exampleRange" className="label">
            {label}
            <span className="value">
                {value}
            </span>
        </Label>
        <Input
            id="exampleRange"
            name={name}
            type={INPUT_TYPES.RANGE}
            className="range"
            min={min}
            max={max}
            value={value}
            onChange={onChange}
            step={step}
        />
    </FormGroup>
);

export default Range;