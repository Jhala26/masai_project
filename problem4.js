let i=1;
let tot_no = 0;
let sum =0;

while(i <= 100){
  if((i % 2) == 0){
    sum += i;
    tot_no++;
  }
  i++;
}
console.log("sum of total even numbers from 1-100 are :",sum);
console.log("Total even numbers from 1-100 are :",tot_no);
console.log("Average of even numbers from 1-100 are :",sum/tot_no);