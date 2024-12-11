Score : $475$ points

        
            
                

## Problem Statement

                

You are given a sequence of integers $A = (A_1, A_2, \ldots, A_N)$ of length $N$.
                    Define $f(l, r)$ as:

                

- the number of distinct values in the subsequence $(A_l, A_{l+1}, \ldots, A_r)$.

                

Evaluate the following expression:

                
                    $\displaystyle \sum_{i=1}^{N}\sum_{j=i}^N f(i,j)$.
                
                

<br>

            
        

        
            
                

## Constraints

                

- $1\leq N\leq 2\times 10^5$
- $1\leq A_i\leq N$
- All input values are integers.

            
        

        
        
            
                
                    

## Input

                    

The input is given from Standard Input in the following format:

                    > $N$
> 
> $A_1$ $\ldots$ $A_N$
                
            

            
                
                    

## Output

                    

Print the answer.

                
            
        

        
        
            
                
                ```input1
3
1 2 2
```
            
        

        
            
                
                ```output1
8
```
                

Consider $f(1,2)$. The subsequence $(A_1, A_2) = (1,2)$ contains $2$
                    distinct values, so $f(1,2)=2$.

                

Consider $f(2,3)$. The subsequence $(A_2, A_3) = (2,2)$ contains $1$
                    distinct value, so $f(2,3)=1$.

                

The sum of $f$ is $8$.

            
        

        
        
            
                
                ```input2
9
5 4 2 2 3 2 4 4 1
```
            
        

        
            
                
                ```output2
111
```