Score : $150$ points

## Problem Statement

You are given an integer $X$ not less than $2$.

Find the positive integer $N$ such that $N! = X$.

Here, $N!$ denotes the factorial of $N$, and it is guaranteed that there is exactly one such $N$.

## Constraints

- $2 \leq X \leq 3 \times 10^{18}$
- There is exactly one positive integer $N$ such that $N!=X$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $X$

## Output

Print the answer.

```input1
6
```

```output1
3
```

From $3!=3\times2\times1=6$, print $3$.

```input2
2432902008176640000
```

```output2
20
```

From $20!=2432902008176640000$, print $20$.