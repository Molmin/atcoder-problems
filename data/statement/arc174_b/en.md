Score: $300$ points

## Problem Statement

Solve the following problem for $T$ test cases.

On the gourmet review site EatCocoder, you can review restaurants with an integer number of stars from $1$ to $5$.<br>
Initially, the restaurant managed by Chef B has $A_i$ reviews with $i$ stars. $(1 \le i \le 5)$<br>
The chef can pay a bribe of $P_i$ yen to the EatCocoder administration to have one additional $i$-star review. $(1 \le i \le 5)$

After adding a total of $k$ reviews by bribery, there will be $A_1+A_2+A_3+A_4+A_5+k$ reviews in total.<br>
Chef B wants the average rating of these reviews to be at least $3$ stars. Determine the minimum total amount of bribery required to achieve this.

## Constraints

- All input values are integers.
- $1 \le T \le 10^4$
- $0 \le A_i \le 10^8$
- $1 \le A_1+A_2+A_3+A_4+A_5$
- $1 \le P_i \le 10^8$

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\rm{Case}_1$
> 
> $\rm{Case}_2$
> 
> $\vdots$
> 
> $\rm{Case}$$_T$

Here, $\rm{Case}$$_i$ represents the $i$-th test case.<br>
Each test case is given in the following format:

> $A_1$ $A_2$ $A_3$ $A_4$ $A_5$
> 
> $P_1$ $P_2$ $P_3$ $P_4$ $P_5$

## Output

Print $T$ lines in total.<br>
The $i$-th line should contain the answer to the $i$-th test case as an integer.

```input1
6
1 0 1 0 0
1 2 3 4 5
0 2 2 0 0
1 1 1 1 5
0 1 2 0 0
1 1 1 5 3
1 1 1 0 0
1 1 1 1 1
0 0 0 0 1
1 1 1 1 1
100000000 100000000 100000000 0 0
100000000 100000000 100000000 100000000 100000000
```

```output1
5
2
3
2
0
15000000000000000
```

This input contains six test cases.

- For the first test case, you can, for example, do the following to have an average rating of at least $3$ stars with a bribe of $5$ yen, which is the minimum possible amount.-   - Initially, there are $1,0,1,0,0$ reviews with $1,2,3,4,5$ stars, respectively.
-   - Pay a bribe of $P_5 = 5$ yen to add one $5$-star review.
-   - As a result, there are $1,0,1,0,1$ reviews with $1,2,3,4,5$ stars, respectively, averaging $3$ stars.
- For the second test case, you can, for example, do the following to have an average rating of at least $3$ stars with a bribe of $2$ yen, which is the minimum possible amount.-   - Initially, there are $0,2,2,0,0$ reviews with $1,2,3,4,5$ stars, respectively.
-   - Pay a bribe of $P_4 \times 2 = 2$ yen to add two $4$-star reviews.
-   - As a result, there are $0,2,2,2,0$ reviews of with $1,2,3,4,5$ stars, respectively, averaging $3$ stars.
- For the third test case, you can, for example, do the following to have an average rating of at least $3$ stars with a bribe of $3$ yen, which is the minimum possible amount.-   - Initially, there are $0,1,2,0,0$ reviews with $1,2,3,4,5$ stars, respectively.
-   - Pay a bribe of $P_5 = 3$ yen to add one $5$-star review.
-   - As a result, there are $0,1,2,0,1$ reviews with $1,2,3,4,5$ stars, respectively, averaging $3.25$ stars.
- For the fourth test case, you can, for example, do the following to have an average rating of at least $3$ stars with a bribe of $2$ yen, which is the minimum possible amount.-   - Initially, there are $1,1,1,0,0$ reviews with $1,2,3,4,5$ stars, respectively.
-   - Pay a bribe of $P_4 = 1$ yen to add one $4$-star review.
-   - Pay a bribe of $P_5 = 1$ yen to add one $5$-star review.
-   - As a result, there are $1,1,1,1,1$ reviews with $1,2,3,4,5$ stars, respectively, averaging $3$ stars.
- For the fifth test case, you can, for example, do the following to have an average rating of at least $3$ stars with a bribe of $0$ yen, which is the minimum possible amount.-   - Initially, there are $0,0,0,0,1$ reviews with $1,2,3,4,5$ stars, respectively.
-   - Since the average is already $5$, which is not less than $3$, give no bribe.
- For the sixth test case, note that the answer may not fit into a $32$-bit signed integer.