Score : $400$ points

## Problem Statement

You are given a sequence of $N$ positive integers: $A = (A_1, A_2, \dots, A_N)$. Determine whether there is a pair of sequences $B = (B_1, B_2, \dots, B_x), C = (C_1, C_2, \dots, C_y)$ satisfying all of the conditions, and print one such pair if it exists.

- $1 \leq x, y \leq N$.
- $1 \le B_1 &lt; B_2 &lt; \dots &lt; B_{x} \le N$.
- $1 \le C_1 &lt; C_2 &lt; \dots &lt; C_{y} \le N$.
- $B$ and $C$ are different sequences.-   - Here, we consider $B$ and $C$ different when $x \neq y$ or there is an integer $i\ (1 \leq i \leq \min(x, y))$ such that $B_i \neq C_i$.
- $A_{B_1} + A_{B_2} + \dots + A_{B_x}$ and $A_{C_1} + A_{C_2} + \dots + A_{C_y}$ are equal modulo $200$.

## Constraints

- All values in input are integers.
- $2 \le N \le 200$
- $1 \le A_i \le 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

If there is no pair of sequences $B, C$ satisfying the conditions, print a single line containing `No`.<br>
Otherwise, print your choice of $B$ and $C$ in the following format:

> Yes
> 
> $x$ $B_1$ $B_2$ $\dots$ $B_x$
> 
> $y$ $C_1$ $C_2$ $\dots$ $C_y$

The checker is case-insensitive: you can use either uppercase or lowercase letters.

```input1
5
180 186 189 191 218
```

```output1
Yes
1 1
2 3 4
```

For $B=(1),C=(3,4)$, we have $A_1 = 180,\ A_3 + A_4 = 380$, which are equal modulo $200$.<br>
There are other solutions that will also be accepted, such as:

```output1
yEs
4 2 3 4 5
3 1 2 5
```

```input2
2
123 523
```

```output2
Yes
1 1
1 2
```

```input3
6
2013 1012 2765 2021 508 6971
```

```output3
No
```

If there is no pair of sequences satisfying the conditions, print a single line containing `No`.