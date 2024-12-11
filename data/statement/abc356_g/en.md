Score : $575$ points

## Problem Statement

Takahashi can swim in $N$ different styles.<br>
When he swims in the $i$-th style, he consumes $A_i$ stamina per second and advances $B_i$ meters per second.  

Answer $Q$ queries. The $i$-th query is as follows:

- Determine if it is possible to advance $D_i$ meters while keeping the total stamina consumption at most $C_i$. If it is possible, find the minimum number of seconds required.

Here, he can freely combine different swimming styles, and the time to switch styles is negligible.<br>
Specifically, he can swim using the following steps:

- Choose a positive integer $m$, a sequence of positive real numbers $t=(t_1,t_2,\dots,t_m)$ of length $m$, and a sequence of integers $x=(x_1,x_2,\dots,x_m)$ of length $m$ where each element is between $1$ and $N$, inclusive.
- Then, swim in the $x_i$-th style for $t_i$ seconds in the order $i=1,2,\dots,m$.

## Constraints

- All input values are integers.
- $1 \le N \le 2 \times 10^5$
- $1 \le A_i, B_i \le 10^9$
- $1 \le Q \le 2 \times 10^5$
- $1 \le C_i, D_i \le 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_N$ $B_N$
> 
> $Q$
> 
> $C_1$ $D_1$
> 
> $C_2$ $D_2$
> 
> $\vdots$
> 
> $C_Q$ $D_Q$

## Output

Print $Q$ lines in total.<br>
For the $i$-th query, print the answer in the $i$-th line as follows:

- If it is impossible to advance $D_i$ meters while keeping the total stamina consumption at most $C_i$, print `-1`.
- Otherwise, print the minimum required time. The output is considered correct if the absolute or relative error between the printed value and the true answer is at most $10^{-9}$.

```input1
4
1 2
2 3
3 3
4 4
5
4 7
7 7
49 100
1000 500
4 5
```

```output1
3.000000000000000000
1.750000000000000000
-1
125.000000000000000000
1.500000000000000000
```

In this input, Takahashi can swim in the following four styles:

- Consumes $1$ stamina and advances $2$ meters per second.
- Consumes $2$ stamina and advances $3$ meters per second.
- Consumes $3$ stamina and advances $3$ meters per second.
- Consumes $4$ stamina and advances $4$ meters per second.

This input contains five queries.

- For the first query, $C_1=4, D_1=7$.-   - Choose $t=(1,2)$ and $x=(2,1)$. Takahashi swims as follows:-   -   - In the first $1$ second, he consumes $2$ stamina and advances $3$ meters.
-   -   - In the next $2$ seconds, he consumes $2$ stamina and advances $4$ meters.
-   - In total, he consumes $4$ stamina and advances $7$ meters. The required time is $3$ seconds, which is the minimum.
- For the second query, $C_2=7, D_2=7$.-   - Choose $t=(7/4)$ and $x=(4)$. Takahashi swims as follows:-   -   - In the first $7/4$ seconds, he consumes $7$ stamina and advances $7$ meters.
-   - In total, he consumes $7$ stamina and advances $7$ meters. The required time is $7/4$ seconds, which is the minimum.
- For the third query, $C_3=49, D_3=100$.-   - No matter how Takahashi swims, it is not possible to advance $100$ meters while keeping the total stamina consumption at most $49$.
- For the fourth query, $C_4=1000, D_4=500$.-   - Choose $t=(125)$ and $x=(4)$. Takahashi swims as follows:-   -   - In the first $125$ seconds, he consumes $500$ stamina and advances $500$ meters.
-   - In total, he consumes $500$ stamina and advances $500$ meters. The required time is $125$ seconds, which is the minimum.
- For the fifth query, $C_5=4, D_5=5$.-   - Choose $t=(1/2,1)$ and $x=(4,2)$. Takahashi swims as follows:-   -   - In the first $1/2$ seconds, he consumes $2$ stamina and advances $2$ meters.
-   -   - In the next $1$ second, he consumes $2$ stamina and advances $3$ meters.
-   - In total, he consumes $4$ stamina and advances $5$ meters. The required time is $3/2$ seconds, which is the minimum.