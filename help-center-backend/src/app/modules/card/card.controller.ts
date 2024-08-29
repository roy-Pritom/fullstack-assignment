import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CardServices } from "./card.service";
import httpStatus from "http-status";

// create card
const createCard=catchAsync(async(req,res)=>{
  const result=await CardServices.createCardInToDb(req.body);
  sendResponse(res,{
    statusCode:httpStatus.CREATED,
    success:true,
    message:"Card created successfully",
    data:result
  })
})

// get all card
const getAllCard=catchAsync(async(req,res)=>{
  const result=await CardServices.getCardFromDb(req.query);
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"Cards retrieved successfully",
    meta:result.meta,
    data:result.result
  })
})

// get specific card by title
const getCardByTitle=catchAsync(async(req,res)=>{
    const {title}=req.params;
  const result=await CardServices.getCardByTitleFromDb(title);
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"Card retrieved successfully",
    data:result
  })
})


export const CardControllers={
    createCard,
    getAllCard,
    getCardByTitle

}