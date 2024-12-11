Score: $500$ points

## Problem Statement

Solve the following problem for $T$ test cases.

Given an integer $N$, find the number of integers $x$ that satisfy all of the following conditions:

- $1 \le x \le N$
- Let $y = \lfloor \sqrt{x} \rfloor$. When $x$ and $y$ are written in decimal notation (without leading zeros), $y$ is a prefix of $x$.

## Constraints

- $T$ is an integer such that $1 \le T \le 10^5$.
- $N$ is an integer such that $1 \le N \le 10^{18}$.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $N_1$
> 
> $N_2$
> 
> $\vdots$
> 
> $N_T$

Here, $N_i$ represents the integer $N$ for the $i$-th test case.

## Output

Print $T$ lines in total.
The $i$-th line should contain the answer for the $i$-th test case as an integer.

```input1
2
1
174
```

```output1
1
22
```

This input contains two test cases.

- For the first test case, $x=1$ satisfies the conditions since $y = \lfloor \sqrt{1} \rfloor = 1$.
- For the second test case, for example, $x=100$ satisfies the conditions since $y = \lfloor \sqrt{100} \rfloor = 10$.