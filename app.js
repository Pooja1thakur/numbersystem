const arr = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  
  function prime(num){
    if(num<=1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false
        }
        return true
    }
  }



  let arr1=[ 19, 23, 13, 31, 29,
    35, 11, 17,  5,  9,
    27]
let sum=0;
for(let i=0;i<arr1.length;i++){
if(prime(arr1[i])){
    sum=sum+arr1[i]
}
}
console.log(sum)

  //function findprime(arr){
    //return arr.filter(prime)
  //}
 // console.log(findprime([ 19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,]))
  
  






  let primeArray=arr1.filter(prime)


    let maxprime=primeArray[0];
    for(let i=1;i<primeArray.length;i++){
        if(primeArray[i]>maxprime){
            maxprime=primeArray[i]
        }
    }
  console.log(maxprime)

  let minprime=primeArray[0];
    for(let i=1;i<primeArray.length;i++){
        if(primeArray[i]<minprime){
            minprime=primeArray[i]
        }
    }
  console.log(minprime)