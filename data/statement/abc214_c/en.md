Score : $300$ points

## Problem Statement

There are $N$ creatures standing in a circle, called Snuke $1, 2, ..., N$ in counter-clockwise order.

When Snuke $i$ $(1 \leq i \leq N)$ receives a gem at time $t$, $S_i$ units of time later, it will hand that gem to Snuke $i+1$ at time $t+S_i$. Here, Snuke $N+1$ is Snuke $1$.

Additionally, Takahashi will hand a gem to Snuke $i$ at time $T_i$.

For each $i$ $(1 \leq i \leq N)$, find the time when Snuke $i$ receives a gem for the first time. Assume that it takes a negligible time to hand a gem.

## Constraints

- $1 \leq N \leq 200000$
- $1 \leq S_i,T_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S_1$ $S_2$ $\ldots$ $S_N$
> 
> $T_1$ $T_2$ $\ldots$ $T_N$

## Output

Print $N$ lines. The $i$-th line $(1 \leq i \leq N)$ should contain the time when Snuke $i$ receives a gem for the first time.

```input1
3
4 1 5
3 10 100
```

```output1
3
7
8
```

We will list the three Snuke's and Takahashi's actions up to time $13$ in chronological order.

Time $3$: Takahashi hands a gem to Snuke $1$.

Time $7$: Snuke $1$ hands a gem to Snuke $2$.

Time $8$: Snuke $2$ hands a gem to Snuke $3$.

Time $10$: Takahashi hands a gem to Snuke $2$.

Time $11$: Snuke $2$ hands a gem to Snuke $3$.

Time $13$: Snuke $3$ hands a gem to Snuke $1$.

After that, they will continue handing gems, though it will be irrelevant to the answer.

```input2
4
100 100 100 100
1 1 1 1
```

```output2
1
1
1
1
```

Note that the values $S_i$ and $T_i$ may not be distinct.

```input3
4
1 2 3 4
1 2 4 7
```

```output3
1
2
4
7
```

Note that a Snuke may perform multiple transactions simultaneously. Particularly, a Snuke may receive gems simultaneously from Takahashi and another Snuke.

```input4
8
84 87 78 16 94 36 87 93
50 22 63 28 91 60 64 27
```

```output4
50
22
63
28
44
60
64
27
```