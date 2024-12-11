Score : $200$ points

## Problem Statement

We ask you to select some number of positive integers, and calculate the sum of them.

It is allowed to select as many integers as you like, and as large integers as you wish.
You have to follow these, however: each selected integer needs to be a multiple of $A$, and you need to select at least one integer.

Your objective is to make the sum congruent to $C$ modulo $B$.
Determine whether this is possible.

If the objective is achievable, print `YES`. Otherwise, print `NO`.

## Constraints

- $1 \leq A \leq 100$
- $1 \leq B \leq 100$
- $0 \leq C &lt; B$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$

## Output

Print `YES` or `NO`.

```input1
7 5 1
```

```output1
YES
```

For example, if you select $7$ and $14$, the sum $21$ is congruent to $1$ modulo $5$.

```input2
2 2 1
```

```output2
NO
```

The sum of even numbers, no matter how many, is never odd.

```input3
1 100 97
```

```output3
YES
```

You can select $97$, since you may select multiples of $1$, that is, all integers.

```input4
40 98 58
```

```output4
YES
```

```input5
77 42 36
```

```output5
NO
```