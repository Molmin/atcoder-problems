Score : $500$ points

## Problem Statement

Given an integer $N$ not less than $2$, find the number of integers $b$ not less than $2$ such that:

- when $N$ is written in base $b$, every digit is $0$ or $1$.

Find the answer for $T$ independent test cases.

It can be proved that there is a finite number of desired integers $b$ not less than $2$ under the constraints of this problem.

## Constraints

- $1 \leq T \leq 1000$
- $2 \leq N \leq 10^{18}$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format, where $\mathrm{test}_i$ denotes the $i$-th test case:

> $T$
> 
> $\mathrm{test}_1$
> 
> $\mathrm{test}_2$
> 
> $\vdots$
> 
> $\mathrm{test}_T$

Each test case is given in the following format:

> $N$

## Output

Print $T$ lines.
For $i = 1, 2, \ldots, T$, the $i$-th line should contain the answer to the $i$-th test case.

```input1
3
12
2
36
```

```output1
4
1
5
```

For the first test case, four $b$'s satisfy the condition in the problem statement: $b = 2, 3, 11, 12$.
Indeed, when $N=12$ is written in base $2, 3, 11$, and $12$, it becomes $1100, 110, 11$ and $10$, respectively.