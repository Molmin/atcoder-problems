Score : $400$ points

## Problem Statement

Let $\mathrm{popcount}(n)$ be the number of `1`s in the binary representation of $n$.
For example, $\mathrm{popcount}(3) = 2$, $\mathrm{popcount}(7) = 3$, and $\mathrm{popcount}(0) = 0$.

Let $f(n)$ be the number of times the following operation will be done when we repeat it until $n$ becomes $0$: "replace $n$ with the remainder when $n$ is divided by $\mathrm{popcount}(n)$." (It can be proved that, under the constraints of this problem, $n$ always becomes $0$ after a finite number of operations.)

For example, when $n=7$, it becomes $0$ after two operations, as follows:

- $\mathrm{popcount}(7)=3$, so we divide $7$ by $3$ and replace it with the remainder, $1$.
- $\mathrm{popcount}(1)=1$, so we divide $1$ by $1$ and replace it with the remainder, $0$.

You are given an integer $X$ with $N$ digits in binary.
For each integer $i$ such that $1 \leq i \leq N$, let $X_i$ be what $X$ becomes when the $i$-th bit from the top is inverted.
Find $f(X_1), f(X_2), \ldots, f(X_N)$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $X$ is an integer with $N$ digits in binary, possibly with leading zeros.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $X$

## Output

Print $N$ lines. The $i$-th line should contain the value $f(X_i)$.

```input1
3
011
```

```output1
2
1
1
```

- $X_1 = 7$, which will change as follows: $7 \rightarrow 1 \rightarrow 0$. Thus, $f(7) = 2$.
- $X_2 = 1$, which will change as follows: $1 \rightarrow 0$. Thus, $f(1) = 1$.
- $X_3 = 2$, which will change as follows: $2 \rightarrow 0$. Thus, $f(2) = 1$.

```input2
23
00110111001011011001110
```

```output2
2
1
2
2
1
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
1
3
```