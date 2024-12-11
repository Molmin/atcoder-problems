Score : $200$ points

## Problem Statement

Takahashi has a string $S$ consisting of lowercase English letters.

On this string, he will do the operation below just once.

- First, choose a non-negative integer $K$.
- Then, shift each character of $S$ to the right by $K$ (see below).

Here,

- `a` shifted to the right by $1$ is `b`;
- `b` shifted to the right by $1$ is `c`;
- `c` shifted to the right by $1$ is `d`;
- $\cdots$
- `y` shifted to the right by $1$ is `z`;
- **`z` shifted to the right by $1$ is `a`.**

For example, `b` shifted to the right by $4$ is `f`, and `y` shifted to the right by $3$ is `b`.

You are given a string $T$.
Determine whether Takahashi can make $S$ equal $T$ by the operation above.

## Constraints

- Each of $S$ and $T$ is a string of length between $1$ and $10^5$ (inclusive) consisting of lowercase English letters.
- The lengths of $S$ and $T$ are equal.

## Input

Input is given from Standard Input in the following format:

> $S$
> 
> $T$

## Output

If Takahashi can make $S$ equal $T$, print `Yes`; if not, print `No`.

```input1
abc
ijk
```

```output1
Yes
```

When Takahashi chooses $K=8$,

- `a` is shifted to the right by $8$ and becomes `i`,
- `b` is shifted to the right by $8$ and becomes `j`,
- `c` is shifted to the right by $8$ and becomes `k`,

and now $S$ and $T$ are equal.<br>
Therefore, he can make $S$ equal $T$, so `Yes` should be printed.

```input2
z
a
```

```output2
Yes
```

Choosing $K=1$ makes $S$ and $T$ equal.<br>
Note that the letter on the right of `z` is `a`.

```input3
ppq
qqp
```

```output3
No
```

There is no non-negative integer $K$ that he can choose to make $S$ equal $T$, so `No` should be printed.

```input4
atcoder
atcoder
```

```output4
Yes
```

Choosing $K=0$ makes $S$ and $T$ equal.