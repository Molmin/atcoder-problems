Score : $300$ points

## Problem Statement

To make it difficult to withdraw money, a certain bank allows its customers to withdraw only one of the following amounts in one operation:

- <p>$1$ yen (the currency of Japan)</p>
- <p>$6$ yen, $6^2(=36)$ yen, $6^3(=216)$ yen, ...</p>
- <p>$9$ yen, $9^2(=81)$ yen, $9^3(=729)$ yen, ...</p>

At least how many operations are required to withdraw exactly $N$ yen in total?

It is not allowed to re-deposit the money you withdrew.

## Constraints

- $1 \leq N \leq 100000$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

If at least $x$ operations are required to withdraw exactly $N$ yen in total, print $x$.

```input1
127
```

```output1
4
```

By withdrawing $1$ yen, $9$ yen, $36(=6^2)$ yen and $81(=9^2)$ yen, we can withdraw $127$ yen in four operations.

```input2
3
```

```output2
3
```

By withdrawing $1$ yen three times, we can withdraw $3$ yen in three operations.

```input3
44852
```

```output3
16
```