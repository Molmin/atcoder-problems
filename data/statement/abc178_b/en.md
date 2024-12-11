Score : $200$ points

## Problem Statement

Given are integers $a,b,c$ and $d$.
If $x$ and $y$ are integers and $a \leq x \leq b$ and $c\leq y \leq d$ hold, what is the maximum possible value of $x \times y$?

## Constraints

- $-10^9 \leq a \leq b \leq 10^9$
- $-10^9 \leq c \leq d \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $a$ $b$ $c$ $d$

## Output

Print the answer.

```input1
1 2 1 1
```

```output1
2
```

If $x = 1$ and $y = 1$ then $x \times y = 1$.
If $x = 2$ and $y = 1$ then $x \times y = 2$.
Therefore, the answer is $2$.

```input2
3 5 -4 -2
```

```output2
-6
```

The answer can be negative.

```input3
-1000000000 0 -1000000000 0
```

```output3
1000000000000000000
```