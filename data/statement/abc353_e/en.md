Score: $500$ points

## Problem Statement

For strings $x$ and $y$, define $f(x, y)$ as follows:

- $f(x, y)$ is the length of the longest common prefix of $x$ and $y$.

You are given $N$ strings $(S_1, \ldots, S_N)$ consisting of lowercase English letters. Find the value of the following expression:

$\displaystyle \sum_{i=1}^{N-1}\sum_{j=i+1}^N f(S_i,S_j)$.

<br>

## Constraints

- $2 \leq N \leq 3\times 10^5$
- $S_i$ is a string consisting of lowercase English letters.
- $1 \leq |S_i|$
- $|S_1|+|S_2|+\ldots+|S_N|\leq 3\times 10^5$
- All input numbers are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ 
> 
> $S_1$ $\ldots$ $S_N$

## Output

Print the answer.

```input1
3
ab abc arc
```

```output1
4
```

- $f(S_1,S_2)=2$
- $f(S_1,S_3)=1$
- $f(S_2,S_3)=1$

Thus, the answer is $f(S_1,S_2) + f(S_1,S_3) + f(S_2,S_3) = 4$.

```input2
11
ab bb aaa bba baba babb aaaba aabbb a a b
```

```output2
32
```