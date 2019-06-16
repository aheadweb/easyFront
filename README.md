# easyFront

easyFront is a starter kit for frontend developers.
=======================================

**Note:** This project is an active work . Contributions, support is very much welcomed.

Features
--------
* ES6 (Babel)
* Webpack & Webpack-dev-server
* Sass
* Svg-sprites
* Images optimization

Install
-------

    git clone https://github.com/aheadweb/easyFront.git
    cd easyFront
    npm install
    
Usage
-----

Running `npm run dev` and wait for the project to build. The local server is running on port 8081.
In development mode, this may take some time due to the imagemin-webpack-plugin

Final build
--------
Running npm run build will build both the JS and CSS into single bundles.

(PSD\.fig and etc) to Html
--------
Pay attention to the file mixins.sass it very helpful to you.

Make svg sprites
--------
Open folder src/sprite-svg and upload all you *.svg file. Next step includ each svg to src/js/svg-common.js like this:

    import '../sprite-svg/buddha.svg'
    import '../sprite-svg/fireworks.svg'

**usege in html**

    <svg>
      <use xlink:href="svg-sprite/icons.svg#buddha" />
    </svg>

The folder svg-sprite created when you write npm run build. 
The svg-sprite folder is located in the dist folder, which is created with the npm run build command, that is dist/svg-sprite/icons.svg

Observer via others devices (Windows)
--------
* First step
    Open your console `cmd` and enter `ipconfig`
    ![alt text](https://www.wikihow.com/images_en/thumb/a/aa/Refresh-Your-IP-Address-on-a-Windows-Computer-Step-6-Version-4.jpg/v4-728px-Refresh-Your-IP-Address-on-a-Windows-Computer-Step-6-Version-4.jpg "Logo Title Text 1")
* Second step
    Save the IPv4 adress and enter url in line your browser like this: 192.168.52.143:8081 port
* Third step
    You can open a similar address on your device.

    
