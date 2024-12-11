Score : $600$ points

## Problem Statement

Snuke has an integer sequence, $a$, of length $N$. The $i$-th element of $a$ ($1$-indexed) is $a_{i}$.

He can perform the following operation any number of times:

- Operation: Choose integers $x$ and $y$ between $1$ and $N$ (inclusive), and add $a_x$ to $a_y$.

He would like to perform this operation between $0$ and $2N$ times (inclusive) so that $a$ satisfies the condition below. Show one such sequence of operations.
It can be proved that such a sequence of operations always exists under the constraints in this problem.

- Condition: $a_1 \leq a_2 \leq ... \leq a_{N}$

## Constraints

- $2 \leq N \leq 50$
- $-10^{6} \leq a_i \leq 10^{6}$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $...$ $a_{N}$

## Output

Let $m$ be the number of operations in your solution. In the first line, print $m$.
In the $i$-th of the subsequent $m$ lines, print the numbers $x$ and $y$ chosen in the $i$-th operation, with a space in between.
The output will be considered correct if $m$ is between $0$ and $2N$ (inclusive) and $a$ satisfies the condition after the $m$ operations.

```input1
3
-2 5 -1
```

```output1
2
2 3
3 3
```

- After the first operation, $a = (-2,5,4)$.
- After the second operation, $a = (-2,5,8)$, and the condition is now satisfied.

```input2
2
-1 -3
```

```output2
1
2 1
```

- After the first operation, $a = (-4,-3)$ and the condition is now satisfied.

```input3
5
0 0 0 0 0
```

```output3
0
```

- The condition is satisfied already in the beginning.