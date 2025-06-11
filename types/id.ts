import images from "@/constant/images";

export type ImageKeys = keyof typeof images;

export type CarData = {
    id:number,
    name:string,
    year:number | null,
    box:string,
    image:ImageKeys
}