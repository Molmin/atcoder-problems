Score : $200$ points

## Problem Statement

We will say that two integer sequences of length $N$, $x_1, x_2, ..., x_N$ and $y_1, y_2, ..., y_N$, are *similar* when $|x_i - y_i| \leq 1$ holds for all $i$ ($1 \leq i \leq N$).

In particular, any integer sequence is similar to itself.

You are given an integer $N$ and an integer sequence of length $N$, $A_1, A_2, ..., A_N$.

How many integer sequences $b_1, b_2, ..., b_N$ are there such that $b_1, b_2, ..., b_N$ is similar to $A$ and the product of all elements, $b_1 b_2 ... b_N$, is even?

## Constraints

- $1 \leq N \leq 10$
- $1 \leq A_i \leq 100$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Print the number of integer sequences that satisfy the condition.

```input1
2
2 3
```

```output1
7
```

There are seven integer sequences that satisfy the condition:

- $1, 2$
- $1, 4$
- $2, 2$
- $2, 3$
- $2, 4$
- $3, 2$
- $3, 4$

```input2
3
3 3 3
```

```output2
26
```

```input3
1
100
```

```output3
1
```

```input4
10
90 52 56 71 44 8 13 30 57 84
```

```output4
58921
```