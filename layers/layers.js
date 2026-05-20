ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([682747.560329, 9187656.528720, 699581.639365, 9198357.077872]);
var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_aksesibilitasuniv_1 = new ol.format.GeoJSON();
var features_aksesibilitasuniv_1 = format_aksesibilitasuniv_1.readFeatures(json_aksesibilitasuniv_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_aksesibilitasuniv_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitasuniv_1.addFeatures(features_aksesibilitasuniv_1);
var lyr_aksesibilitasuniv_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitasuniv_1, 
                style: style_aksesibilitasuniv_1,
                popuplayertitle: 'aksesibilitas univ',
                interactive: true,
    title: 'aksesibilitas univ<br />\
    <img src="styles/legend/aksesibilitasuniv_1_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/aksesibilitasuniv_1_1.png" /> 2,4km (30 menit)<br />' });
var format_PTN_Surabaya_2 = new ol.format.GeoJSON();
var features_PTN_Surabaya_2 = format_PTN_Surabaya_2.readFeatures(json_PTN_Surabaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_PTN_Surabaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTN_Surabaya_2.addFeatures(features_PTN_Surabaya_2);
var lyr_PTN_Surabaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTN_Surabaya_2, 
                style: style_PTN_Surabaya_2,
                popuplayertitle: 'PTN_Surabaya',
                interactive: true,
    title: 'PTN_Surabaya<br />\
    <img src="styles/legend/PTN_Surabaya_2_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/PTN_Surabaya_2_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/PTN_Surabaya_2_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTN_Surabaya_2_3.png" /> UNAIR A<br />\
    <img src="styles/legend/PTN_Surabaya_2_4.png" /> UNAIR B<br />\
    <img src="styles/legend/PTN_Surabaya_2_5.png" /> UNAIR C<br />\
    <img src="styles/legend/PTN_Surabaya_2_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/PTN_Surabaya_2_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/PTN_Surabaya_2_8.png" /> UPNV Jatim<br />' });

lyr_ESRISatellite_0.setVisible(true);lyr_aksesibilitasuniv_1.setVisible(true);lyr_PTN_Surabaya_2.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_aksesibilitasuniv_1,lyr_PTN_Surabaya_2];
lyr_aksesibilitasuniv_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_PTN_Surabaya_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'QS WUR': 'QS WUR', 'Didirikan': 'Didirikan', 'Fakultas': 'Fakultas', 'Foto': 'Foto', });
lyr_aksesibilitasuniv_1.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_PTN_Surabaya_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'QS WUR': 'TextEdit', 'Didirikan': 'Range', 'Fakultas': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_aksesibilitasuniv_1.set('fieldLabels', {'fid': 'hidden field', 'Access': 'inline label - always visible', });
lyr_PTN_Surabaya_2.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kampus': 'no label', 'QS WUR': 'no label', 'Didirikan': 'no label', 'Fakultas': 'no label', 'Foto': 'no label', });
lyr_PTN_Surabaya_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});