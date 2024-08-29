"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardRoutes = void 0;
const express_1 = __importDefault(require("express"));
const card_controller_1 = require("./card.controller");
const validateRequest_1 = require("../../middleWares/validateRequest");
const card_validation_1 = require("./card.validation");
const router = express_1.default.Router();
// create card
router.post('/cards', (0, validateRequest_1.validateRequest)(card_validation_1.CardValidationSchemas.createCardValidationSchema), card_controller_1.CardControllers.createCard);
// get all card
router.get('/cards', card_controller_1.CardControllers.getAllCard);
// get all card
router.get('/cards/:title', card_controller_1.CardControllers.getCardByTitle);
exports.CardRoutes = router;
