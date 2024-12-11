Score : $100$ points

## Problem Statement

Given are integers $a$, $b$, $c$, and $d$.<br>
We will choose integers $x$ and $y$ such that $a \leq x \leq b$ and $c \leq y \leq d$. Find the maximum possible value of $x - y$ here.

## Constraints

- All values in input are integers.
- $-100 \leq a \leq b \leq 100$
- $-100 \leq c \leq d \leq 100$

## Input

Input is given from Standard Input in the following format:

> $a$ $b$
> 
> $c$ $d$

## Output

Print the answer.

```input1
0 10
0 10
```

```output1
10
```

$(x, y) = (10, 0)$ achieves the maximum value $x - y = 10$.

```input2
-100 -100
100 100
```

```output2
-200
```

```input3
-100 100
-100 100
```

```output3
200
```