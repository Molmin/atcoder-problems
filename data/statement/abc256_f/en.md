Score : $500$ points

## Problem Statement

You are given $N$, $Q$, and $A=(A_1,\ldots,A_N)$.<br>
Process $Q$ queries, each of which is of one of the following two kinds:

- `1 x v`: update $A_x$ to $v$.
- `2 x`: let $B_i=\sum_{j=1}^{i}A_j$, $C_i=\sum_{j=1}^{i}B_j$, and $D_i=\sum_{j=1}^{i}C_j$.  Print $D_x$ modulo $998244353$.

## Constraints

- $1 \leq N \leq 2\times10^5$
- $1 \leq Q \leq 2\times10^5$
- $0 \leq A_i \leq 10^9$
- $1 \leq x \leq N$
- $0 \leq v \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format, where ${\rm query}_i$ denotes the $i$-th query to be processed:

> $N$ $Q$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> ${\rm query}_1$
> 
> ${\rm query}_2$
> 
> $\vdots$
> 
> ${\rm query}_Q$

Each query is given in one of the following two formats:

> $1$ $x$ $v$
> $2$ $x$

## Output

Print the answer to the queries, with newlines in between.  

```input1
3 3
1 2 3
2 3
1 2 0
2 3
```

```output1
15
9
```

When the $1$-st query is given, $A=(1,2,3)$, so $B=(1,3,6)$, $C=(1,4,10)$, and $D=(1,5,15)$; thus, $D_3=15$.

When the $3$-rd query is given, $A=(1,0,3)$, so $B=(1,1,4)$, $C=(1,2,6)$, and $D=(1,3,9)$; thus, $D_3=9$.

```input2
2 1
998244353 998244353
2 1
```

```output2
0
```