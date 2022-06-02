/*
  Copyright: (c) 2022, Justin Béra (@just1not2) <me@just1not2.org>
  Mozilla Public License Version 2.0 (see LICENSE or https://www.mozilla.org/en-US/MPL/2.0/)
*/

import { BACK_ROOT_URL, FRONT_ROOT_URL } from '../config';
import MapInterface from './map.interface';

class MapService {
  static async get(id: number): Promise<MapInterface> {
    return fetch(`${BACK_ROOT_URL}/maps/${id}`)
      .then((res) => res.json());
  }

  static getTile(): string {
    return `${FRONT_ROOT_URL}/tile.png`;
  }
}

export default MapService;
