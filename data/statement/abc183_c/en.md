Score : $300$ points

## Problem Statement

There are $N$ cities. The time it takes to travel from City $i$ to City $j$ is $T_{i, j}$.

Among those paths that start at City $1$, visit all other cities exactly once, and then go back to City $1$, how many paths take the total time of exactly $K$ to travel along?

## Constraints

- $2\leq N \leq 8$
- If $i\neq j$, $1\leq T_{i,j} \leq 10^8$.
- $T_{i,i}=0$
- $T_{i,j}=T_{j,i}$
- $1\leq K \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $T_{1,1}$ $\ldots$ $T_{1,N}$
> 
> $\vdots$
> 
> $T_{N,1}$ $\ldots$ $T_{N,N}$

## Output

Print the answer as an integer.

```input1
4 330
0 1 10 100
1 0 20 200
10 20 0 300
100 200 300 0
```

```output1
2
```

There are six paths that start at City $1$, visit all other cities exactly once, and then go back to City $1$:

- $1\to 2\to 3\to 4\to 1$
- $1\to 2\to 4\to 3\to 1$
- $1\to 3\to 2\to 4\to 1$
- $1\to 3\to 4\to 2\to 1$
- $1\to 4\to 2\to 3\to 1$
- $1\to 4\to 3\to 2\to 1$

The times it takes to travel along these paths are $421$, $511$, $330$, $511$, $330$, and $421$, respectively, among which two are exactly $330$.

```input2
5 5
0 1 1 1 1
1 0 1 1 1
1 1 0 1 1
1 1 1 0 1
1 1 1 1 0
```

```output2
24
```

In whatever order we visit the cities, it will take the total time of $5$ to travel.