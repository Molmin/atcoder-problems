Score : $600$ points

## Problem Statement

The Country of AtCoder consists of $N$ cities and $M$ roads connecting them, and one can travel between any two cities by traversing some roads.
The cities are numbered from $1$ to $N$, and the roads are numbered from $1$ to $M$. Road $i$ connects cities $A_i$ and $B_i$ bidirectionally.

Due to increasing traffic in the country, some roads are planned to be expanded.
Currently, no roads have been expanded, and the cost to expand road $i$ is $C_i$.

Since it is difficult to expand all roads at once, the plan is to first designate $K$ out of the $N$ cities as **major cities** and perform the minimum necessary expansion work so that one can travel between any two major cities using only expanded roads.
It has already been decided that cities $1, 2, \dots, K-1$ will be major cities, but the last major city has not yet been decided.

For each $i=K, K+1, \dots, N$, answer the following question:

- If city $i$ is designated as the last major city, what is the minimum total cost of the expansion work required to ensure that one can travel between any two major cities using only expanded roads?

## Constraints

- $2 \leq N \leq 4000$
- $N-1 \leq M \leq 8000$
- $2\leq K \leq \min(N,\,$<span style="color: red; ">$10$</span>$)$
- $1 \leq A_i &lt; B_i \leq N$
- $1 \leq C_i \leq 10^9$
- One can travel between any two cities by traversing some roads.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $A_1$ $B_1$ $C_1$
> 
> $A_2$ $B_2$ $C_2$
> 
> $\vdots$
> 
> $A_M$ $B_M$ $C_M$

## Output

Print $N-K+1$ lines.
The $l$-th line $(1 \leq l \leq N-K+1)$ should contain the answer to the question for $i=l+K-1$, as an integer.

```input1
4 5 3
1 4 3
3 4 4
1 2 4
2 3 2
1 3 1
```

```output1
3
6
```

![](https://img.atcoder.jp/abc364/cdb1f0a0ed3840263f37154ce8641b88.png)

In the above figure, circles with numbers represent cities with those numbers, and lines with numbers represent roads with the cost of expansion being that number.
The left and right figures correspond to the cases $i=3$ and $i=4$, respectively. The colored circles represent the major cities, and the colored thick lines represent the roads that are expanded in an optimal solution.

- For $i=3$, expanding roads $4$ and $5$ results in a total cost of $2+1=3$, which is the minimum.
- For $i=4$, expanding roads $1$, $4$, and $5$ results in a total cost of $3+2+1=6$, which is the minimum.

```input2
4 3 2
2 4 28
1 4 56
1 3 82
```

```output2
84
82
56
```

```input3
6 12 4
2 6 68
2 5 93
4 6 28
2 4 89
3 6 31
1 3 10
1 2 53
3 5 1
3 5 74
3 4 22
4 5 80
3 4 35
```

```output3
85
64
94
```

There may be multiple roads connecting the same pair of cities.