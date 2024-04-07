import { IBookItem } from './IBookItems'; // Import the 'Item' type

export interface IResultBook {
    items: IBookItem[];
    totalItems: number;
}
