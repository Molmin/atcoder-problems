Score : $500$ points

## Problem Statement

Given is an integer $N$.

Find one string $s$ consisting of `1`, `2`, $\cdots$, `9` that satisfies the conditions below.

- The length of $s$, $|s|$, is at most $10^6$.
- There are exactly $N$ pairs of integers $(l,r)$ ($1 \leq l \leq r \leq |s|$) that satisfy the following condition.-   - When the $l$-th through $r$-th characters of $s$ are extracted and seen as a number, it is divisible by $7$.

Under the Constraints of this problem, we can prove that a solution always exists.

## Constraints

- $1 \leq N \leq 10^6$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print a string $s$ that satisfies the conditions.
If multiple solutions exist, printing any of them would be accepted.

```input1
2
```

```output1
142
```

Two pairs $(l,r)=(1,2),(2,3)$ satisfy the conditions.

```input2
3
```

```output2
77
```

Three pairs $(l,r)=(1,1),(2,2),(1,2)$ satisfy the conditions.