Score : $100$ points

## Problem Statement

You are given two integers $a$ and $b$.
Determine if $a+b=15$ or $a\times b=15$ or neither holds.

Note that $a+b=15$ and $a\times b=15$ do not hold at the same time.

## Constraints

- $1 \leq a,b \leq 15$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $a$ $b$

## Output

If $a+b=15$, print `+`;
if $a\times b=15$, print `*`;
if neither holds, print `x`.

```input1
4 11
```

```output1
+
```

$4+11=15$.

```input2
3 5
```

```output2
*
```

$3\times 5=15$.

```input3
1 1
```

```output3
x
```

$1+1=2$ and $1\times 1=1$, neither of which is $15$.