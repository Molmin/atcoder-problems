Score : $300$ points

## Problem Statement

Given are $N$ integers between $2$ and $50$ (inclusive): $X_1, X_2, \cdots, X_N$. Find the minimum positive integer $Y$ that satisfies the following for every $i = 1, 2, \cdots, N$:

- $X_i$ and $Y$ are not coprime.

## Constraints

- $1 \leq N \leq 49$
- $2 \leq X_i \leq 50$
- $X_i \neq X_j (i \neq j)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $X_1$ $X_2$ $\ldots$ $X_N$

## Output

Print the minimum positive integer that satisfies the condition.

```input1
2
4 3
```

```output1
6
```

Being not coprime with $4$ requires being even, and being not coprime with $3$ requires being a multiple of $3$.

```input2
1
47
```

```output2
47
```

```input3
7
3 4 6 7 8 9 10
```

```output3
42
```