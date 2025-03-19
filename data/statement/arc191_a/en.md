Score : $400$ points

## Problem Statement

You are given a string $S$ of length $N$ and a string $T$ of length $M$, both consisting of digits from `1` to `9`.

You will perform the following operation for $k=1,2,\ldots,M$ in order:

- Choose an integer $i$ such that $1 \le i \le N$. Then, replace the $i$-th character of $S$ with the $k$-th character of $T$.

Find the maximum possible value of the resulting string $S$ interpreted as an integer after performing the $M$ operations.

## Constraints

- $1 \le N,M \le 10^6$
- $N$ and $M$ are integers.
- $S$ is a string of length $N$ consisting of digits from `1` through `9`.
- $T$ is a string of length $M$ consisting of digits from `1` through `9`.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $S$
> 
> $T$

## Output

Print the maximum possible value of the resulting string $S$ interpreted as an integer after performing the $M$ operations.

```input1
3 3
191
325
```

```output1
593
```

The following sequence of operations is optimal:

- For $k=1$: Choose $i=3$. Then, $S =$ `193`.
- For $k=2$: Choose $i=1$. Then, $S =$ `293`.
- For $k=3$: Choose $i=1$. Then, $S =$ `593`.

In this case, the value of $S$ interpreted as an integer is $593$, which is the maximum.

```input2
3 9
191
998244353
```

```output2
993
```

```input3
11 13
31415926535
2718281828459
```

```output3
98888976555
```