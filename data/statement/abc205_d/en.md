Score : $400$ points

## Problem Statement

You are given a sequence of $N$ positive integers: $A = (A_1, A_2, \dots, A_N)$, and $Q$ queries.

In the $i$-th query $(1 \leq i \leq Q)$, given a positive integer $K_i$, find the $K_i$-th smallest integer among the positive integers that differ from all of $A_1, A_2, \dots, A_N$.

## Constraints

- $1 \leq N, Q \leq 10^5$
- $1 \leq A_1 &lt; A_2 &lt; \dots &lt; A_N \leq 10^{18}$
- $1 \leq K_i \leq 10^{18}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $K_1$
> 
> $K_2$
> 
> $\vdots$
> 
> $K_Q$

## Output

Print $Q$ lines. The $i$-th line should contain the response to the $i$-th query.

```input1
4 3
3 5 6 7
2
5
3
```

```output1
2
9
4
```

The positive integers that differ from all of $A_1, A_2, \dots, A_N$ are $1, 2, 4, 8, 9, 10, 11, \dots$ in ascending order.
The second, fifth, and third smallest of them are $2$, $9$, and $4$, respectively.

```input2
5 2
1 2 3 4 5
1
10
```

```output2
6
15
```