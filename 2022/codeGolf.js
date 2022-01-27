/**
 * Warmup
 * OBJECTIVE: Print the first 50 even whole numbers.
 */
for(let i=0;i<100;i+=2)console.log(i) 

/**
 * Problem 1
 * OBJECTIVE: Print the first 30 terms of a Fibonacci sequence starting with 0 and 1.
 */
let a=[0,1];console.log(0);console.log(1);for(let i=2;i<28;i++){a[i]=a[i-1]+a[i-2];console.log(a[i])}

/**
 * Problem 2
 * OBJECTIVE: Print whether the input (i) is a power of 2 or not.
 */
let i=8;let k;for(let j=0;j<i;j++)Math.pow(2,j)==i?k=1:0;console.log(k==1)
