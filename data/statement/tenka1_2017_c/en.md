Score : $300$ points

## Problem Statement

You are given an integer $N$.

Find a triple of positive integers $h$, $n$ and $w$ such that $4/N = 1/h + 1/n + 1/w$.

If there are multiple solutions, any of them will be accepted.

## Constraints

- It is guaranteed that, for the given integer $N$, there exists a solution such that $h,n,w \leq 3500$.

## Inputs

Input is given from Standard Input in the following format:

> $N$

## Outputs

Print a triple of positive integers $h$, $n$ and $w$ that satisfies the condition, in the following format:

> $h$ $n$ $w$

```input1
2
```

```output1
1 2 2
```

$4/2 = 1/1 + 1/2 + 1/2$.

```input2
3485
```

```output2
872 1012974 1539173474040
```

It is allowed to use an integer exceeding $3500$ in a solution.

```input3
4664
```

```output3
3498 3498 3498
```