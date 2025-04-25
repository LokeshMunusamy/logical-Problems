// // Q1 & 2 maximum & Second largest number

// let arr = [20,50,90,90,12,3,70,90,80];
// let max=arr[0];
// let SecondMax = arr[0];

// for(let i=0;i<arr.length;i++){
// 	if(arr[i]>max){
// 		SecondMax = max;
// 		max = arr[i];
// 	}
// 	if(arr[i]>SecondMax && arr[i] !== max){
// 		SecondMax = arr[i];
// 	}
// }
// console.log(max);
// console.log(SecondMax);


// //Q3 reversed Elements

// let elements = [1,2,3,4,5,6,7,8,9,10];
// let reversedEle = []

// for(let i=elements.length-1;i>=0;i--){
// 	reversedEle[reversedEle.length]=elements[i];
// }

// console.log(reversedEle);


// Q4 Count the vowels

// let vowels = ["a","e","i","o","u"];

// function findVowelsCount(userInput){
// 	let vowelCount = 0;
// 	for(let i=0;i<userInput.length;i++){
// 		for(let j=0;j<vowels.length;j++){
// 			if(userInput[i]===vowels[j]){
// 				vowelCount++
// 			}
// 		}
// 		// console.log(userInput[i]);
// 	}
// 	// console.log(vowelCount);
// 	return vowelCount;
// }

// console.log(findVowelsCount('balaji'));


// // Q5 Remove duplicate and return the ascending order.

// let withoutDuplicate = [2,3,2,4,2,1,3,5,7,6,7];

// for(let i=0; i<withoutDuplicate.length; i++){
//     for(let j=i+1; j < withoutDuplicate.length; j++){
//         if(withoutDuplicate[i]==withoutDuplicate[j]){
//             for(let k=j+1; k<withoutDuplicate.length; k++){
//                 withoutDuplicate[j] = withoutDuplicate[k];
//             }
//            withoutDuplicate.length = withoutDuplicate.length-1
//         }
//     }
// }

// for(let i = 0; i < withoutDuplicate.length; i++){
//     for(let j = i+1; j < withoutDuplicate.length; j++){
//         if(withoutDuplicate[j]<withoutDuplicate[i]){
//             let temp=withoutDuplicate[i];
//             withoutDuplicate[i]=withoutDuplicate[j];
//             withoutDuplicate[j]=temp;
//         }
//     }
// } 
// console.log(withoutDuplicate);


// // Q6 Find the Missing number

// let missingNumber = [1,12,10];
// let fullNumber = [];

// let maximum = missingNumber[0];

// for(let i=0; i<missingNumber.length;i++){
// 	if(missingNumber[i]>maximum){
// 		maximum = missingNumber[i];
// 	}
// }

// for(let i = 1; i <= maximum; i++){
//     let flag = true;
//     for(let j=0; j < missingNumber.length; j++){
//         if(missingNumber[j]==i){
//             flag = false;
//             break;
//         }
//     }
//     if(flag){
//         fullNumber[fullNumber.length] = i;
//     }
// }

// console.log(fullNumber);


// Q7: Find the after dot count the number

// let decimalValue = 308.945;
// let value=""+decimalValue;
// let count = 0;
// for(let i=0; i<value.length; i++){
//     if(value[i]=='.'){
//         for(let j=i+1; j<value.length; j++){         
//             count++;
//         }
//         break;
//     }
// }
// console.log(count);


// // Q8: Find the maximum repeated number and show it that number.

// let maxElement = [2,2,5,1,4,2,1,0,2];
// let count = 0;
// let countElement;
// for(let i=0; i < maxElement.length; i++){
//     let inneCount = 0;
//     for(let j=0; j<maxElement.length;j++){
//         if(maxElement[i] == maxElement[j]){
//             inneCount++;
//         }
//     }
//     if(inneCount>count){
//         count = inneCount;
//         countElement = maxElement[i];
//     }
// }

// console.log(count,countElement);


// //Q9 Search the string.

// let stringValues = ['test','organization','abc'];

// function search(value){
// 	for(let i=0;i<stringValues.length;i++){
// 		if(value==stringValues[i]){
// 			return 1;
// 		}
// 	}
// 	return -1;
// }

// console.log(search('test'));



//Q10 count the characters in given string

// let str = "engineering";
// let countStr = {};

// for(let i=0; i<str.length; i++){
//     let count = 0;
//     for(let j=0; j<str.length; j++){
//         if(str[i]==str[j]){
//             count++;
//         }
//     }
//     countStr[str[i]]=count;
// }

// console.log(countStr);
