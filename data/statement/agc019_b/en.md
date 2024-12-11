Score : $500$ points

## Problem Statement

You have a string $A = A_1 A_2 ... A_n$ consisting of lowercase English letters.

You can choose any two indices $i$ and $j$ such that $1 \leq i \leq j \leq n$ and reverse substring $A_i A_{i+1} ... A_j$.

You can perform this operation at most once.

How many different strings can you obtain?

## Constraints

- $1 \leq |A| \leq 200,000$
- $A$ consists of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $A$

## Output

Print the number of different strings you can obtain by reversing any substring in $A$ at most once.

```input1
aatt
```

```output1
5
```

You can obtain `aatt` (don't do anything), `atat` (reverse $A[2..3]$), `atta` (reverse $A[2..4]$), `ttaa` (reverse $A[1..4]$) and `taat` (reverse $A[1..3]$).

```input2
xxxxxxxxxx
```

```output2
1
```

Whatever substring you reverse, you'll always get `xxxxxxxxxx`.

```input3
abracadabra
```

```output3
44
```