Score : $500$ points

## Problem Statement

Let the **similarity** $f(X,Y)$ between two strings $X$ and $Y$ be the length of their longest common prefix.<br>
For example, the similarity between `abc` and `axbc` is $1$, and the similarity between `aaa` and `aaaa` is $3$.

You are given a string $S$ of length $N$. Let $S_i$ be the suffix of $S$ beginning with the $i$-th character of $S$. For each $k=1,\ldots,N$, find $f(S_k,S_1)+f(S_k,S_2)+\ldots+f(S_k,S_N)$.

## Constraints

- $1 \leq N \leq 10^6$
- $S$ is a string of length $N$ consisting of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print $N$ lines.

The $i$-th line should contain the answer for $k=i$.

```input1
3
abb
```

```output1
3
3
2
```

$S_1$ is `abb`, $S_2$ is `bb`, and $S_3$ is `b`.

- For $k=1$: $f(S_1,S_1)+f(S_1,S_2)+f(S_1,S_3)=3+0+0=3$.
- For $k=2$: $f(S_2,S_1)+f(S_2,S_2)+f(S_2,S_3)=0+2+1=3$.
- For $k=3$: $f(S_3,S_1)+f(S_3,S_2)+f(S_3,S_3)=0+1+1=2$.

```input2
11
mississippi
```

```output2
11
16
14
12
13
11
9
7
4
3
4
```