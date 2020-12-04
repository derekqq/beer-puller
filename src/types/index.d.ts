interface IVolume {
  unit: string;
  value: number;
}

interface IBeerItem {
  abv: number;
  attenuation_level: number;
  boil_volume: IVolume;
  brewers_tips: string;
  contributed_by: string;
  description: string;
  ebc: number;
  first_brewed: string;
  food_pairing: unknown;
  length: number;
  ibu: number;
  id: number;
  image_url: string;
  ingredients: unknown;
  name: string;
  ph: number;
  srm: number;
  tagline: string;
  target_fg: number;
  target_og: number;
  volume: IVolume;
  unit: string;
  value: number;
}

interface IBeerArray {
  beers: IBeerItem[];
  isPulled: boolean;
}

interface IState<T> {
  [key: string]: T;
}

export { IState, IBeerArray, IBeerItem };
