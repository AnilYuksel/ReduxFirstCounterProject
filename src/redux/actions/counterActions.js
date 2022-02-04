import * as actionTypes from "./actionTypes"

export const increaseOneCounter=()=>({
    type:actionTypes.INCREASE_ONE,
    payload:1
})

export const decreaseOneCounter=()=>({
    type:actionTypes.DECREASE_ONE,
    payload:1
})

export const increaseTwoCounter=()=>({
    type:actionTypes.INCREASE_TWO,
    payload:2
})