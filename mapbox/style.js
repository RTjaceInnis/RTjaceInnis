
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
        "bathymetry_1": {
            "type": "image",
            "url": "./data/bathymetry_1.png",
            "coordinates": [
                [-0.000675, 0.000356],
                [-0.000613, 0.000356],
                [-0.000613, 0.000378],
                [-0.000675, 0.000378]
            ]
        },
        "SMAST_ScallopsAveragePresenceAbundance_2": {
            "type": "geojson",
            "data": json_SMAST_ScallopsAveragePresenceAbundance_2
        }
                    },
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
            "id": "lyr_bathymetry_1_1",
            "type": "raster",
            "source": "bathymetry_1",
            "minzoom": 0,
            "maxzoom": 22
        },
        {
            "id": "lyr_SMAST_ScallopsAveragePresenceAbundance_2_0",
            "type": "fill",
            "source": "SMAST_ScallopsAveragePresenceAbundance_2",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#e77148'}
        }
],
}