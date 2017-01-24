const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

imagemin(['build/_images/*.{jpg,png}'], 'public/assets/images', {
    plugins: [
        imageminMozjpeg({quality:80}),
        imageminPngquant({quality: '55-75'})
    ]
}).then(files => {
    console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
});