Score : $300$ points

## Problem Statement

You are given two non-negative integers $L$ and $R$.
We will choose two integers $i$ and $j$ such that $L \leq i &lt; j \leq R$.
Find the minimum possible value of $(i \times j) \text{ mod } 2019$.

## Constraints

- All values in input are integers.
- $0 \leq L &lt; R \leq 2 \times 10^9$

## Input

Input is given from Standard Input in the following format:

> $L$ $R$

## Output

Print the minimum possible value of $(i \times j) \text{ mod } 2019$ when $i$ and $j$ are chosen under the given condition.

```input1
2020 2040
```

```output1
2
```

When $(i, j) = (2020, 2021)$, $(i \times j) \text{ mod } 2019 = 2$.

```input2
4 5
```

```output2
20
```

We have only one choice: $(i, j) = (4, 5)$.