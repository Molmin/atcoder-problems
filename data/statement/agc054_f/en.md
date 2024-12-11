Score : $1800$ points

## Problem Statement

Given is a sequence $A$ of $N$ positive integers and a sequence $B$ of $N-1$ positive integers.
You can do the following operation any number of times.

- Choose integers $i$ and $j$ ($1 \leq i &lt; j \leq N$) and decrease each of the following values by $1$: $A_i,A_j,B_i,B_{i+1},\cdots,B_{j-1}$. Here, there should not be any negative value after this operation.

Let $m$ be the maximum number of operations that can be done.
Find the number, modulo $998244353$, of sequences that $A$ can be after $m$ operations.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq 10^9$
- $1 \leq B_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$
> 
> $B_1$ $B_2$ $\cdots$ $B_{N-1}$

## Output

Print the answer.

```input1
3
1 2 2
1 2
```

```output1
3
```

We have $m=2$. After two operations, $A$ will be one of the following three sequences.

- $A=(1,0,0)$: we end up with this after operations with $(i,j)=(2,3)$ and $(i,j)=(2,3)$.
- $A=(0,1,0)$: we end up with this after operations with $(i,j)=(1,3)$ and $(i,j)=(2,3)$.
- $A=(0,0,1)$: we end up with this after operations with $(i,j)=(1,2)$ and $(i,j)=(2,3)$.

```input2
4
1 1 1 1
2 2 2
```

```output2
1
```

Note that we do not distinguish two scenarios with different contents of $B$ if the contents of $A$ are the same.

```input3
4
2 2 3 4
3 1 4
```

```output3
3
```