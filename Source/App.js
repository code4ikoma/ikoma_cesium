var viewer = new Cesium.Viewer('cesiumContainer');

viewer.dataSources.add(Cesium.KmlDataSource.load('https://cesium.code4ikoma.org/Source/civictechparty.kml'));

viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(135.700553,34.691979,4000.0)});
