/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/** @type {import('next').NextConfig} */

const path = require('path')

module.exports = {
    reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images:{
   domains:["res.cloudinary.com"]
  }
}

