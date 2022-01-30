import React, { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone'


const Dropzone  = ({onChange}) => {

    // const onDrop = useCallback((acceptedFiles) => {
    //     acceptedFiles.forEach((file) => {
    //         const reader = new FileReader();
    //
    //         reader.onload = () => {
    //             const img = new Image();
    //             const binaryStr = reader.result;
    //             console.log(reader.result)
    //         }
    //         reader.readAsDataURL(file)
    //     })
    //
    // }, [])

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