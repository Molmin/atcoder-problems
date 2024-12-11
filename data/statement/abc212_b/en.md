Score : $200$ points

## Problem Statement

You are given a $4$-digit PIN: $X_1X_2X_3X_4$, which may begin with a $0$.
The PIN is said to be weak when it satisfies one of the following conditions:

- All of the four digits are the same.
- For each integer $i$ such that $1\leq i\leq 3$, $X_{i+1}$ follows $X_i$. Here, $j+1$ follows $j$ for each $0\leq j\leq 8$, and $0$ follows $9$.

If the given PIN is weak, print `Weak`; otherwise, print `Strong`.

## Constraints

- $0 \leq X_1, X_2, X_3, X_4 \leq 9$
- $X_1$, $X_2$, $X_3$, and $X_4$ are integers.

## Input

Input is given from Standard Input in the following format:

> $X_1X_2X_3X_4$

## Output

If the given PIN is weak, print `Weak`; otherwise, print `Strong`.

```input1
7777
```

```output1
Weak
```

All four digits are $7$, satisfying the first condition, so this PIN is weak.

```input2
0112
```

```output2
Strong
```

The first and second digits differ, and the third digit does not follow the second digit, so neither condition is satisfied.

```input3
9012
```

```output3
Weak
```

Note that $0$ follows $9$.