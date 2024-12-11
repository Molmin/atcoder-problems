Score : $500$ points

## Problem Statement

You are given sequences of positive integers of length $N$: $A=(A_1,A_2,\dots,A_N)$ and $B=(B_1,B_2,\dots,B_N)$.

You can repeat the following operation any number of times (possibly zero).

- Choose an integer $i$ such that $1 \le i \le N$ and replace $A_i$ with $A_{i+1}$.

Here, regard $A_{N+1}$ as $A_1$.

Determine whether it is possible to make $A$ equal $B$.

You have $T$ test cases to solve.

## Constraints

- $1 \le T \le 5000$
- $1 \le N \le 5000$
- $1 \le A_i,B_i \le N$
- For each input file, the sum of $N$ over all test cases does not exceed $5000$.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each test case is in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $\dots$ $B_N$

## Output

Print $T$ lines.
The $i$-th line should contain `Yes` if it is possible to make $A$ equal $B$ in the $i$-th test case, and `No` otherwise.

```input1
3
2
1 2
2 2
4
2 3 1 1
2 1 1 2
2
1 1
2 2
```

```output1
Yes
Yes
No
```

In the first test case, you can make $A$ equal $B$ as follows.

- Choose $i=1$ to replace $A_1$ with $A_2$, making $A=(2,2)$.

In the second test case, you can make $A$ equal $B$ as follows.

- Choose $i=4$ to replace $A_4$ with $A_1$, making $A=(2,3,1,2)$.
- Choose $i=2$ to replace $A_2$ with $A_3$, making $A=(2,1,1,2)$.

In the third test case, there is no way to make $A$ equal $B$.