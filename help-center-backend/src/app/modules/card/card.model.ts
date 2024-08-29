import { model, Schema } from "mongoose";
import { v4 as uuidv4 } from 'uuid';
import { CardModel, TCard } from "./card.interface";

const cardSchema = new Schema<TCard,CardModel>({
    id: {
        type: String,
        default:uuidv4,
        unique: true,
    },
    title: {
        type: String,
        required: true,
        unique:true
    },
    description: {
        type: String,
        required: true
    }
},{
    timestamps:true
});

// static method
cardSchema.statics.isCardExistByTitle=async function(title){
  return await Card.findOne({title});
}

export const Card=model<TCard,CardModel>('Card',cardSchema);