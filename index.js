///////////////////////////////////////
//PROBLEM NO: 01
//This function will be applied to any number multiplied by 3, then added by 10, then divided by 2, then subtracted by 5.
//////////////////////////////////////

function mindGame(number){
    if(typeof number !== 'number'){
        return 'Please input a valid number'
    };
    const multiResult = number * 3;
    const SumResult = multiResult + 10;
    const devResult = SumResult / 2;
    const subResult = devResult - 5;
    return subResult;
}

// console.log(mindGame(true));



//////////////////////////////////////
// problem NO: 02 
//The function will be used to express the result as 'even' or 'odd' based on the total number of characters in a String.
/////////////////////////////////////

function evenOdd(name){
    if(typeof name !== 'string'){
        return 'Please input anything as a string like letter or word'
    }
if(name.length % 2 == 0){
    return 'even';
}
else{
    return 'odd';
}
}

// console.log(evenOdd(50))



/////////////////////////////////////
// problem NO: 03
//This function is written by subtracting 7 from a number, if the subtraction is less than 7, then that subtraction is given as the result. Otherwise double the input number as the result.
/////////////////////////////////////

function isLGSeven(number){
    if(typeof number !== 'number'){
        return 'This is not a number, please input a valid number'
    };
const sub = number - 7;

if(sub < 7){
    return sub;
}
else{
    return number * 2;
}
}

// console.log(isLGSeven('56'));



/////////////////////////////////////
// problem NO: 04
//This function takes the age of some people as input as an array and returns the number of people whose age is less than 0.
////////////////////////////////////

function findingBadData(ages){
    if(Array.isArray(ages) == false){
        return 'It should be an array like as [ 1,2,5 ]'
    }
    let count = 0;
    for(let i = 0; i < ages.length; i++){
        const element = ages[i];
        if(element < 0){
            count ++;
        }
    }
    return count;
}

// console.log(findingBadData( {math:-1, english:-2, bangla:5} ));



/////////////////////////////////////
// problem NO: 04
//3 numbers are taken as input in this function and they are multiplied by 21,32,43 respectively and if their total sum is equal to or more than 2000 then 2000 is subtracted from that sum and given as result. Otherwise the total is given as the result
/////////////////////////////////////

function gemsToDiamond(gemsF1, gemsF2, gemsF3){
if(typeof gemsF1 !== 'number' || typeof gemsF2 !== 'number' || typeof gemsF3 !== 'number'){
    return 'You sould input three value as like as number (an example: 1, 2, 3)'
}
    const multiF1Gems = gemsF1 * 21;
    const multiF2Gems = gemsF2 * 32;
    const multiF3gems = gemsF3 * 43;
    const totalGemsSum = multiF1Gems + multiF2Gems + multiF3gems;
    if(totalGemsSum >= 2000){
        return totalGemsSum - 2000;
    }
    else{
        return totalGemsSum;
    }
}

console.log(gemsToDiamond(false, 5, 1));