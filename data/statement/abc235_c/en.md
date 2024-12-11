Score : $300$ points

## Problem Statement

We have a sequence of $N$ numbers: $A = (a_1, a_2, \dots, a_N)$.<br>
Process the $Q$ queries explained below.

- Query $i$: You are given a pair of integers $(x_i, k_i)$. Let us look at the elements of $A$ one by one from the beginning: $a_1, a_2, \dots$ Which element will be the $k_i$-th occurrence of the number $x_i$?<br>
    Print the index of that element, or $-1$ if there is no such element.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq Q \leq 2 \times 10^5$
- $0 \leq a_i \leq 10^9$ $(1 \leq i \leq N)$
- $0 \leq x_i \leq 10^9$ $(1 \leq i \leq Q)$
- $1 \leq k_i \leq N$ $(1 \leq i \leq Q)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $a_1$ $a_2$ $\dots$ $a_N$
> 
> $x_1$ $k_1$
> 
> $x_2$ $k_2$
> 
> $\vdots$
> 
> $x_Q$ $k_Q$

## Output

Print $Q$ lines. The $i$-th line should contain the answer to Query $i$.

```input1
6 8
1 1 2 3 1 2
1 1
1 2
1 3
1 4
2 1
2 2
2 3
4 1
```

```output1
1
2
5
-1
3
6
-1
-1
```

$1$ occurs in $A$ at $a_1, a_2, a_5$. Thus, the answers to Query $1$ through $4$ are $1, 2, 5, -1$ in this order.

```input2
3 2
0 1000000000 999999999
1000000000 1
123456789 1
```

```output2
2
-1
```