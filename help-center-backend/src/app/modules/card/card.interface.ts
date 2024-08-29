import { Model } from "mongoose";

export type TCard = {
    id: string;
    title: string;
    description: string
}

export interface CardModel extends Model<TCard>{
    isCardExistByTitle(title:string):Promise<TCard>
};