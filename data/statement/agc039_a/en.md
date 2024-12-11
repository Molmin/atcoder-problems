Score : $300$ points

## Problem Statement

Given is a string $S$. Let $T$ be the concatenation of $K$ copies of $S$.
We can repeatedly perform the following operation: choose a character in $T$ and replace it with a different character.
Find the minimum number of operations required to satisfy the following condition: any two adjacent characters in $T$ are different.

## Constraints

- $1 \leq |S| \leq 100$
- $S$ consists of lowercase English letters.
- $1 \leq K \leq 10^9$
- $K$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $S$
> 
> $K$

## Output

Print the minimum number of operations required.

```input1
issii
2
```

```output1
4
```

$T$ is `issiiissii`.  For example, we can rewrite it into `ispiqisyhi`, and now any two adjacent characters are different.

```input2
qq
81
```

```output2
81
```

```input3
cooooooooonteeeeeeeeeest
999993333
```

```output3
8999939997
```