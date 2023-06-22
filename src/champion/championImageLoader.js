import React, { useState, useEffect } from 'react';

function ImageLoader() {
  const [images, setImages] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const imageContext = require.context('./images', false, /\.(png|jpe?g|svg)$/);
      const imageKeys = imageContext.keys();

      const loadedImages = await Promise.all(
        imageKeys.map(async (key) => {
          const imageNameWithExtension = key.replace('./', '');
          const imageName = imageNameWithExtension.substring(0, imageNameWithExtension.lastIndexOf('.'));
          const imagePath = (await import(`./images/${imageNameWithExtension}`)).default;
          return { name: imageName, path: imagePath };
        })
      );

      setImages(loadedImages);
      setFilteredImages(loadedImages); // Initialize filtered images with all images
    };

    importImages();
  }, []);

  useEffect(() => {
    // Filter images based on the filter text
    const filtered = images.filter((image) =>
      image.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredImages(filtered);
  }, [filter, images]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleClick = (image) => {
    // Pass image information to the next component
    // You can navigate to the next component and pass the image using router or any other method
    console.log('Clicked Image:', image);
  };

  return (
    <div>
      <h2>Image Loader</h2>
      <input
        type="text"
        placeholder="Search by image name"
        value={filter}
        onChange={handleFilterChange}
      />
      {filteredImages.map((image, index) => (
        <div key={index} onClick={() => handleClick(image)}>
          <img src={image.path} alt={image.name} />
        </div>
      ))}
    </div>
  );
}

export default ImageLoader;
