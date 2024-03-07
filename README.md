<h1 align="center">Welcome to One Dionys - Image Loading Utilities! 👋 </h1>

<p align="center">Functions for loading and manipulating images in web applications. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-image-loading-utilities?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-image-loading-utilities?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-image-loading-utilities?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-image-loading-utilities?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-image-loading-utilities.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-image-loading-utilities?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-image-loading-utilities?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const { loadImage } = require('image-loading-utilities');

// Example usage
const imageUrl = 'https://example.com/image.jpg';

loadImage(imageUrl)
.then(image => {
    console.log('Image loaded successfully:', image);
})
.catch(error => {
    console.error('Error loading image:', error);
});
```

#### Explanation

* This package provides a single function loadImage(url) to asynchronously load an image from a given URL. It returns a Promise that resolves with the loaded image or rejects with an error if the image fails to load.

#### Return Value

* When the image is successfully loaded, the Promise resolves with the loaded Image object.
* If the image fails to load (e.g., due to an invalid URL or network error), the Promise rejects with an Error object.

## 📆 Release Date

* v1.0.0 : 07 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Image Loading Utilities is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Image Loading Utilities? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
