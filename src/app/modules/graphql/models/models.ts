import { Book } from 'Core/models/models';

export enum FullListTypes {
  combinedNonFictionList = 'combinedNonFictionList',
  combinedFictionList = 'combinedFictionList'
}

export type FullListResponse = {
  [type in FullListTypes]: {
    results : {
      books: Book[];
    }
  }
}
