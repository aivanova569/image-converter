import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';


const Select = ({values, label, onChange, name, options}) => {

    return (
        <FormGroup>
        <Label for="exampleSelect">
                {label}
        </Label>
        <Input
            id="exampleSelect"
            name={name}
            type="select"
            onChange={onChange}
            value={values}
        >
                {options.map((value) => (
                    <option key={value}>
                            {value}
                    </option>
                ))}
        </Input>
        </FormGroup>
    )
}

export default Select;