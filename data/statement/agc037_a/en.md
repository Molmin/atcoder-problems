Score : $300$ points

## Problem Statement

Given is a string $S$ consisting of lowercase English letters. Find the maximum positive integer $K$ that satisfies the following condition:

- There exists a partition of $S$ into $K$ non-empty strings $S=S_1S_2...S_K$ such that $S_i \neq S_{i+1}$ ($1 \leq i \leq K-1$).

Here $S_1S_2...S_K$ represents the concatenation of $S_1,S_2,...,S_K$ in this order.

## Constraints

- $1 \leq |S| \leq 2 \times 10^5$
- $S$ consists of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the maximum positive integer $K$ that satisfies the condition.

```input1
aabbaa
```

```output1
4
```

We can, for example, divide $S$ into four strings `aa`, `b`, `ba`, and `a`.

```input2
aaaccacabaababc
```

```output2
12
```