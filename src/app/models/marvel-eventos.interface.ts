export interface MarvelEvent {
  available: number;
  collectionURI: string;
  items: MarvelEventItem[];
}

export interface MarvelEventItem {
  name: string;
  resourceURI: string;
}
