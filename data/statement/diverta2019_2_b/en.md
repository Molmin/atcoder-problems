Score : $300$ points

## Problem Statement

There are $N$ balls in a two-dimensional plane. The $i$-th ball is at coordinates $(x_i, y_i)$.

We will collect all of these balls, by choosing two integers $p$ and $q$ such that $p \neq 0$ or $q \neq 0$ and then repeating the following operation:

- Choose a ball remaining in the plane and collect it. Let $(a, b)$ be the coordinates of this ball. If we collected a ball at coordinates $(a - p, b - q)$ in the previous operation, the cost of this operation is $0$. Otherwise, including when this is the first time to do this operation, the cost of this operation is $1$.

Find the minimum total cost required to collect all the balls when we optimally choose $p$ and $q$.

## Constraints

- $1 \leq N \leq 50$
- $|x_i|, |y_i| \leq 10^9$
- If $i \neq j$, $x_i \neq x_j$ or $y_i \neq y_j$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $y_1$
> 
> $:$
> 
> $x_N$ $y_N$

## Output

Print the minimum total cost required to collect all the balls.

```input1
2
1 1
2 2
```

```output1
1
```

If we choose $p = 1, q = 1$, we can collect all the balls at a cost of $1$ by collecting them in the order $(1, 1)$, $(2, 2)$.

```input2
3
1 4
4 6
7 8
```

```output2
1
```

If we choose $p = -3, q = -2$, we can collect all the balls at a cost of $1$ by collecting them in the order $(7, 8)$, $(4, 6)$, $(1, 4)$.

```input3
4
1 1
1 2
2 1
2 2
```

```output3
2
```