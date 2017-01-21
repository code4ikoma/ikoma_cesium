var viewer = new Cesium.Viewer('cesiumContainer');

viewer.dataSources.add(Cesium.KmlDataSource.load('https://code4ikoma.github.io/ikoma_cesium/Ikoma_cesium-starter-app-master/Source/civictechparty.kml'));

viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(135.700553,34.691979,8000.0)});
