var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BATAS_ADMINISTRASI_AR_1 = new ol.format.GeoJSON();
var features_BATAS_ADMINISTRASI_AR_1 = format_BATAS_ADMINISTRASI_AR_1.readFeatures(json_BATAS_ADMINISTRASI_AR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATAS_ADMINISTRASI_AR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_ADMINISTRASI_AR_1.addFeatures(features_BATAS_ADMINISTRASI_AR_1);
var lyr_BATAS_ADMINISTRASI_AR_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATAS_ADMINISTRASI_AR_1, 
                style: style_BATAS_ADMINISTRASI_AR_1,
                interactive: false,
    title: 'BATAS_ADMINISTRASI_AR<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_AR_1_0.png" /> Administrasi Luar<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_AR_1_1.png" /> Perkotaan Labuan Bajo<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_AR_1_2.png" /> <br />'
        });
var format_WilayahPerencanaan_2 = new ol.format.GeoJSON();
var features_WilayahPerencanaan_2 = format_WilayahPerencanaan_2.readFeatures(json_WilayahPerencanaan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahPerencanaan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahPerencanaan_2.addFeatures(features_WilayahPerencanaan_2);
var lyr_WilayahPerencanaan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WilayahPerencanaan_2, 
                style: style_WilayahPerencanaan_2,
                interactive: false,
                title: '<img src="styles/legend/WilayahPerencanaan_2.png" /> Wilayah Perencanaan'
            });
var format_JaringanTransportasiLabuanBajo_3 = new ol.format.GeoJSON();
var features_JaringanTransportasiLabuanBajo_3 = format_JaringanTransportasiLabuanBajo_3.readFeatures(json_JaringanTransportasiLabuanBajo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanTransportasiLabuanBajo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanTransportasiLabuanBajo_3.addFeatures(features_JaringanTransportasiLabuanBajo_3);
var lyr_JaringanTransportasiLabuanBajo_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanTransportasiLabuanBajo_3, 
                style: style_JaringanTransportasiLabuanBajo_3,
                interactive: false,
    title: 'Jaringan Transportasi Labuan Bajo<br />\
    <img src="styles/legend/JaringanTransportasiLabuanBajo_3_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JaringanTransportasiLabuanBajo_3_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JaringanTransportasiLabuanBajo_3_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/JaringanTransportasiLabuanBajo_3_3.png" /> Jalan Lingkungan<br />\
    <img src="styles/legend/JaringanTransportasiLabuanBajo_3_4.png" /> <br />'
        });
var format_BatasKabupaten_4 = new ol.format.GeoJSON();
var features_BatasKabupaten_4 = format_BatasKabupaten_4.readFeatures(json_BatasKabupaten_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupaten_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupaten_4.addFeatures(features_BatasKabupaten_4);
var lyr_BatasKabupaten_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKabupaten_4, 
                style: style_BatasKabupaten_4,
                interactive: false,
                title: '<img src="styles/legend/BatasKabupaten_4.png" /> Batas Kabupaten'
            });
var format_BatasDesaKelurahan_5 = new ol.format.GeoJSON();
var features_BatasDesaKelurahan_5 = format_BatasDesaKelurahan_5.readFeatures(json_BatasDesaKelurahan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesaKelurahan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesaKelurahan_5.addFeatures(features_BatasDesaKelurahan_5);
var lyr_BatasDesaKelurahan_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasDesaKelurahan_5, 
                style: style_BatasDesaKelurahan_5,
                interactive: false,
                title: '<img src="styles/legend/BatasDesaKelurahan_5.png" /> Batas Desa/ Kelurahan'
            });
var format_DestinasiWisata_6 = new ol.format.GeoJSON();
var features_DestinasiWisata_6 = format_DestinasiWisata_6.readFeatures(json_DestinasiWisata_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DestinasiWisata_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DestinasiWisata_6.addFeatures(features_DestinasiWisata_6);
var lyr_DestinasiWisata_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DestinasiWisata_6, 
                style: style_DestinasiWisata_6,
                interactive: true,
                title: '<img src="styles/legend/DestinasiWisata_6.png" /> Destinasi Wisata'
            });

lyr_GoogleEarth_0.setVisible(true);lyr_BATAS_ADMINISTRASI_AR_1.setVisible(true);lyr_WilayahPerencanaan_2.setVisible(true);lyr_JaringanTransportasiLabuanBajo_3.setVisible(true);lyr_BatasKabupaten_4.setVisible(true);lyr_BatasDesaKelurahan_5.setVisible(true);lyr_DestinasiWisata_6.setVisible(true);
var layersList = [lyr_GoogleEarth_0,lyr_BATAS_ADMINISTRASI_AR_1,lyr_WilayahPerencanaan_2,lyr_JaringanTransportasiLabuanBajo_3,lyr_BatasKabupaten_4,lyr_BatasDesaKelurahan_5,lyr_DestinasiWisata_6];
lyr_BATAS_ADMINISTRASI_AR_1.set('fieldAliases', {'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', });
lyr_WilayahPerencanaan_2.set('fieldAliases', {'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', });
lyr_JaringanTransportasiLabuanBajo_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', });
lyr_BatasKabupaten_4.set('fieldAliases', {});
lyr_BatasDesaKelurahan_5.set('fieldAliases', {});
lyr_DestinasiWisata_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JENIS': 'JENIS', 'SBDATA': 'SBDATA', 'Foto': 'Foto', });
lyr_BATAS_ADMINISTRASI_AR_1.set('fieldImages', {'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', });
lyr_WilayahPerencanaan_2.set('fieldImages', {'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', });
lyr_JaringanTransportasiLabuanBajo_3.set('fieldImages', {'NAMOBJ': 'TextEdit', });
lyr_BatasKabupaten_4.set('fieldImages', {});
lyr_BatasDesaKelurahan_5.set('fieldImages', {});
lyr_DestinasiWisata_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JENIS': 'TextEdit', 'SBDATA': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_BATAS_ADMINISTRASI_AR_1.set('fieldLabels', {'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', });
lyr_WilayahPerencanaan_2.set('fieldLabels', {'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', });
lyr_JaringanTransportasiLabuanBajo_3.set('fieldLabels', {'NAMOBJ': 'header label', });
lyr_BatasKabupaten_4.set('fieldLabels', {});
lyr_BatasDesaKelurahan_5.set('fieldLabels', {});
lyr_DestinasiWisata_6.set('fieldLabels', {'NAMOBJ': 'no label', 'JENIS': 'no label', 'SBDATA': 'no label', 'Foto': 'no label', });
lyr_DestinasiWisata_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});