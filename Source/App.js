var viewer = new Cesium.Viewer('cesiumContainer');

viewer.dataSources.add(Cesium.KmlDataSource.load('https://code4ikoma.github.io/ikoma_cesium/Source/civictechparty.kml'));

viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(135.697856,34.68636,4000.0)});
