Score : $300$ points

## Problem Statement

You are given two strings $S$ and $T$.
Determine whether it is possible to make $S$ equal $T$ by performing the following operation some number of times (possibly zero).

Between two consecutive equal characters in $S$, insert a character equal to these characters.
That is, take the following three steps.

1. Let $N$ be the current length of $S$, and $S = S_1S_2\ldots S_N$.
2. Choose an integer $i$ between $1$ and $N-1$ (inclusive) such that $S_i = S_{i+1}$. (If there is no such $i$, do nothing and terminate the operation now, skipping step 3.)
3. Insert a single copy of the character $S_i(= S_{i+1})$ between the $i$-th and $(i+1)$-th characters of $S$. Now, $S$ is a string of length $N+1$: $S_1S_2\ldots S_i S_i S_{i+1} \ldots S_N$.

## Constraints

- Each of $S$ and $T$ is a string of length between $2$ and $2 \times 10^5$ (inclusive) consisting of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $S$
> 
> $T$

## Output

If it is possible to make $S$ equal $T$, print `Yes`; otherwise, print `No`.
Note that the judge is case-sensitive.

```input1
abbaac
abbbbaaac
```

```output1
Yes
```

You can make $S =$ `abbaac` equal $T =$ `abbbbaaac` by the following three operations.

- First, insert `b` between the $2$-nd and $3$-rd characters of $S$. Now, $S =$ `abbbaac`.
- Next, insert `b` again between the $2$-nd and $3$-rd characters of $S$. Now, $S =$ `abbbbaac`.
- Lastly, insert `a` between the $6$-th and $7$-th characters of $S$. Now, $S =$ `abbbbaaac`.

Thus, `Yes` should be printed.

```input2
xyzz
xyyzz
```

```output2
No
```

No sequence of operations makes $S =$ `xyzz` equal $T =$ `xyyzz`.
Thus, `No` should be printed.