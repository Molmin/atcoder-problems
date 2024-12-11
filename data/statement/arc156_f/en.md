Score : $1000$ points

## Problem Statement

You are given three integer sequences of length $N$: $A=(A_1,A_2,\dots,A_N),B=(B_1,B_2,\dots,B_N),C=(C_1,C_2,\dots,C_N)$.

Find one set of integers that satisfies the following conditions.

- It can be obtained as follows: start with an empty set, and for each $i=1,2,\dots,N$ in this order, add $A_i$ or $B_i$ to the set.
- It can be obtained as follows: start with an empty set, and for each $i=1,2,\dots,N$ in this order, add $A_i$ or $C_i$ to the set.
- It has the maximum number of elements among the sets that satisfy the two conditions above.

## Constraints

- $1 \leq N \leq 5000$
- $1 \leq A_i,B_i,C_i \leq 10000$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $\dots$ $B_N$
> 
> $C_1$ $C_2$ $\dots$ $C_N$

## Output

Print $k$, the number of elements in the set of integers satisfying the conditions, and $x_i\ (1\leq i \leq k)$, the $k$ elements of the set, in the following format:  

> $k$
> 
> $x_1$ $x_2$ $\dots$ $x_k$

If multiple sets satisfy the conditions, you may print any of them.

```input1
3
1 1 1
2 3 4
5 4 2
```

```output1
3
4 1 2
```

For the set $\lbrace 1,2,4\rbrace$, we have the following.

- The first condition is satisfied because you can add $B_1,A_2,B_3$ to an empty set to obtain this set.
- The second condition is satisfied because you can add $A_1,C_2,C_3$ to an empty set to obtain this set.

Clearly, any set satisfying these conditions has at most $N=3$ elements, so this set also satisfies the third condition.

```input2
15
1 1 15 11 13 7 7 1 6 1 5 7 4 9 8
11 30 1 18 16 15 19 17 3 27 22 7 21 29 9
24 14 23 17 18 16 9 12 10 5 26 29 20 19 11
```

```output2
12
7 9 11 17 19 1 15 4 5 6 29 13
```