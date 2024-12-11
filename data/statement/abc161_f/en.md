Score : $600$ points

## Problem Statement

Given is a positive integer $N$.

We will choose an integer $K$ between $2$ and $N$ (inclusive), then we will repeat the operation below until $N$ becomes less than $K$.

- Operation: if $K$ divides $N$, replace $N$ with $N/K$; otherwise, replace $N$ with $N-K$.

In how many choices of $K$ will $N$ become $1$ in the end?

## Constraints

- $2 \leq N \leq 10^{12}$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the number of choices of $K$ in which $N$ becomes $1$ in the end.

```input1
6
```

```output1
3
```

There are three choices of $K$ in which $N$ becomes $1$ in the end: $2$, $5$, and $6$.

In each of these choices, $N$ will change as follows:

- When $K=2$: $6 \to 3 \to 1$
- When $K=5$: $6 \to 1$
- When $K=6$: $6 \to 1$

```input2
3141
```

```output2
13
```

```input3
314159265358
```

```output3
9
```