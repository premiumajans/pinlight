export interface productItem {
    "id": number,
    "photo": string,
    "status": number,
    "name": string,
    "photos": productPhotos[]
    translations: productsTranslationItem[],
    created_at: string
}


interface productPhotos {
    "id": number,
    "product_id": number,
    "photo": string
}

export  interface categoryItem {
    "id": number,
    "slug": string,
    "name": string,
    "translations":categoryTranslationItem[]
}

interface  categoryTranslationItem {
    "id": number,
    "category_id": number,
    "locale": string,
    "name": string,
}
export interface categoryProducts {
    "id":number,
    "category_id": number,
    "photo": string,
    "catalog_pdf": null,
    "keywords": string,
    "alternative": string,
    "status": number,
    "name": string,
    "translations": categoryProductsTranslationsItem[]
}

export  interface  categoryProductsTranslationsItem   {
    "id": number,
    "product_id": number,
    "locale": string,
    "name": string,
    "description": string,
}

interface productsTranslationItem {
    "id": number,
    "product_id": number,
    "locale": string,
    "name": string,
    "description": string,
}


export interface sliderItem {
    "id": number,
    "photo": string,
    "alt": string,
    "status": number,
    "order": number,
    "title": string,
    "translations": sliderTranslateitem[]
}


interface sliderTranslateitem {
    "id": number,
    "slider_id": number,
    "locale": string,
    "title": string,
    "description": string
}


export interface settings {
    "id": number,
    "name": string,
    "link": string,
}


export interface partnerItem {
    "id": number,
    "photo": string,
    "link": string,
}