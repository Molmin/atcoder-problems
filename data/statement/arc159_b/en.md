Score : $400$ points

## Problem Statement

We have variables $a$ and $b$. Initially, $a=A$ and $b=B$.

Takahashi will repeat the following operation while both $a$ and $b$ are greater than or equal to $1$.

- Let $g$ be the greatest common divisor of $a$ and $b$, and replace $a$ and $b$ with $a-g$ and $b-g$, respectively.

How many times will he perform the operation?

## Constraints

- $1 \leq A,B \leq 10^{12}$
- $A$ and $B$ are integers.

## Input

The input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the answer.

```input1
15 9
```

```output1
2
```

We start with $a=15,b=9$ and perform the following.

- Let $g=3$, and replace $a$ and $b$ with $12(=15-3)$ and $6(=9-3)$, respectively.
- Let $g=6$, and replace $a$ and $b$ with $6(=12-6)$ and $0(=6-6)$, respectively. $b$ is no longer greater than or equal to $1$, so the iteration terminates.

```input2
1 1
```

```output2
1
```

```input3
12345678910 10987654321
```

```output3
36135
```