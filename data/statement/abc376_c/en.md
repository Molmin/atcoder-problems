Score : $350$ points

## Problem Statement

There are $N$ toys numbered from $1$ to $N$, and $N-1$ boxes numbered from $1$ to $N-1$.
Toy $i\ (1 \leq i \leq N)$ has a size of $A_i$, and box $i\ (1 \leq i \leq N-1)$ has a size of $B_i$.

Takahashi wants to store all the toys in separate boxes, and he has decided to perform the following steps in order:

1. Choose an arbitrary positive integer $x$ and purchase one box of size $x$.
2. Place each of the $N$ toys into one of the $N$ boxes (the $N-1$ existing boxes plus the newly purchased box).
Here, each toy can only be placed in a box whose size is not less than the toy's size, and no box can contain two or more toys.

He wants to execute step $2$ by purchasing a sufficiently large box in step $1$, but larger boxes are more expensive, so he wants to purchase the smallest possible box.

Determine whether there exists a value of $x$ such that he can execute step $2$, and if it exists, find the minimum such $x$.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq A_i, B_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $\dots$ $B_{N-1}$

## Output

If there exists a value of $x$ such that Takahashi can execute step $2$, print the minimum such $x$. Otherwise, print `-1`.

```input1
4
5 2 3 7
6 2 8
```

```output1
3
```

Consider the case where $x=3$ (that is, he purchases a box of size $3$ in step $1$).

If the newly purchased box is called box $4$, toys $1,\dots,4$ have sizes of $5$, $2$, $3$, and $7$, respectively, and boxes $1,\dots,4$ have sizes of $6$, $2$, $8$, and $3$, respectively.
Thus, toy $1$ can be placed in box $1$, toy $2$ in box $2$, toy $3$ in box $4$, and toy $4$ in box $3$.

On the other hand, if $x \leq 2$, it is impossible to place all $N$ toys into separate boxes.
Therefore, the answer is $3$.

```input2
4
3 7 2 5
8 1 6
```

```output2
-1
```

No matter what size of box is purchased in step $1$, no toy can be placed in box $2$, so it is impossible to execute step $2$.

```input3
8
2 28 17 39 57 56 37 32
34 27 73 28 76 61 27
```

```output3
37
```