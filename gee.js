// for exporting single images only
// var batch = require('users/fitoprincipe/geetools:batch');

//  MOD09A1.006 Terra Surface Reflectance 8-Day Global 500m
var collection1 = ee.ImageCollection('MODIS/006/MOD09A1')
  .filterDate('2015-05-01', '2015-10-01');

// MOD11A2.006 Terra Land Surface Temperature and Emissivity 8-Day Global 1km
var collection2 = ee.ImageCollection('MODIS/006/MOD11A2')
  .filterDate('2015-05-01', '2015-10-01');
 
var MOD09 = collection1.map(function(img) {return img.clip(geometry)})
var MOD11 = collection2.map(function(img) {return img.clip(geometry)})

print (MOD11)

var falseColorVis = {
  min: -100.0,
  max: 8000.0,
  bands: ['sur_refl_b02', 'sur_refl_b02', 'sur_refl_b01'],
};

// Display the composites.
Map.centerObject(geometry);
Map.addLayer(MOD09,falseColorVis);

// export data
// Export the image, specifying scale and region.

// get specific bands
var MOD09_2 = MOD09.select('sur_refl.+')
var MOD11_2 = MOD11.select('LST_.+')

// combine into single image
var merged1 = MOD09_2.toBands();
var merged2 = MOD11_2.toBands();

// export data
// in case you want single images
//batch.Download.ImageCollection.toDrive(MOD09, 'ak_final',
//{scale: 250,
//region: geometry,
//crs: 'EPSG:3338',
//})

// all bands
Export.image.toDrive({
  image: merged1,
  folder: 'ak_final',
  description: 'mod09_2015',
  scale: 500,
  crs: 'EPSG:3338',
  region: geometry
});

Export.image.toDrive({
  image: merged2,
  folder: 'ak_final',
  description: 'mod11_2015',
  scale: 500,
  crs: 'EPSG:3338',
  region: geometry
});