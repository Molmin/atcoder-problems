Score : $100$ points

## Problem Statement

You are given $N$ strings $S_1,S_2,\ldots,S_N$ in this order.

Print $S_N,S_{N-1},\ldots,S_1$ in this order.

## Constraints

- $1\leq N \leq 10$
- $N$ is an integer.
- $S_i$ is a string of length between $1$ and $10$, inclusive, consisting of lowercase English letters, uppercase English letters, and digits.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print $N$ lines.
The $i$-th $(1\leq i \leq N)$ line should contain $S_{N+1-i}$.

```input1
3
Takahashi
Aoki
Snuke
```

```output1
Snuke
Aoki
Takahashi
```

We have $N=3$, $S_1=$ `Takahashi`, $S_2=$ `Aoki`, and $S_3=$ `Snuke`.

Thus, you should print `Snuke`, `Aoki`, and `Takahashi` in this order.

```input2
4
2023
Year
New
Happy
```

```output2
Happy
New
Year
2023
```

The given strings may contain digits.