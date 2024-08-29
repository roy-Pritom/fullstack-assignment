"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const card_model_1 = require("./card.model");
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const card_constant_1 = require("./card.constant");
// create card
const createCardInToDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield card_model_1.Card.create(payload);
    return result;
});
// get all cards
const getCardFromDb = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const cardQuery = new QueryBuilder_1.default(card_model_1.Card.find(), params).search(card_constant_1.CardSearchAbleFiled).paginate().fields();
    const result = yield cardQuery.modelQuery;
    const meta = yield cardQuery.countTotal();
    return {
        result,
        meta
    };
});
// get specific card by title
const getCardByTitleFromDb = (title) => __awaiter(void 0, void 0, void 0, function* () {
    // check card exist or not
    if (!(yield card_model_1.Card.isCardExistByTitle(title))) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Card not exist!");
    }
    const result = yield card_model_1.Card.findOne({ title });
    return result;
});
exports.CardServices = {
    createCardInToDb,
    getCardFromDb,
    getCardByTitleFromDb,
};
