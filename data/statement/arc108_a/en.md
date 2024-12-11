Score : $300$ points

## Problem Statement

Given are integers $S$ and $P$.
Is there a pair of positive integers $(N,M)$ such that $N + M = S$ and $N \times M = P$?

## Constraints

- All values in input are integers.
- $1 \leq S,P \leq 10^{12}$

## Input

Input is given from Standard Input in the following format:

> $S$ $P$

## Output

If there is a pair of positive integers $(N,M)$ such that $N + M = S$ and $N \times M = P$, print `Yes`; otherwise, print `No`.

```input1
3 2
```

```output1
Yes
```

- For example, we have $N+M=3$ and $N \times M =2$ for $N=1,M=2$.

```input2
1000000000000 1
```

```output2
No
```

- There is no such pair $(N,M)$.