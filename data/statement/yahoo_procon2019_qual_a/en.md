Score : $100$ points

## Problem Statement

Determine if we can choose $K$ different integers between $1$ and $N$ (inclusive) so that no two of them differ by $1$.

## Constraints

- $1\leq N,K\leq 100$
- $N$ and $K$ are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

If we can choose $K$ integers as above, print `YES`; otherwise, print `NO`.

```input1
3 2
```

```output1
YES
```

We can choose $1$ and $3$.

```input2
5 5
```

```output2
NO
```

```input3
31 10
```

```output3
YES
```

```input4
10 90
```

```output4
NO
```