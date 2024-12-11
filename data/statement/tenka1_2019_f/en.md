Score : $800$ points

## Problem Statement

Find the number, modulo $998244353$, of sequences of length $N$ consisting of $0$, $1$ and $2$ such that none of their contiguous subsequences totals to $X$.

## Constraints

- $1 \leq N \leq 3000$
- $1 \leq X \leq 2N$
- $N$ and $X$ are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $X$

## Output

Print the number, modulo $998244353$, of sequences that satisfy the condition.

```input1
3 3
```

```output1
14
```

$14$ sequences satisfy the condition: $(0,0,0),(0,0,1),(0,0,2),(0,1,0),(0,1,1),(0,2,0),(0,2,2),(1,0,0),(1,0,1),(1,1,0),(2,0,0),(2,0,2),(2,2,0)$ and $(2,2,2)$.

```input2
8 6
```

```output2
1179
```

```input3
10 1
```

```output3
1024
```

```input4
9 13
```

```output4
18402
```

```input5
314 159
```

```output5
459765451
```