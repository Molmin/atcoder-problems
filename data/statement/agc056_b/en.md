Score : $900$ points

## Problem Statement

Given are an integer $N$ and $M$ pairs of integers.
The $i$-th pair is $(L_i,R_i)$.

Find the number of integer sequences $x=(x_1,x_2,\cdots,x_M)$ that can be generated as follows, modulo $998244353$.

- Provide a permutation $p=(p_1,p_2,\cdots,p_N)$ of $(1,2,\cdots,N)$.
- For each $i$ ($1 \leq i \leq M$), let $x_i$ be the index of the largest element among $p_{L_i},p_{L_i+1},\cdots,p_{R_i}$. That is, $\max(p_{L_i},p_{L_i+1},\cdots,p_{R_i})=p_{x_i}$.

## Constraints

- $2 \leq N \leq 300$
- $1 \leq M \leq N(N-1)/2$
- $1 \leq L_i &lt; R_i \leq N$
- $(L_i,R_i) \neq (L_j,R_j)$ ($i \neq j$)
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\vdots$
> 
> $L_M$ $R_M$

## Output

Print the answer.

```input1
3 2
1 2
1 3
```

```output1
4
```

For example, for $p=(2,1,3)$, we will have $x=(1,3)$.

The four sequences that meet the requirement are $x=(1,1),(1,3),(2,2),(2,3)$.

```input2
6 3
1 2
3 4
5 6
```

```output2
8
```

```input3
10 10
8 10
5 8
5 7
2 5
1 7
4 5
5 9
2 8
7 8
3 9
```

```output3
1060
```