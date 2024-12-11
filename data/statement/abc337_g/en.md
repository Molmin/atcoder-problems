Score: $600$ points

## Problem Statement

You are given a tree $T$ with $N$ vertices: vertex $1$, vertex $2$, $\ldots$, vertex $N$.
The $i$-th edge $(1\leq i\lt N)$ connects vertices $u_i$ and $v_i$.

For a vertex $u$ in $T$, define $f(u)$ as follows:

- $f(u)\coloneqq$ The number of pairs of vertices $v$ and $w$ in $T$ that satisfy the following two conditions:-   - Vertex $w$ is contained in the path connecting vertices $u$ and $v$.
-   - $v\lt w$.

Here, vertex $w$ is contained in the path connecting vertices $u$ and $v$ also when $u=w$ or $v=w$.

Find the values of $f(1),f(2),\ldots,f(N)$.

## Constraints

- $2\leq N\leq2\times10^5$
- $1\leq u_i\leq N\ (1\leq i\leq N)$
- $1\leq v_i\leq N\ (1\leq i\leq N)$
- The given graph is a tree.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_{N-1}$ $v_{N-1}$

## Output

Print the values of $f(1),f(2),\ldots,f(N)$ in this order, separated by spaces.

```input1
7
1 2
2 3
2 4
4 5
4 6
6 7
```

```output1
0 1 3 4 8 9 15
```

The given tree is as follows:

![](https://img.atcoder.jp/abc337/f02c6287abee93272dda64faf9499a81.png)

For example, $f(4)=4$.
Indeed, for $u=4$, four pairs $(v,w)=(1,2),(1,4),(2,4),(3,4)$ satisfy the conditions.

```input2
15
14 9
9 1
1 6
6 12
12 2
2 15
15 4
4 11
11 13
13 3
3 8
8 10
10 7
7 5
```

```output2
36 29 32 29 48 37 45 37 44 42 33 36 35 57 35
```

The given tree is as follows:

![](https://img.atcoder.jp/abc337/e59ed095480b6f8ec4ecfc212f14e635.png)

The value of $f(14)$ is $57$, which is the inversion number of the sequence $(14,9,1,6,12,2,15,4,11,13,3,8,10,7,5)$.

```input3
24
7 18
4 2
5 8
5 15
6 5
13 8
4 6
7 11
23 16
6 18
24 16
14 21
20 15
16 18
3 16
11 10
9 11
15 14
12 19
5 1
9 17
5 22
11 19
```

```output3
20 20 41 20 21 20 28 28 43 44 36 63 40 46 34 40 59 28 53 53 66 42 62 63
```