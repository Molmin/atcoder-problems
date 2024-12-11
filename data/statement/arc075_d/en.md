Score : $800$ points

## Problem Statement

For a positive integer $n$, we denote the integer obtained by reversing the decimal notation of $n$ (without leading zeroes) by $rev(n)$. For example, $rev(123) = 321$ and $rev(4000) = 4$.

You are given a positive integer $D$. How many positive integers $N$ satisfy $rev(N) = N + D$?

## Constraints

- $D$ is an integer.
- $1 \leq D &lt; 10^9$

## Input

Input is given from Standard Input in the following format:

> $D$

## Output

Print the number of the positive integers $N$ such that $rev(N) = N + D$.

```input1
63
```

```output1
2
```

There are two positive integers $N$ such that $rev(N) = N + 63$: $N = 18$ and $29$.

```input2
75
```

```output2
0
```

There are no positive integers $N$ such that $rev(N) = N + 75$.

```input3
864197532
```

```output3
1920
```