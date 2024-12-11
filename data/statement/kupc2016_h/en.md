Score : $200$ points

    
        

## Problem Statement

        

            Kyoto University decided to build a straight wall on the west side of the university to protect against gorillas that attack the university from the west every night.
            Since it is difficult to protect the university at some points along the wall where gorillas attack violently, reinforcement materials are also built at those points.
            Although the number of the materials is limited, the state-of-the-art technology can make a prediction about the points where gorillas will attack next and the number of gorillas that will attack at each point.
            The materials are moved along the wall everyday according to the prediction.
            You, a smart student majoring in computer science, are called to find the way to move the materials more efficiently.
        

        

            Theare are $N$ points where reinforcement materials can be build along the straight wall. They are numbered $1$ through $N$.
            Because of the protection against the last attack of gorillas, $A_i$ materials are build at point $i$ ($1 \leq i \leq N$).
            For the next attack, the materials need to be rearranged such that at least $B_i$ materials are built at point $i$ ($1 \leq i \leq N$).
            It costs $|i - j|$ to move $1$ material from point $i$ to point $j$.
            Find the minimum total cost required to satisfy the condition by moving materials.
            You do not need to consider the attack after the next.
        

    

    
        

## Constraints

        

- $1 \leq N \leq 10^5$
- $A_i \geq 1$
- $B_i \geq 1$
- $A_1 + A_2 + ... + A_N \leq 10^{12}$
- $B_1 + B_2 + ... + B_N \leq A_1 + A_2 + ... + A_N$
- There is at least one way to satisfy the condition.

    

    

    
        
            

## Input

            

The input is given from Standard Input in the following format: 

> $N$
> 
> $A_1$ $A_2$ ... $A_N$
> 
> $B_1$ $B_2$ ... $B_N$
        
        
            

## Output

            

Print the minimum total cost required to satisfy the condition. 

            

## Partial Scores

            

                $30$ points will be awarded for passing the test set satisfying the following:
                

- $N \leq 100$
- $A_1 + A_2 + ... + A_N \leq 400$

            

            

                Another $30$ points will be awarded for passing the test set satisfying the following:
                

- $N \leq 10^3$

            

            

                Another $140$ points will be awarded for passing the test set without addtional constraints and you can get $200$ points in total.
            

        
    

    

    
        
```input1
2
1 5
3 1
```

        
        ```output1
2
```
        

It costs least to move $2$ materials from point $2$ to point $1$. 

    

    
        
```input2
5
1 2 3 4 5
3 3 1 1 1
```

        
        ```output2
6
```
    

    
        
```input3
27
46 3 4 2 10 2 5 2 6 7 20 13 9 49 3 8 4 3 19 9 3 5 4 13 9 5 7
10 2 5 6 2 6 3 2 2 5 3 11 13 2 2 7 7 3 9 5 13 4 17 2 2 2 4
```

        
        ```output3
48
```
        

The input of this test case satisfies both the first and second additional constraints. 

    

    
        
```input4
18
3878348 423911 8031742 1035156 24256 10344593 19379 3867285 4481365 1475384 1959412 1383457 164869 4633165 6674637 9732852 10459147 2810788
1236501 770807 4003004 131688 1965412 266841 3980782 565060 816313 192940 541896 250801 217586 3806049 1220252 1161079 31168 2008961
```

        
        ```output4
6302172
```
        

The input of this test case satisfies the second additional constraint. 

    

    
        
```input5
2
1 99999999999
1234567891 1
```

        
        ```output5
1234567890
```
        

The input and output values may exceed the range of 32-bit integer.