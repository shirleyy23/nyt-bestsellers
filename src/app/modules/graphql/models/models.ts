import { Book } from 'Core/models/frontend/frontend-models';

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
