/*
  Copyright: (c) 2022, Justin Béra (@just1not2) <me@just1not2.org>
  Mozilla Public License Version 2.0 (see LICENSE or https://www.mozilla.org/en-US/MPL/2.0/)
*/

import { BACK_ROOT_URL } from '../config';
import RegionInterface from './region.interface';

class RegionService {
  static async get(id: number): Promise<RegionInterface> {
    return fetch(`${BACK_ROOT_URL}/regions/${id}`)
      .then((res) => res.json());
  }
}

export default RegionService;
