Score : $300$ points

## Problem Statement

Given are integers $A$ and $B$. Find the maximum possible value of $\gcd(x, y)$ when we choose integers $x$ and $y$ so that $A \leq x &lt; y \leq B$.<br>
Here, $\gcd(x, y)$ denotes the greatest common divisor of $x$ and $y$. 

## Constraints

- $A$ and $B$ are integers.
- $1 \leq A &lt; B \leq 2 \times 10^5$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the answer.

```input1
2 4
```

```output1
2
```

We have three ways to choose $(x, y)$ such that $A \leq x &lt; y \leq B$: $(2,3), (2,4), (3,4)$, where the greatest common divisors are $1, 2, 1$, respectively, so the maximum possible value is $2$.

```input2
199999 200000
```

```output2
1
```

We have $\gcd(199999, 200000) = 1$.

```input3
101 139
```

```output3
34
```