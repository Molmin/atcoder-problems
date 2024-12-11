Score : $500$ points

## Problem Statement

Given is a positive integer $N$.
Find the value $\displaystyle\sum_{i=1}^N \left[ \frac{N}{i} \right]$.

Here, for a real number $x$, $[x]$ denotes the largest integer not exceeding $x$.

## Constraints

- $1 \leq N \leq 10^{12}$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
3
```

```output1
5
```

We have $\left[ \frac{3}{1} \right]+\left[ \frac{3}{2} \right]+\left[ \frac{3}{3} \right]=3+1+1=5$.

```input2
10000000000
```

```output2
231802823220
```

Note that the input and output may not fit into a $32$-bit integer type.