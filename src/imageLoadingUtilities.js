/**
 * Load an image from the given URL.
 * @param {string} url - The URL of the image to load.
 * @returns {Promise} - A Promise that resolves with the loaded image or rejects with an error.
 */
function loadImage(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error('Failed to load image'));
      image.src = url;
    });
  }
  
  // Export the functions
  module.exports = {
    loadImage
  };
  