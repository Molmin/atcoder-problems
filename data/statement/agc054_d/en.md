Score : $1000$ points

## Problem Statement

Given is a string $S$ consisting of `(`, `)`, `o`, and `x`.
You can swap two adjacent characters in $S$ any number of times.
Find the minimum number of swaps needed to satisfy the following condition.

- Let us make a string $S'$ consisting of `(` and `)` by replacing every occurrence of `o` with `()` and every occurrence of `x` with `)(` in $S$.
Then, $S'$ is a **balanced parenthesis string**.

Definition of a balanced parenthesis string

A balanced parenthesis string is a string that is one of the following:

- an empty string;
- a string that is a concatenation of $s$, $t$ in this order, where $s$ and $t$ are some non-empty balanced parenthesis strings;
- a string that is a concatenation of `(`, $s$, `)` in this order, where $s$ is some balanced parenthesis string.

Under the Constraints of this problem, it is always possible to achieve the objective.

## Constraints

- $S$ is a string consisting of `(`, `)`, `o`, and `x`.
- $S$ contains the same non-zero number of `(`s and `)`s.
- $|S| \leq 8000$

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
)x(
```

```output1
3
```

We should do as follows: `)x(` → `x)(` → `x()` → `(x)`.
Here, we have $S'=$`()()`, which is a balanced parenthesis string.

```input2
()ox
```

```output2
2
```

```input3
()oxo(xxx))))oox((oooxxoxo)oxo)ooo(xxx(oox(x)(x()x
```

```output3
68
```