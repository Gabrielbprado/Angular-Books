import { ILinkImage } from "./ILinkImage";

export interface IBook {
    title?: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    previewLink?: string;
    thumbnail?: ILinkImage;
}