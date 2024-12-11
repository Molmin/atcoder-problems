Score : $500$ points

## Problem Statement

You are given a sequence of positive integers: $A=(a_1,\ldots,a_N)$.

Determine whether it is possible to make all elements of $A$ equal by repeating the following operation between $0$ and $10^4$ times, inclusive. If it is possible, show one way to do so.

- Choose a permutation $(p_1,\ldots,p_N)$ of $(1,\ldots,N)$, and replace $A$ with $(a_1+p_1,\ldots,a_N+p_N)$.

## Constraints

- $2 \leq N \leq 50$
- $1 \leq a_i \leq 50$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $\ldots$ $a_N$

## Output

If it is impossible to make all elements of $A$ equal, print `No`.<br>
If it is possible, print one way to do so in the following format, where $M$ is the number of operations, and $(p_{i,1},\ldots,p_{i,N})$ is the permutation chosen in the $i$-th operation:

> Yes
> 
> $M$
> 
> $p_{1,1}$ $\ldots$ $p_{1,N}$
> 
> $\vdots$
> 
> $p_{M,1}$ $\ldots$ $p_{M,N}$

If multiple solutions exist, you may print any of them.

```input1
2
15 9
```

```output1
Yes
8
1 2
1 2
1 2
1 2
2 1
1 2
1 2
1 2
```

This sequence of $8$ operations makes $A = (24,24)$, where all elements are equal.

```input2
5
1 2 3 10 10
```

```output2
No
```

```input3
4
1 1 1 1
```

```output3
Yes
0
```

All elements of $A$ are equal from the beginning.