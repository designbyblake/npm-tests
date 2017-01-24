const copyfiles = require('copyfiles');
const del = require('del');

// Copies file from images to a back up before deleting.
copyfiles(['build/_images/**.*', 'build/_original_images/'], '-u', function(err){
	console.log('moved');
	// Deletes all images from build_images
	// This is done to not reoptimze the same images
	del(['build/_images/**.*']).then(paths =>{
		console.log('Deleted files');
	})
});