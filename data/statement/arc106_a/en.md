Score : $300$ points

## Problem Statement

Given is an integer $N$.
Determine whether there is a pair of positive integers $(A, B)$ such that $3^A + 5^B = N$, and find one such pair if it exists.

## Constraints

- $1 \leq N \leq 10^{18}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

If there is no pair $(A, B)$ that satisfies the condition, print `-1`.

If there is such a pair, print $A$ and $B$ of one such pair with space in between. If there are multiple such pairs, any of them will be accepted.

```input1
106
```

```output1
4 2
```

We have $3^4 + 5^2 = 81 + 25 = 106$, so $(A, B) = (4, 2)$ satisfies the condition.

```input2
1024
```

```output2
-1
```

```input3
10460353208
```

```output3
21 1
```