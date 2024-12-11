Score : $400$ points

## Problem Statement

We have a sequence of length $N$, $a = (a_1, a_2, ..., a_N)$.
Each $a_i$ is a positive integer.

Snuke's objective is to permute the element in $a$ so that the following condition is satisfied:

- For each $1 \leq i \leq N - 1$, the product of $a_i$ and $a_{i + 1}$ is a multiple of $4$.

Determine whether Snuke can achieve his objective.

## Constraints

- $2 \leq N \leq 10^5$
- $a_i$ is an integer.
- $1 \leq a_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $...$ $a_N$

## Output

If Snuke can achieve his objective, print `Yes`; otherwise, print `No`.

```input1
3
1 10 100
```

```output1
Yes
```

One solution is $(1, 100, 10)$.

```input2
4
1 2 3 4
```

```output2
No
```

It is impossible to permute $a$ so that the condition is satisfied.

```input3
3
1 4 1
```

```output3
Yes
```

The condition is already satisfied initially.

```input4
2
1 1
```

```output4
No
```

```input5
6
2 7 1 8 2 8
```

```output5
Yes
```