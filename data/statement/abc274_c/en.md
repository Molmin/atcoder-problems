Score : $300$ points

## Problem Statement

You observed amoebae and kept some records.

Initially, there was one amoeba, numbered $1$.

You made $N$ records. According to the $i$-th record, the amoeba numbered $A_i$ disappeared by dividing itself into two new amoebae, which were then numbered $2i$ and $2i+1$.<br>
Here, amoeba $A_i$ is said to be the parent of amoebae $2i$ and $2i+1$.

For each $k=1,\ldots,2N+1$, how many generations away is amoeba $k$ from amoeba $1$?

## Constraints

- $1 \leq N \leq 2\times 10^5$
- The records are consistent. That is:-   - $1\leq A_i \leq 2i-1$.
-   - $A_i$ are distinct integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print $2N+1$ lines. The $k$-th line should contain the generation distance between amoeba $1$ and amoeba $k$.

```input1
2
1 2
```

```output1
0
1
1
2
2
```

From amoeba $1$, amoebae $2$ and $3$ were born. From amoeba $2$, amoebae $4$ and $5$ were born.

- Amoeba $1$ is zero generations away from amoeba $1$.
- Amoeba $2$ is one generation away from amoeba $1$.
- Amoeba $3$ is one generation away from amoeba $1$.
- Amoeba $4$ is one generation away from amoeba $2$, and two generations away from amoeba $1$.
- Amoeba $5$ is one generation away from amoeba $2$, and two generations away from amoeba $1$.

```input2
4
1 3 5 2
```

```output2
0
1
1
2
2
3
3
2
2
```