Score: $200$ points

## Problem Statement

For a positive integer $X$, let $\text{ctz}(X)$ be the (maximal) number of consecutive zeros at the **end** of the binary notation of $X$.<br>
If the binary notation of $X$ ends with a $1$, then $\text{ctz}(X)=0$.

You are given a positive integer $N$. Print $\text{ctz}(N)$.

## Constraints

- $1\leq N\leq 10^9$
- $N$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print $\text{ctz}(N)$.

```input1
2024
```

```output1
3
```

$2024$ is `11111101000` in binary, with three consecutive `0`s from the end, so $\text{ctz}(2024)=3$.<br>
Thus, print $3$.

```input2
18
```

```output2
1
```

$18$ is `10010` in binary, so $\text{ctz}(18)=1$.<br>
Note that we count the trailing zeros.

```input3
5
```

```output3
0
```