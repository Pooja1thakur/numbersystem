# javascript code for prime, even and odd number 
this repository conatins javascript code that includes:
- find prime numbers in an array.
- find even and odd numbers in an array.
- calculate the sum of all prime numbers in an array.
 ## code for finding prime nymbers 


## Descripton


This function checkswhether a numbers is prime and then filters out prime numbers from an array we alse find the sum of all prime numbers in the array.


 ## prime checking function 
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

 ## find maximum and minimum prime numbers on an array.
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



