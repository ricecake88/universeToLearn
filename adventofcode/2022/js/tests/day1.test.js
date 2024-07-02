"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const day1 = __importStar(require("../day1"));
test('Most number of calories carried should be 24000', () => {
    let calories = [];
    const input = [
        '1000',
        '2000',
        '3000',
        '',
        '4000',
        '',
        '5000',
        '6000',
        '',
        '7000',
        '8000',
        '9000',
        '',
        '10000',
    ];
    let calorieList = day1.transformDataToCalorieList(input);
    expect(day1.elfMostCalories(calorieList)).toBe(24000);
});
test('Top 3 Carries 45000 calories', () => {
    let calories = [];
    const input = [
        '1000',
        '2000',
        '3000',
        '',
        '4000',
        '',
        '5000',
        '6000',
        '',
        '7000',
        '8000',
        '9000',
        '',
        '10000',
    ];
    let calorieList = day1.transformDataToCalorieList(input);
    expect(day1.getTopThreeSum(calorieList)).toBe(41000);
});
