Score : $400$ points

## Problem Statement

For integers $l$, $r$, and $x$ ($l \leq r$), let us define $dist(l,r,x)$ as follows.

- If $x&lt;l$: $dist(l,r,x)=l-x$
- If $l \leq x \leq r$: $dist(l,r,x)=0$
- If $r&lt;x$: $dist(l,r,x)=x-r$

You are given $N$ pairs of integers, the $i$-th of which is $(L_i,R_i)$.
For each $k=1,2,\cdots,N$, solve the following problem.

- Let us choose an integer $x$ freely and compute $\max(dist(L_1,R_1,x),dist(L_2,R_2,x),\cdots,dist(L_k,R_k,x))$.
Find the minimum possible value of this.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq L_i \leq R_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\vdots$
> 
> $L_N$ $R_N$

## Output

Print the answers for $k=1,2,\cdots,N$ in this order.

```input1
3
1 3
2 4
5 6
```

```output1
0
0
1
```

- For $k=1$, an optimal choice is $x=1$.
- For $k=2$, an optimal choice is $x=3$.
- For $k=3$, an optimal choice is $x=4$.

```input2
10
64 96
30 78
52 61
18 28
9 34
42 86
11 49
1 79
13 59
70 95
```

```output2
0
0
2
18
18
18
18
18
18
21
```