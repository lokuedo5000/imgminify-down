const sharp = require('sharp'); // Import the Sharp library for image processing
const axios = require('axios'); // Import Axios for making HTTP requests
const fs = require('fs'); // Import the fs module for interacting with the file system

class ImgminifyDown {
  constructor() {
    this.jpgOptions = {
      quality: 40, // Quality options for JPEG images (40 is a quality value)
      progressive: true, // Enable progressive compression for JPEG images
    };
  }

  // Main function for downloading and optionally optimizing an image
  async download(action, { url, dest, optimize }) {
    try {
      const imageBuffer = await this.downloadImage(url); // Download the image from the URL

      if (action === "download") {
        const optimizedImageBuffer = await this.optimizeImage(imageBuffer, optimize); // Optimize the image
        this.saveImage(dest, optimizedImageBuffer); // Save the optimized image to the specified destination
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error downloading or optimizing the image:', error);
      throw error;
    }
  }

  // Function to download an image from a URL
  async downloadImage(url) {
    try {
      const response = await axios.get(url, {
        responseType: 'arraybuffer', // Configure the response type to get an ArrayBuffer
      });

      if (response.status === 200) {
        return Buffer.from(response.data, 'binary'); // Convert the response into an image buffer
      } else {
        throw new Error(`Failed to download the image from ${url}`);
      }
    } catch (error) {
      throw error;
    }
  }

  // Function to optimize an image by temporarily converting it to WebP and applying optional JPEG compression
  async optimizeImage(imageBuffer, optimize) {
    try {
      const image = sharp(imageBuffer); // Create a Sharp instance for the original image

      // const { format } = await image.metadata(); // Get the format of the original image

      // Always convert the image to WebP temporarily to apply compression
      const webpImageBuffer = await image.webp().toBuffer();

      if (optimize) {
        // Apply JPEG compression to the WebP image and return the optimized buffer
        return sharp(webpImageBuffer)
          .jpeg(this.jpgOptions)
          .toBuffer();
      } else {
        return webpImageBuffer; // No additional compression applied, return the WebP image
      }
    } catch (error) {
      throw error;
    }
  }

  // Function to save an image to the file system
  saveImage(dest, imageBuffer) {
    fs.writeFileSync(dest, imageBuffer); // Write the image buffer to the destination file
  }
}

module.exports = ImgminifyDown; // Export the ImgminifyDown class for use in other modules
 