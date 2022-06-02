/*
  Copyright: (c) 2022, Justin Béra (@just1not2) <me@just1not2.org>
  Mozilla Public License Version 2.0 (see LICENSE or https://www.mozilla.org/en-US/MPL/2.0/)
*/

export interface MapInterface {
  id: number;
  title: string;
  initialZoom: number;
  maxZoom: number;
  minZoom: number;
  regions: Array<number>;
}

export default MapInterface;
