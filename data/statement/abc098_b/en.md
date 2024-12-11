Score : $200$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of lowercase English letters.
We will cut this string at one position into two strings $X$ and $Y$.
Here, we would like to maximize the number of different letters contained in both $X$ and $Y$.
Find the largest possible number of different letters contained in both $X$ and $Y$ when we cut the string at the optimal position.

## Constraints

- $2 \leq N \leq 100$
- $|S| = N$
- $S$ consists of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the largest possible number of different letters contained in both $X$ and $Y$.

```input1
6
aabbca
```

```output1
2
```

If we cut the string between the third and fourth letters into $X =$ `aab` and $Y =$ `bca`, the letters contained in both $X$ and $Y$ are `a` and `b`.
There will never be three or more different letters contained in both $X$ and $Y$, so the answer is $2$.

```input2
10
aaaaaaaaaa
```

```output2
1
```

However we divide $S$, only `a` will be contained in both $X$ and $Y$.

```input3
45
tgxgdqkyjzhyputjjtllptdfxocrylqfqjynmfbfucbir
```

```output3
9
```