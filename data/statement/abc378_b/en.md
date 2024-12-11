Score : $200$ points

## Problem Statement

In AtCoder City, $N$ types of garbage are collected regularly. The $i$-th type of garbage $(i=1,2,\dots,N)$ is collected on days when the date modulo $q_i$ equals $r_i$.

Answer $Q$ queries. In the $j$-th query $(j=1,2,\dots,Q)$, given that the $t_j$-th type of garbage is put out on day $d_j$, answer the next day on which it will be collected.

Here, if the $i$-th type of garbage is put out on a day when that type of garbage is collected, then the garbage will be collected on the same day.

## Constraints

- $1 \leq N \leq 100$
- $0 \leq r_i &lt; q_i \leq 10^9$
- $1 \leq Q \leq 100$
- $1 \leq t_j \leq N$
- $1 \leq d_j \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $q_1$ $r_1$
> 
> $q_2$ $r_2$
> 
> $\vdots$
> 
> $q_N$ $r_N$
> 
> $Q$
> 
> $t_1$ $d_1$
> 
> $t_2$ $d_2$
> 
> $\vdots$
> 
> $t_Q$ $d_Q$

## Output

Print $Q$ lines. The $j$-th line $(1\leq j \leq Q)$ should contain the answer to the $j$-th query.

```input1
2
7 3
4 2
5
1 1
1 3
1 4
1 15
2 7
```

```output1
3
3
10
17
10
```

- 1st query: The 1st type of garbage is collected on day $3$ for the first time after day $1$.
- 2nd query: The 1st type of garbage is collected on day $3$ for the first time after day $3$.
- 3rd query: The 1st type of garbage is collected on day $10$ for the first time after day $4$.