Score: $1000$ points

## Problem Statement

In the AtCoder World Tour Finals 2800, $N$ contestants participated, and a total of five problems were presented. Each problem is assigned an integer score of at least $1$ point, and the problems are numbered so that the scores are **non-decreasing** from problem $1$ to problem $5$. There are no partial points. Similar to the usual AtCoder rules, ranking is done as follows. **In this problem, we do not consider the situation where multiple contestants have the same total score and penalty.**

RankingThe contestant with the higher total score ranks higher. In case of a tie, the one with the smaller penalty ranks higher.

Now, Aoki, a reporter covering the finals, noted the following information:

1. The number of participants $N$.
2. Which problems each contestant solved. $A_{i,j}=1$ means the $i$-th contestant $(1 \leq i \leq N)$ correctly solved problem $j$, and $A_{i,j}=0$ means they did not.
3. The rank of each contestant. The $i$-th contestant $(1 \leq i \leq N)$ was ranked $R_i$-th.

However, when he started writing the article, he realized he did not note the scores and penalties. Furthermore, he realized there might be inconsistencies in the information he noted. Now, solve the following problem.

Assume that he correctly noted information 1 and 2.
Let $D_i$ be the actual rank of contestant $i$ $(1 \leq i \leq N)$, and find the minimum possible total squared error $(D_1 - R_1)^2 + (D_2 - R_2)^2 + \dots + (D_N - R_N)^2$.

You have $T$ test cases to process.

## Constraints

- $1 \leq T \leq 10^5$
- $2 \leq N \leq 3 \times 10^5$
- Each of $A_{i,1}, A_{i,2}, A_{i,3}, A_{i,4}, A_{i,5}$ is $0$ or $1$ $(1 \leq i \leq N)$.
- The sum of $A_{i,1}, A_{i,2}, A_{i,3}, A_{i,4}, A_{i,5}$ is at least $1$ $(1 \leq i \leq N)$.
- $1 \leq R_i \leq N$ $(1 \leq i \leq N)$
- $R_1, R_2, \dots, R_N$ are distinct.
- <span style="color:red">The total value of $N$ across all test cases is at most $3 \times 10^5$.</span>
- All input values are integers.

## Input

The input is given from Standard Input in the following format. Here $\mathrm{case}_i$ represents the $i$-th test case $(1 \leq i \leq T)$.

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each test case is given in the following format:

> $N$
> 
> $A_{1,1}$ $A_{1,2}$ $A_{1,3}$ $A_{1,4}$ $A_{1,5}$
> 
> $A_{2,1}$ $A_{2,2}$ $A_{2,3}$ $A_{2,4}$ $A_{2,5}$
> 
> $\vdots$
> 
> $A_{N,1}$ $A_{N,2}$ $A_{N,3}$ $A_{N,4}$ $A_{N,5}$
> 
> $R_1$ $R_2$ $\cdots$ $R_N$

## Output

Print the answers.

```input1
6
4
0 1 1 0 0
1 0 0 1 0
1 1 0 1 0
1 0 1 0 0
1 2 3 4
8
0 1 0 0 0
1 1 0 1 0
0 1 1 0 1
1 0 0 0 0
1 1 0 1 0
0 1 0 0 0
0 0 0 1 0
0 1 1 1 1
7 4 2 8 3 6 5 1
6
1 1 0 0 0
0 0 1 0 0
1 1 1 0 0
0 0 0 1 0
1 1 1 1 0
0 0 0 0 1
1 2 3 4 5 6
6
1 1 0 0 0
0 0 1 0 0
1 1 1 0 0
0 0 0 1 0
1 1 1 1 0
0 0 0 0 1
6 5 4 3 2 1
20
0 0 0 0 1
0 0 1 0 0
1 1 0 0 1
1 0 1 0 1
0 0 0 1 1
0 0 1 1 1
1 1 1 1 0
1 1 0 1 0
0 0 1 1 0
1 0 1 0 0
0 1 0 0 1
0 1 1 1 1
1 1 1 1 1
0 1 0 1 0
1 0 0 0 1
1 1 1 0 0
0 1 1 1 0
0 0 0 1 0
1 1 1 0 1
1 1 0 1 1
7 18 3 5 19 11 13 2 4 10 14 15 17 6 16 9 8 12 1 20
15
0 0 1 1 0
0 0 0 1 0
0 0 0 0 1
0 0 1 1 1
1 1 0 0 1
0 1 1 1 0
1 1 1 1 1
0 1 1 0 1
1 1 0 1 0
1 0 0 1 1
1 0 1 0 0
1 1 0 1 1
0 1 0 1 0
1 1 0 0 0
0 1 0 0 1
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
```

```output1
6
0
26
0
1054
428
```

This input contains six test cases. Let us explain the first one.

Consider the following scenario.

- Problems $1$, $2$, $3$, $4$, $5$ have $100$, $500$, $800$, $900$, $1300$ points, respectively.
- Contestants $1$, $2$, $3$, $4$ have penalties of $90$, $80$, $70$, $60$ minutes, respectively.

Then, the ranking will be as shown in the table below, where the total squared error is $(2-1)^2 + (3-2)^2 + (1-3)^2 + (4-4)^2 = 6$. There is no way to make the total squared error $5$ or less, so the answer is $6$.

    
        
            
                
                    Contestant
                    Problem 1
                    Problem 2
                    Problem 3
                    Problem 4
                    Problem 5
                    Total score
                    Penalty
                    Rank
                
            
            
                
                    **Contestant 1**
                    -
                    500
                    800
                    -
                    -
                    1300
                    90 minutes
                    2nd
                
                
                    **Contestant 2**
                    100
                    -
                    -
                    900
                    -
                    1000
                    80 minutes
                    3rd
                
                
                    **Contestant 3**
                    100
                    500
                    -
                    900
                    -
                    1500
                    70 minutes
                    1st
                
                
                    **Contestant 4**
                    100
                    -
                    800
                    -
                    -
                    900
                    60 minutes
                    4th
                
            
        
    

Now, let us explain the second test case.

Consider the following scenario.

- Problems $1$, $2$, $3$, $4$, $5$ have $1000$, $1400$, $2000$, $2000$, $2718$ points, respectively.
- Contestants $1$, $2$, $\dots$, $8$ have penalties of $295$, $286$, $242$, $236$, $277$, $288$, $187$, $299$ minutes, respectively.

Then, the ranking will be as shown in the table below. For every $i$ $(1 \leq i \leq N)$, the rank of contestant $i$ is $R_i$, so the total squared error is $0$.

    
        
            
                
                    Contestant
                    Problem 1
                    Problem 2
                    Problem 3
                    Problem 4
                    Problem 5
                    Total score
                    Penalty
                    Rank
                
            
            
                
                    **Contestant 1**
                    -
                    1400
                    -
                    -
                    -
                    1400
                    295 minutes
                    7th
                
                
                    **Contestant 2**
                    1000
                    1400
                    -
                    2000
                    -
                    4400
                    286 minutes
                    4th
                
                
                    **Contestant 3**
                    -
                    1400
                    2000
                    -
                    2718
                    6118
                    242 minutes
                    2nd
                
                
                    **Contestant 4**
                    1000
                    -
                    -
                    -
                    -
                    1000
                    236 minutes
                    8th
                
                
                    **Contestant 5**
                    1000
                    1400
                    -
                    2000
                    -
                    4400
                    277 minutes
                    3rd
                
                
                    **Contestant 6**
                    -
                    1400
                    -
                    -
                    -
                    1400
                    288 minutes
                    6th
                
                
                    **Contestant 7**
                    -
                    -
                    -
                    2000
                    -
                    2000
                    187 minutes
                    5th
                
                
                    **Contestant 8**
                    -
                    1400
                    2000
                    2000
                    2718
                    8118
                    299 minutes
                    1st
                
            
        
    

<br>