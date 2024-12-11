Score : $700$ points

## Problem Statement

Given are a prime number $P$ and positive integers $a$ and $b$.
Determine whether there is a sequence of $P$ integers, $A = (A_1, A_2, \ldots, A_P)$, satisfying all of the conditions below, and print one such sequence if it exists.

- $1\leq A_i\leq P - 1$.
- $A_1 = A_P = 1$.
- $(A_1, A_2, \ldots, A_{P-1})$ is a permutation of $(1, 2, \ldots, P-1)$.
- For every $2\leq i\leq P$, at least one of the following holds.-   - $A_{i} \equiv aA_{i-1}\pmod{P}$
-   - $A_{i-1} \equiv aA_{i}\pmod{P}$
-   - $A_{i} \equiv bA_{i-1}\pmod{P}$
-   - $A_{i-1} \equiv bA_{i}\pmod{P}$

## Constraints

- $2\leq P\leq 10^5$
- $P$ is a prime.
- $1\leq a, b \leq P - 1$

## Input

Input is given from Standard Input in the following format:

> $P$ $a$ $b$

## Output

If there is an integer sequence $A$ satisfying the conditions, print `Yes`; otherwise, print `No`.
In the case of `Yes`, print the elements in your sequence $A$ satisfying the requirement in the next line, with spaces in between.

> $A_1$ $A_2$ $\ldots$ $A_P$

If multiple sequences satisfy the requirement, any of them will be accepted.

```input1
13 4 5
```

```output1
Yes
1 5 11 3 12 9 7 4 6 8 2 10 1
```

This sequence satisfies the conditions, since we have the following modulo $P = 13$:

- $A_2\equiv 5A_1$
- $A_2\equiv 4A_3$
- $\vdots$
- $A_{13}\equiv 4A_{12}$

```input2
13 1 2
```

```output2
Yes
1 2 4 8 3 6 12 11 9 5 10 7 1
```

```input3
13 9 3
```

```output3
No
```

```input4
13 1 1
```

```output4
No
```