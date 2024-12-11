Score : $500$ points

## Problem Statement

Let $N$ be a positive integer.

There is a numerical sequence of length $3N$, $a = (a_1, a_2, ..., a_{3N})$.
Snuke is constructing a new sequence of length $2N$, $a'$, by removing exactly $N$ elements from $a$ without changing the order of the remaining elements.
Here, the score of $a'$ is defined as follows: $($the sum of the elements in the first half of $a') - ($the sum of the elements in the second half of $a')$.

Find the maximum possible score of $a'$.

## Constraints

- $1 \leq N \leq 10^5$
- $a_i$ is an integer.
- $1 \leq a_i \leq 10^9$

## Partial Score

- In the test set worth $300$ points, $N \leq 1000$.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $...$ $a_{3N}$

## Output

Print the maximum possible score of $a'$.

```input1
2
3 1 4 1 5 9
```

```output1
1
```

When $a_2$ and $a_6$ are removed, $a'$ will be $(3, 4, 1, 5)$, which has a score of $(3 + 4) - (1 + 5) = 1$.

```input2
1
1 2 3
```

```output2
-1
```

For example, when $a_1$ are removed, $a'$ will be $(2, 3)$, which has a score of $2 - 3 = -1$.

```input3
3
8 2 2 7 4 6 5 3 8
```

```output3
5
```

For example, when $a_2$, $a_3$ and $a_9$ are removed, $a'$ will be $(8, 7, 4, 6, 5, 3)$, which has a score of $(8 + 7 + 4) - (6 + 5 + 3) = 5$.