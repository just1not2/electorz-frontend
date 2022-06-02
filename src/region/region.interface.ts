/*
  Copyright: (c) 2022, Justin Béra (@just1not2) <me@just1not2.org>
  Mozilla Public License Version 2.0 (see LICENSE or https://www.mozilla.org/en-US/MPL/2.0/)
*/

interface PointInterface {
  lat: number;
  lng: number;
}

interface PolygonInterface extends Array<PointInterface> {}

interface MultigonInterface extends Array<PolygonInterface> {}

interface RegionInterface {
  id: number;
  name: string;
  code: string;
  electors: number;
  shape: MultigonInterface;
}

export default RegionInterface;
