import React, { useEffect, useState } from 'react';

const useImage = (file) => {
    // console.log(file);
    const [image, setImage] = useState(null);

    useEffect(() => {

        if (file) {

        }

    }, [file]);

    // console.log(image);
    return image;


};

export default useImage;