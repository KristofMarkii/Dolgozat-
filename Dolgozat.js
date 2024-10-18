// 1 feladat 

function threeRuls() {
    let result = [];
    let skipCount = 0;

    for (let i = 1; i <= 50; i++) {

        if (i % 3 === 0) 
        {
            skipCount++;
         
            if (skipCount === 3) 
            {
                skipCount = 0;
                continue; 
            }
   
        result.push(i);
        }
    }

    return result;
}
console.log(threeRuls());

//2 feladat 
function isLeapYear() {
    let year = 2024;
   
    if (year % 4 === 0) {
   
        if (year % 100 === 0) {
            
            if (year % 400 === 0)
            {
          
                return true;
            } 
            else 
            {
               
                return false;
            }
        } 
        else 
        {
    
            return true;
        }
    }   
        else 
        {

       
        return false;
        }
}
console.log(isLeapYear());
// 3 feladat 
function digitsAverage(number) {

    const digitsString = number.toString();
    let sum = 0;
    for (let i = 0; i < digitsString.length; i++) {

        sum += parseInt(digitsString[i], 10);
    }

    const average = sum / digitsString.length;

    return average;
}
console.log(digitsAverage(289)); 
// 4 feladat 
function gradeCalculator(){
     let score = 69
     let  maximum = 100 
    if (maximum <=0){
        return false 

    }
    let szazalek =  (score / maximum)*100;
    if  ( szazalek >=90){
        return 'A';
    }
    else if (szazalek>=80)
    {
        return 'B'
    }
    else if (szazalek>=70)
    {
        return 'C'
    }
    else if (szazalek >=60)
    {
        return 'D'
    }
    else if (szazalek >=50)
    {
        return 'E'
    }
    else {
        return 'F'
    }
}

console.log(gradeCalculator())