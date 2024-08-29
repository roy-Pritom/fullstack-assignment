"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTimePeriodAggregation = void 0;
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
const generateTimePeriodAggregation = (timePeriod, email) => {
    let groupId = {};
    let aggregationPipeline = [];
    if (email) {
        aggregationPipeline.push({
            $match: {
                buyerEmail: email
            }
        });
    }
    switch (timePeriod) {
        case 'day':
            groupId = { $dateToString: { format: '%Y-%m-%d', date: "$date" } };
            break;
        case 'week':
            groupId = {
                year: { $year: "$date" },
                week: { $week: "$date" }
            };
            break;
        case 'month':
            groupId = { $dateToString: { format: '%Y-%m', date: "$date" } };
            break;
        case 'year':
            groupId = { $year: "$date" };
            break;
        default:
            throw new Error("Invalid time period");
    }
    // Add the $group stage to the pipeline
    aggregationPipeline.push({
        $group: {
            _id: groupId,
            totalPurchase: { $sum: "$quantity" },
            purchaseCount: { $sum: 1 }
        }
    });
    if (timePeriod === 'week') {
        aggregationPipeline.push({
            $project: {
                _id: { $concat: [{ $toString: "$_id.year" }, " week ", { $toString: "$_id.week" }] },
                totalPurchase: 1,
                purchaseCount: 1
            }
        });
    }
    // Add a $sort stage to the pipeline for sorting by _id
    aggregationPipeline.push({ $sort: { '_id': 1 } });
    return aggregationPipeline;
};
exports.generateTimePeriodAggregation = generateTimePeriodAggregation;
