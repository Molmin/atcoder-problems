Score : $300$ points

## Problem Statement

Given is a positive integer $N$.
Which are there more of, positive odd divisors of $N$ or positive even divisors of $N$?

You will be given $T$ test cases. Solve each of them.

## Constraints

- All values in input are integers.
- $1 \leq T \leq 2 \times 10^5$
- $1 \leq N \leq 10^{18}$

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $case_1$
> 
> $\vdots$
> 
> $case_T$

Each case is in the following format:

> $N$

## Constraints

Print $T$ lines. The $i$-th line should contain the answer to $case_i$: `Odd` if there are more positive odd divisors, `Even` if there are more positive even divisors, and `Same` if there are the same number of odd and even divisors.

```input1
3
2
998244353
1000000000000000000
```

```output1
Same
Odd
Even
```

$2$ has one positive odd divisor and one positive even divisor.