import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone'


const Dropzone  = ({onChange}) => {

    const {getRootProps, getInputProps, acceptedFiles} = useDropzone({});

    console.log(acceptedFiles)

    useEffect(() => {
        if (acceptedFiles.length) {
            onChange(acceptedFiles)
        }
    }, [acceptedFiles]);


    return (
        <div className="dropzone__wrapper">
            <div className="dropzone__box" {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Select the files here ...</p>
            </div>

        </div>
    );
}

export default Dropzone;