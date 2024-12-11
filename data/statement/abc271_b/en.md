Score : $200$ points

## Problem Statement

There are $N$ sequences of integers.<br>
The $i$-th $(1 \leq i \leq N)$ sequence has $L_i$ terms; the $j$-th $(1 \leq j \leq L_i)$ term of the $i$-th sequence is $a_{i, j}$.

You are given $Q$ queries.  For the $k$-th $(1 \leq k \leq Q)$ query, given integers $s_k$ and $t_k$, find the $t_k$-th term of the $s_k$-th sequence.

## Constraints

- $1 \leq N, Q \leq 2 \times 10^5$
- $L_i \geq 1 \, (1 \leq i \leq N)$
- $\sum_{i=1}^N L_i \leq 2 \times 10^5$
- $1 \leq a_{i, j} \leq 10^9 \, (1 \leq i \leq N, 1 \leq j \leq L_i)$
- $1 \leq s_k \leq N, 1 \leq t_k \leq L_{s_k} \, (1 \leq k \leq Q)$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $L_1$ $a_{1, 1}$ $\ldots$ $a_{1, L_1}$
> 
> $\vdots$
> 
> $L_N$ $a_{N, 1}$ $\ldots$ $a_{N, L_N}$
> 
> $s_1$ $t_1$
> 
> $\vdots$ 
> 
> $s_Q$ $t_Q$

## Output

Print $Q$ lines.  The $k$-th $(1 \leq k \leq Q)$ line should contain the answer to the $k$-th query.

```input1
2 2
3 1 4 7
2 5 9
1 3
2 1
```

```output1
7
5
```

The $1$-st sequence is $(1, 4, 7)$ and the $2$-nd is $(5, 9)$.<br>
The answer to each query is as follows:

- The $3$-rd term of the $1$-st sequence is $7$.
- The $1$-st term of the $2$-nd sequence is $5$.

```input2
3 4
4 128 741 239 901
2 1 1
3 314 159 26535
1 1
2 2
3 3
1 4
```

```output2
128
1
26535
901
```