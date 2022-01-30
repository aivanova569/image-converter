import React from 'react';


const ImageView = ({image, className}) => {


    return (
        <div className={className}>
            <img src={image?.src} />
        </div>
    );
};

export default ImageView;