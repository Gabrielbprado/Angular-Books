import { ILinkImage } from "./ILinkImage";

export interface IVolumeInfo {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    pageCount: number;
    printType: string;
    mainCategory: string;
    categories: string[];
    averageRating: number;
    ratingsCount: number;
    contentVersion: string;
    imageLinks: ILinkImage;
    language: string;
    infoLink: string;
    canonicalVolumeLink: string;
}
