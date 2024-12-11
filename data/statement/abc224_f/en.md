Score : $500$ points

## Problem Statement

Given is a string $S$ consisting of digits from $1$ through $9$.<br>
From this string $S$, let us make a formula $T$ by the following operations.

- Initially, let $T=S$.
- Choose a (possibly empty) set $A$ of different integers where each element is between $1$ and $|S|-1$ (inclusive).
- For each element $x$ in descending order, do the following.-   - Insert a `+` between the $x$-th and $(x+1)$-th characters of $T$.

For example, when $S=$ `1234` and $A= \lbrace 2,3 \rbrace$, we will have $T$= `12+3+4`.

Consider evaluating all possible formulae $T$ obtained by these operations. Find the sum, modulo $998244353$, of the evaluations.

## Constraints

- $1 \le |S| \le 2 \times 10^5$
- $S$ consists of `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, and `9`.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
1234
```

```output1
1736
```

There are eight formulae that can be obtained as $T$: `1234`, `123+4`, `12+34`, `12+3+4`, `1+234`, `1+23+4`, `1+2+34`, and `1+2+3+4`.<br>
The sum of the evaluations of these formulae is $1736$.

```input2
1
```

```output2
1
```

$S$ may have a length of $1$, in which case the only possible choice for $A$ is the empty set.

```input3
31415926535897932384626433832795
```

```output3
85607943
```

Be sure to find the sum modulo $998244353$.