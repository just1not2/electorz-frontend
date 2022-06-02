/*
  Copyright: (c) 2022, Justin Béra (@just1not2) <me@just1not2.org>
  Mozilla Public License Version 2.0 (see LICENSE or https://www.mozilla.org/en-US/MPL/2.0/)
*/

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { CRS } from 'leaflet';
import './Map.css';
import MapInterface from './map.interface';
import MapProps from './map.props';
import MapService from './map.service';
import Region from '../region/Region';

function Map(props: MapProps) {
  const { id: mapId } = props;
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState('');
  const [initialZoom, setInitialZoom] = useState(0);
  const [maxZoom, setMaxZoom] = useState(0);
  const [minZoom, setMinZoom] = useState(0);
  const [regions, setRegions] = useState([] as Array<number>);

  useEffect(() => {
    MapService.get(mapId)
      .then((map: MapInterface) => {
        setTitle(map.title);
        setInitialZoom(map.initialZoom);
        setMaxZoom(map.maxZoom);
        setMinZoom(map.minZoom);
        setRegions(map.regions);

        // All map information are loaded
        setLoading(false);
      });
  }, [mapId]);

  return loading ? <div>Loading...</div> : (
    <MapContainer
      className="Map"
      center={[40, -100]}
      zoom={initialZoom}
      crs={CRS.Simple}
      maxZoom={maxZoom}
      minZoom={minZoom}
      doubleClickZoom={false}
      scrollWheelZoom={false}
      attributionControl={false}
    >
      <TileLayer
        url={MapService.getTile()}
      />
      <div hidden>{title}</div>
      {regions.map((stateId) => (
        <Region
          key={stateId}
          id={stateId}
        />
      ))}
    </MapContainer>
  );
}

export default Map;
