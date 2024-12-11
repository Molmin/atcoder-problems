Score : $1400$ points

## Problem Statement

You are given $P$, a permutation of $(1,\ 2,\ ...\ N)$.

A string $S$ of length $N$ consisting of `0` and `1` is a *good string* when it meets the following criterion:

- The sequences $X$ and $Y$ are constructed as follows:-   - First, let $X$ and $Y$ be empty sequences.
-   - For each $i=1,\ 2,\ ...\ N$, in this order, append $P_i$ to the end of $X$ if $S_i=$ `0`, and append it to the end of $Y$ if $S_i=$ `1`.
- If $X$ and $Y$ have the same number of *high* elements, $S$ is a good string.
Here, the $i$-th element of a sequence is called *high* when that element is the largest among the elements from the $1$-st to $i$-th element in the sequence.

Determine if there exists a good string. If it exists, find the lexicographically smallest such string.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq P_i \leq N$
- $P_1,\ P_2,\ ...\ P_N$ are all distinct.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $P_2$ $...$ $P_N$

## Output

If a good string does not exist, print `-1`.
If it exists, print the lexicographically smallest such string.

```input1
6
3 1 4 6 2 5
```

```output1
001001
```

Let $S=$ `001001`. Then, $X=(3,\ 1,\ 6,\ 2)$ and $Y=(4,\ 5)$.
The high elements in $X$ is the first and third elements, and the high elements in $Y$ is the first and second elements.
As they have the same number of high elements, `001001` is a good string.
There is no good string that is lexicographically smaller than this, so the answer is `001001`.

```input2
5
1 2 3 4 5
```

```output2
-1
```

```input3
7
1 3 2 5 6 4 7
```

```output3
0001101
```

```input4
30
1 2 6 3 5 7 9 8 11 12 10 13 16 23 15 18 14 24 22 26 19 21 28 17 4 27 29 25 20 30
```

```output4
000000000001100101010010011101
```