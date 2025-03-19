Score : $550$ points

## Problem Statement

You are given positive integers $N$, $M$, and a sequence $A = (A_1, A_2, \dots, A_N)$ of length $N$, each element being an integer between $1$ and $N$, inclusive.

Find the number, modulo $998244353$, of sequences $x = (x_1, x_2, \dots, x_N)$ of length $N$, each element being an integer between $1$ and $M$, inclusive, that satisfy the following condition:

- $x_i \leq x_{A_i}$ for every $i$ ($1 \leq i \leq N$).

## Constraints

- $1 \leq N, M \leq 2025$
- $1 \leq A_i \leq N$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
3 3
2 1 1
```

```output1
6
```

The sequences $x=(1,1,1),(2,2,1),(2,2,2),(3,3,1),(3,3,2),(3,3,3)$ satisfy the condition.

```input2
4 9
1 1 1 1
```

```output2
2025
```

```input3
10 5
9 4 5 5 4 2 1 5 7 2
```

```output3
10010
```