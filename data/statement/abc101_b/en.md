Score : $200$ points

## Problem Statement

Let $S(n)$ denote the sum of the digits in the decimal notation of $n$.
For example, $S(101) = 1 + 0 + 1 = 2$.

Given an integer $N$, determine if $S(N)$ divides $N$.

## Constraints

- $1 \leq N \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

If $S(N)$ divides $N$, print `Yes`; if it does not, print `No`.

```input1
12
```

```output1
Yes
```

In this input, $N=12$.
As $S(12) = 1 + 2 = 3$, $S(N)$ divides $N$.

```input2
101
```

```output2
No
```

As $S(101) = 1 + 0 + 1 = 2$, $S(N)$ does not divide $N$.

```input3
999999999
```

```output3
Yes
```