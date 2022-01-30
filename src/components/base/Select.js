import React from 'react';
import {FormGroup, Label, Input} from 'reactstrap';
import {INPUT_TYPES} from "../../constants/inputTypes";


const Select = ({value, label, onChange, name, options}) => (
    <FormGroup>
        <Label for="exampleSelect">
            {label}
        </Label>
        <Input
            id='exampleSelect'
            name={name}
            type={INPUT_TYPES.SELECT}
            onChange={onChange}
            value={value}
        >
            {options.map((value) => (
                <option key={value}>
                    {value}
                </option>
            ))}
        </Input>
    </FormGroup>
);

export default Select;