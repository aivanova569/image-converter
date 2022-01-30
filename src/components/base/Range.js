import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';


const Range = ({min, max, value, label, step, name, onChange}) => {

    return (
        <FormGroup className="custom-input">
            <Label for="exampleRange" className="custom-label">
                {label}
            </Label>
            <Input
                id="exampleRange"
                name={name}
                type="range"
                className="range"
                min={min}
                max={max}
                value={value}
                onChange={onChange}
                step={step}
            />
            <span className="value">
                {value}
            </span>
        </FormGroup>
    )
}

export default Range;