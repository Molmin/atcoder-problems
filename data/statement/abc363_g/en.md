Score : $675$ points

## Problem Statement

You are given two sequences of length $N$: $D=(D_1, D_2, \dots, D_N)$ and $P=(P_1, P_2, \dots, P_N)$.

Process $Q$ queries in the order they are given. Each query is given in the following format:

- `c x y`: Change $D_c$ to $x$ and $P_c$ to $y$. Then, solve the following problem and print the answer.

There are $N$ jobs numbered $1$ to $N$.<br>
Starting from today (consider this as day $1$), you will choose and complete one job per day for $N$ days.<br>
If you complete job $i$ on or before day $D_i$, you will receive a reward of $P_i$. (If you do not complete it by day $D_i$, you get nothing.)<br>
Find the maximum total reward you can achieve by choosing the optimal order of completing the jobs.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq Q \leq 10^5$
- $1 \leq D_i \leq N$
- $1 \leq P_i \leq 10^9$
- $1 \leq c \leq N$
- $1 \leq x \leq N$
- $1 \leq y \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format. Here, $\mathrm{query}_i$ denotes the $i$-th query.

> $N$ $Q$
> 
> $D_1$ $D_2$ $\dots$ $D_N$
> 
> $P_1$ $P_2$ $\dots$ $P_N$
> 
> $\mathrm{query}_1$
> 
> $\mathrm{query}_2$
> 
> $\vdots$
> 
> $\mathrm{query}_Q$

Each query is given in the following format.

> $c$ $x$ $y$

## Output

Print $Q$ lines. The $i$-th line should contain the answer to the $i$-th query.

```input1
3 2
1 2 3
3 6 3
3 1 4
2 3 9
```

```output1
10
13
```

The first query is as follows:

- Update $D_3$ to $1$ and $P_3$ to $4$. Now, $D = (1, 2, 1)$ and $P = (3, 6, 4)$.
- In the subproblem, one optimal procedure is to complete job $3$ on day $1$, job $2$ on day $2$, and job $1$ on day $3$. The total reward is $10$, so print $10$.

The second query is as follows:

- Update $D_2$ to $3$ and $P_2$ to $9$. Now, $D = (1, 3, 1)$ and $P = (3, 9, 4)$.
- In the subproblem, one optimal procedure is to complete job $3$ on day $1$, job $1$ on day $2$, and job $2$ on day $3$. The total reward is $13$, so print $13$.

```input2
5 1
1 2 3 4 5
1000000000 1000000000 1000000000 1000000000 1000000000
1 1 1000000000
```

```output2
5000000000
```

```input3
10 10
6 2 4 1 5 1 6 6 5 3
45 65 71 52 86 52 48 60 40 98
5 6 5
8 4 34
6 7 83
1 3 21
7 5 85
7 4 51
8 2 81
2 7 54
6 1 5
8 6 30
```

```output3
394
379
462
457
459
414
443
479
401
396
```