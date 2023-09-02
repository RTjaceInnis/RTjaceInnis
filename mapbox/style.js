
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OSMStandard_0": {
            "type": "raster",
            "tiles": ["http://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "GJhabitat_1": {
            "type": "geojson",
            "data": json_GJhabitat_1
        }
                    ,
        "bathymetry_2": {
            "type": "image",
            "url": "./data/bathymetry_2.png",
            "coordinates": [
                [-0.000675, 0.000356],
                [-0.000613, 0.000356],
                [-0.000613, 0.000378],
                [-0.000675, 0.000378]
            ]
        }},
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OSMStandard_0_0",
            "type": "raster",
            "source": "OSMStandard_0"
        },
        {
            "id": "lyr_GJhabitat_1_0",
            "type": "fill",
            "source": "GJhabitat_1",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#85b66f'}
        }
,
        {
            "id": "lyr_bathymetry_2_2",
            "type": "raster",
            "source": "bathymetry_2",
            "minzoom": 0,
            "maxzoom": 22
        }],
}