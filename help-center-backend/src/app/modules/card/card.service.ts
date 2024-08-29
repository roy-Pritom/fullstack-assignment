import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TCard } from "./card.interface"
import { Card } from "./card.model"
import QueryBuilder from "../../builder/QueryBuilder";
import { CardSearchAbleFiled } from "./card.constant";

// create card
const createCardInToDb = async (payload: TCard) => {
    const result = await Card.create(payload);
    return result;
}

// get all cards
const getCardFromDb = async (params:Record<string,unknown>) => {
    const cardQuery=new QueryBuilder(
        Card.find(),
        params
    ).search(CardSearchAbleFiled).paginate().fields();

    const result = await cardQuery.modelQuery;
    const meta=await cardQuery.countTotal();
    return {
        result,
        meta
    };
}

// get specific card by title
const getCardByTitleFromDb = async (title: string) => {
    // check card exist or not
    if (!await Card.isCardExistByTitle(title)) {
        throw new AppError(httpStatus.NOT_FOUND, "Card not exist!")
    }
    const result = await Card.findOne({ title });
    return result;
}

export const CardServices = {
    createCardInToDb,
    getCardFromDb,
    getCardByTitleFromDb,



}