Score : $1200$ points

## Problem Statement

We have $N$ boxes numbered $1$ to $N$, and $M$ balls numbered $1$ to $M$.
Currently, Ball $i$ is in Box $A_i$.

You can do the following operation:

- Choose a box containing two or more balls, pick up one of the balls from that box, and put it into another box.

Since the balls are very easy to break, you cannot move Ball $i$ more than $C_i$ times in total.
Within this limit, you can do the operation any number of times.

Your objective is to have Ball $i$ in Box $B_i$ for every $i$ ($1 \leq i \leq M$).
Determine whether this objective is achievable.
If it is, also find the minimum number of operations required to achieve it.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq M \leq 10^5$
- $1 \leq A_i,B_i \leq N$
- $1 \leq C_i \leq 10^5$
- In the situation where the objective is achieved, every box contains one or more balls.
That is, for every $i$ ($1 \leq i \leq N$), there exists $j$ such that $B_j=i$.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$ $C_1$
> 
> $A_2$ $B_2$ $C_2$
> 
> $\vdots$
> 
> $A_M$ $B_M$ $C_M$

## Output

If the objective is unachievable, print $-1$; if it is achievable, print the minimum number of operations required to achieve it.

```input1
3 3
1 2 1
2 1 1
1 3 2
```

```output1
3
```

We can achieve the objective in three operations, as follows:

- Pick up Ball $1$ from Box $1$ and put it into Box $2$.
- Pick up Ball $2$ from Box $2$ and put it into Box $1$.
- Pick up Ball $3$ from Box $1$ and put it into Box $3$.

```input2
2 2
1 2 1
2 1 1
```

```output2
-1
```

```input3
5 5
1 2 1
2 1 1
1 3 2
4 5 1
5 4 1
```

```output3
6
```

```input4
1 1
1 1 1
```

```output4
0
```