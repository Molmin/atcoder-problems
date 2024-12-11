Score : $100$ points

## Problem Statement

Takahashi threw three dice, and they showed three numbers $a$, $b$, and $c$.

If there are two same numbers among $a$, $b$, and $c$, print the remaining number. Otherwise, print $0$.

## Constraints

- $1 \leq a,b,c \leq 6$
- All of $a$, $b$, and $c$ are integers.

## Input

Input is given from Standard Input in the following format:

> $a$ $b$ $c$

## Output

If there are two same numbers among $a$, $b$, and $c$, print the remaining number. Otherwise, print $0$.

```input1
2 5 2
```

```output1
5
```

The first and third dice both showed $2$, so we should print the number on the remaining dice, which is $5$.

```input2
4 5 6
```

```output2
0
```

Any two numbers are different, so we should print $0$.

```input3
1 1 1
```

```output3
1
```

Any two numbers are the same. Whichever two dice we choose, the number on the remaining dice will be $1$.