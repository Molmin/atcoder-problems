Score : $300$ points

## Problem Statement

Given is a number sequence $A$ of length $N$.<br>
Find the sum of squared differences of every pair of elements: $\displaystyle \sum_{i = 2}^{N} \sum_{j = 1}^{i - 1} (A_i - A_j)^2$.

## Constraints

- $2 \le N \le 3 \times 10^5$
- $|A_i| \le 200$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $A_3$ $\cdots$ $A_N$

## Output

Print the answer.

```input1
3
2 8 4
```

```output1
56
```

We have $\sum_{i = 2}^{N} \sum_{j = 1}^{i - 1} (A_i - A_j)^2 = (8 - 2)^2 + (4 - 2) ^ 2 + (4 - 8) ^ 2 = 56$.

```input2
5
-5 8 9 -4 -3
```

```output2
950
```