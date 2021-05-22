export interface Food {
    results?: Result[];
    offset?: number;
    number?: number;
    totalResults?: number;
}

export interface Result {
    id?: number;
    title?: string;
    image?: string;
    imageType?: ImageType;
    price?: number;
    rating?: number[];
}

export enum ImageType {
    Jpg = "jpg",
}
