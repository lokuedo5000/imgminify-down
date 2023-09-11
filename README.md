# Imgminify-Down Module Documentation

`imgminify-down` is a Node.js module designed for image downloading and optional optimization. It simplifies the process of fetching images from URLs and provides the flexibility to optimize them, converting them to WebP format with optional JPEG compression. The downloaded and optimized images are saved in the .jpg format.

# Features

- `Image Download:` Easily download images from external URLs.
- `Image Optimization:` Optionally optimize images by converting them to WebP format and applying JPEG compression.
- `Configurable Quality:` Adjust image quality for JPEG compression as per your requirements.

## Installation

You can install **Imgminify-Down** using npm:

```bash
npm install imgminify-down
```

## Usage

```javascript
const ImgminifyDown = require("imgminify-down");

const imageDownloader = new ImgminifyDown();

// Define your image download configuration
const downloadConfig = {
  url: "https://example.com/image.jpg", // URL of the image to download
  dest: "./downloaded-image.jpg", // Destination file path
  optimize: true, // Set to true to enable optimization (converts to WebP and applies JPEG compression)
};

// Use the image downloader
imageDownloader
  .download("download", downloadConfig)
  .then(() => {
    console.log("Image downloaded and optionally optimized.");
  })
  .catch((error) => {
    console.error("Error downloading or optimizing the image:", error);
  });
```

## Options

- `url:` The URL of the image to download.
- `dest:` The destination path where the downloaded image will be saved as a .jpg file.
- `optimize:` Set to true to enable image optimization, false to download without 

### Developer Name

- Name: lokuedo5000
- Email: lokuedo5001@gmail.com
- GitHub profile: https://github.com/lokuedo5000

If you have any questions or need technical support, feel free to contact the developer.

If you run into any problems or need help with the `imgminify-down` module, here are some options:

### Report a Problem

If you think you have found a bug or a problem with the module, please create an "issue" in the official repository at [GitHub](https://github.com/lokuedo5000/imgminify-down/issues). Be sure to provide the following information when reporting a problem:

- Detailed description of the problem.
- Step by step to reproduce the problem.
- Screenshots (if applicable).
- Module version and version of Node.js that you are using.

### Community Support

If you have general questions about using the module or need guidance, you can post your questions in the "Discussions" section of the GitHub repository. The user community and the developer can help you with your queries.

### Contact Developer

If you have more specific questions or need urgent help, you can contact the developer directly through his email: lokuedo5001@gmail.com.

Please be as clear and detailed as possible when describing any issues or questions you may have. We are here to help you solve any difficulties you encounter when using `imgminify-down`.
