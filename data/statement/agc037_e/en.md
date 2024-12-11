Score : $1300$ points

## Problem Statement

Takahashi has a string $S$ of length $N$ consisting of lowercase English letters.
On this string, he will perform the following operation $K$ times:

- Let $T$ be the string obtained by reversing $S$, and $U$ be the string obtained by concatenating $S$ and $T$ in this order.
- Let $S'$ be some contiguous substring of $U$ with length $N$, and replace $S$ with $S'$.

Among the strings that can be the string $S$ after the $K$ operations, find the lexicographically smallest possible one.

## Constraints

- $1 \leq N \leq 5000$
- $1 \leq K \leq 10^9$
- $|S|=N$
- $S$ consists of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $S$

## Output

Print the lexicographically smallest possible string that can be the string $S$ after the $K$ operations.

```input1
5 1
bacba
```

```output1
aabca
```

When $S=$`bacba`, $T=$`abcab`, $U=$`bacbaabcab`, and the optimal choice of $S'$ is $S'=$`aabca`.

```input2
10 2
bbaabbbaab
```

```output2
aaaabbaabb
```