import React from 'react';

// This component will render an image within a div that has fixed dimensions.
// You can adjust the width and height as per your requirements.
const FixedSizeImage = ({ imageUrl, altText }) => {
    // Styling for the container
    const containerStyle = {
        width: '300px',  // Width of the container
        height: '300px', // Height of the container
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden' // This ensures the image does not overflow the container's bounds
    };

    // Styling for the image. This makes the image fully cover the container.
    // Adjust objectFit as needed ('cover' may cut off parts of the image).
    const imageStyle = {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'cover' // Adjust this to change how the image fits into the container
    };

    return (
        <div style={containerStyle}>
            <img src={imageUrl} alt={altText} style={imageStyle} />
        </div>
    );
};

export default FixedSizeImage;