Score : $700$ points

## Problem Statement

There is an integer sequence $x = (x_1, \ldots, x_N)$, which is initialized with $x_1 = \cdots = x_N = 0$.

You will perform $M$ operations on this integer sequence. In the $i$-th operation, you are given an integer pair $(L_i, R_i)$ such that $1 \leq L_i \leq R_i \leq N$, and you must perform **exactly one** of the following three operations:

- Operation $0$: Do nothing. This operation incurs a cost of $0$.
- Operation $1$: For each integer $j$ with $1 \leq j \leq N$, if $L_i \leq j \leq R_i$ **holds**, set $x_j = 1$. This operation incurs a cost of $1$.
- Operation $2$: For each integer $j$ with $1 \leq j \leq N$, if $L_i \leq j \leq R_i$ **does not hold**, set $x_j = 1$. This operation incurs a cost of $1$.

Your goal is to make $x_1 = \cdots = x_N = 1$ hold at the end. Determine whether this goal can be achieved. If it can be achieved, present one way to achieve it where the total cost of the operations is minimized.

## Constraints

- $1 \leq N \leq 1000000$
- $1 \leq M \leq 200000$
- $1 \leq L_i \leq R_i \leq N$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $L_1$ $R_1$
> 
> $\vdots$
> 
> $L_M$ $R_M$

## Output

If the goal is not achievable, print `-1`.

If the goal is achievable, print one way to achieve it where the total cost of the operations is minimized, in the following format, where $K$ is the minimum total cost of the operations, and $\mathrm{op}_i$ is the type of operation ($0$, $1$, or $2$) chosen for the $i$-th operation.

> $K$
> 
> $\mathrm{op}_1$ $\cdots$ $\mathrm{op}_M$

If there are multiple ways that minimize the total cost, printing any one of them is accepted.

```input1
5 4
2 4
3 5
1 4
2 5
```

```output1
2
2 0 1 0
```

In the sample output, $x$ changes as follows:

- Initially, $x = (0,0,0,0,0)$.
- In the 1st operation, Operation $2$ is performed. $x_1$ and $x_5$ become 1, so $x = (1,0,0,0,1)$.
- In the 2nd operation, Operation $0$ is performed. $x$ remains $(1,0,0,0,1)$.
- In the 3rd operation, Operation $1$ is performed. $x_1, x_2, x_3, x_4$ become 1, so $x = (1,1,1,1,1)$.
- In the 4th operation, Operation $0$ is performed. $x$ remains $(1,1,1,1,1)$.

```input2
5 4
1 3
1 5
2 4
3 5
```

```output2
1
0 1 0 0
```

```input3
5 2
1 3
2 5
```

```output3
2
1 1
```

```input4
5 2
1 3
2 4
```

```output4
-1
```