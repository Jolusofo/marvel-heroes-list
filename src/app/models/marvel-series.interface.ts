export interface MarvelSeries {
  available: number;
  collectionURI: string;
  items: MarvelSeriesItem[];
  returned: number;
}

export interface MarvelSeriesItem {
  resourceURI: string;
  name: string;
}
