export interface MarvelEventosResponse {
  offset: number;
  limit: number;
  total: number;
  count: number;
  data:MarvelData;

}
export interface MarvelData {
  results: MarvelEvent[]
  total: number;
  count: number;
  limit: number;
  offset: number;
}


export interface MarvelEvent {
  id: number;
  title: string;
  description: string | null;
  resourceURI: string;
  urls: MarvelEventUrl[];
  startYear: number;
  endYear: number;
  rating: string;
  type: string;
  modified: string;
  thumbnail: MarvelEventThumbnail;
  creators: MarvelEventCreators;
  characters: MarvelEventCharacters;
  stories: MarvelEventStories;
  comics: MarvelEventComics;
  events: MarvelEventEvents;
  next: MarvelEventNext | null;
  previous: MarvelEventPrevious | null;
}

export interface MarvelEventUrl {
  type: string;
  url: string;
}

export interface MarvelEventThumbnail {
  path: string;
  extension: string;
}

export interface MarvelEventCreators {
  available: number;
  collectionURI: string;
  items: MarvelEventCreator[];
  returned: number;
}

export interface MarvelEventCreator {
  resourceURI: string;
  name: string;
  role: string;
}

export interface MarvelEventCharacters {
  available: number;
  collectionURI: string;
  items: MarvelEventCharacter[];
  returned: number;
}

export interface MarvelEventCharacter {
  resourceURI: string;
  name: string;
}

export interface MarvelEventStories {
  available: number;
  collectionURI: string;
  items: MarvelEventStory[];
  returned: number;
}

export interface MarvelEventStory {
  resourceURI: string;
  name: string;
  type: string;
}

export interface MarvelEventComics {
  available: number;
  collectionURI: string;
  items: MarvelEventComic[];
  returned: number;
}

export interface MarvelEventComic {
  resourceURI: string;
  name: string;
}

export interface MarvelEventSeries {
  available: number;
  collectionURI: string;
  items: MarvelEventSerie[];
  returned: number;
}

export interface MarvelEventSerie {
  resourceURI: string;
  name: string;
}

export interface MarvelEventNext {
  resourceURI: string;
  name: string;
}

export interface MarvelEventPrevious {
  resourceURI: string;
  name: string;
}
export interface MarvelEventEvents {
  available: number;
  collectionURI: string;
  items: any[]; // Você pode adicionar uma interface apropriada se necessário
  returned: number;
}
