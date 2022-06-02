/*
  Copyright: (c) 2022, Justin Béra (@just1not2) <me@just1not2.org>
  Mozilla Public License Version 2.0 (see LICENSE or https://www.mozilla.org/en-US/MPL/2.0/)
*/

import React, { useEffect, useState } from 'react';
import { Polygon } from 'react-leaflet';
import RegionInterface from './region.interface';
import RegionProps from './region.props';
import RegionService from './region.service';

function Region(props: RegionProps) {
  const { id: regionId } = props;
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [electors, setElectors] = useState(0);
  const [shape, setShape] = useState([] as RegionInterface['shape']);

  useEffect(() => {
    RegionService.get(regionId)
      .then((region: RegionInterface) => {
        setName(region.name);
        setCode(region.code);
        setElectors(region.electors);
        setShape(region.shape);

        // All region information are loaded
        setLoading(false);
      });
  }, [regionId]);

  return loading ? <div>Loading...</div> : (
    <>
      <div hidden>{name}</div>
      <div hidden>{code}</div>
      <div hidden>{electors}</div>
      <Polygon
        positions={shape}
        weight={1}
        fillOpacity={0.8}
      />
    </>
  );
}

export default Region;
