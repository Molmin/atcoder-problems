Score: $1500$ points

## Problem Statement

You are given a tree with $N$ vertices numbered $1$ to $N$. The $i$-th edge of the tree connects vertices $u_i$ and $v_i$.

For each $K=1, 2, \ldots, N$, solve the following problem:

There are $K$ stones numbered $1, 2, \ldots, K$, with the stone numbered $i$ placed on vertex $i$.
You can repeatedly perform the following operation:

- Choose two vertices $u$ and $v$ connected by an edge such that $u$ has a stone on it and $v$ does not. Move the stone from $u$ to $v$.

Find the number, modulo $998244353$, of possible configurations of the stones after performing the operations. Two configurations are distinguished if and only if there is a stone whose position differs between those configurations.

$T$ test cases are given; solve each of them.

## Constraints

- $1\leq T\leq 10^5$
- $1\leq N\leq 2\times 10^5$
- $1\leq u_i, v_i\leq N$
- The given graph is a tree.
- The sum of $N$ over all test cases in a single input is at most $2\times 10^5$.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\vdots$
> 
> $\text{case}_T$

Each test case is given in the following format:

> $N$
> 
> $u_1$ $v_1$
> 
> $\vdots$
> 
> $u_{N-1}$ $v_{N-1}$

## Output

Print $T$ lines. The $i$-th line should contain the answers for $K=1, 2, \ldots, N$ for the $i$-th test case, separated by spaces.

```input1
1
4
1 2
1 3
1 4
```

```output1
4 12 4 1
```

Let us represent the configuration of stones by the sequence of vertices where the stones numbered $1, 2, \ldots, K$ are placed.

- For $K=1$, there are $4$ possible configurations: $(1), (2), (3), (4)$.
- For $K=2$, there are $12$ possible configurations: $(1,2), (1,3), (1,4), (2,1), (2,3), (2,4), (3,1), (3,2), (3,4), (4,1), (4,2), (4,3)$.
- For $K=3$, there are $4$ possible configurations: $(1,2,3), (4,1,3), (4,2,1), (4,2,3)$.
- For $K=4$, there is $1$ possible configuration: $(1,2,3,4)$.

For $K=3$, refer to the following figure.

![](https://img.atcoder.jp/agc066/f2dc57ae01aa4f1ccb51c1a2b8fe7d15.png)

```input2
4
1
5
1 4
5 2
3 4
2 1
7
1 7
2 7
5 6
4 1
1 6
3 6
10
1 2
2 3
3 4
4 5
5 6
2 7
3 8
4 9
5 10
```

```output2
1
5 10 10 5 1
7 42 210 840 84 7 1
10 90 720 5040 30240 151200 604800 720 10 1
```

The tree given in each test case is as follows:

![](https://img.atcoder.jp/agc066/744a8d907603331334518cc5d7b62bb9.png)