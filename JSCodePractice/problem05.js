// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

function birthdayCakeCandles(candles){
    let num = 0;
    const max = Math.max(...candles)
    candles.forEach(
        value =>{
            if (value === max) num++;
        }
    )
    return num;
}