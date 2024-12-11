Score : $100$ points

## Problem Statement

Given is an integer $N$.

Takahashi chooses an integer $a$ from the positive integers not greater than $N$ with equal probability.

Find the probability that $a$ is odd.

## Constraints

- $1 \leq N \leq 100$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the probability that $a$ is odd.
Your output will be considered correct when its absolute or relative error from the judge's output is at most $10^{-6}$.

```input1
4
```

```output1
0.5000000000
```

There are four positive integers not greater than $4$: $1$, $2$, $3$, and $4$. Among them, we have two odd numbers: $1$ and $3$. Thus, the answer is $\frac{2}{4} = 0.5$.

```input2
5
```

```output2
0.6000000000
```

```input3
1
```

```output3
1.0000000000
```