import express from 'express';
import { CardControllers } from './card.controller';
import { validateRequest } from '../../middleWares/validateRequest';
import { CardValidationSchemas } from './card.validation';

const router=express.Router();

// create card
router.post('/cards',validateRequest(CardValidationSchemas.createCardValidationSchema),CardControllers.createCard);

// get all card
router.get('/cards',CardControllers.getAllCard);

// get all card
router.get('/cards/:title',CardControllers.getCardByTitle);

export const CardRoutes=router;