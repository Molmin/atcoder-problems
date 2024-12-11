Score : $300$ points

## Problem Statement

Ringo loves the integer $200$. Solve the problem below for him.<br>
Given a sequence $A$ of $N$ positive integers, find the pair of integers $(i, j)$ satisfying all of the following conditions:

- $1 \le i &lt; j \le N$;
- $A_i - A_j$ is a multiple of $200$.

## Constraints

- All values in input are integers.
- $2 \le N \le 2 \times 10^5$
- $1 \le A_i \le 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer as an integer.

```input1
6
123 223 123 523 200 2000
```

```output1
4
```

For example, for $(i, j) = (1, 3)$, $A_1 - A_3 = 0$ is a multiple of $200$.<br>
We have four pairs satisfying the conditions: $(i,j)=(1,3),(1,4),(3,4),(5,6)$.

```input2
5
1 2 3 4 5
```

```output2
0
```

There may be no pair satisfying the conditions.

```input3
8
199 100 200 400 300 500 600 200
```

```output3
9
```