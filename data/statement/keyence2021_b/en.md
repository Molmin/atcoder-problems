Score : $400$ points

## Problem Statement

Snuke has $N$ balls, each with an integer written on it.
The numbers on the balls are $a_1, a_2, \ldots, a_N$.

He has decided to put these $N$ balls in $K$ boxes. Every ball must be in some box, but there may be boxes with zero or multiple balls.

After he put the balls in the boxes, the lid of each box will show an integer.
Let $x$ be the integer shown on a box. $x$ is the minimum **non-negative** integer such that the box contains no ball with $x$.
For example, the lid of an empty box will show $0$; the lid of a box with balls $0, 1, 3, 5$ will show $2$; the lid of a box with balls $1, 2, 3$ will show $0$.

Find the maximum possible sum of the integers the lids show.             

## Constraints

- All values in input are integers.
- $1 \leq K \leq N \leq 3 \times 10^{5}$
- $0 \leq a_i &lt; N$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $a_1$ $a_2$ $\cdots$ $a_N$

## Output

Print the maximum possible sum of the integers the lids show.     

```input1
4 2
0 1 0 2
```

```output1
4
```

- An optimal solution is to allocate the sets of balls $\{0,1,2 \},\{0\}$ to the boxes.
- In this case, the lids show $3, 1$, respectively, for a total of $4$.

```input2
5 2
0 1 1 2 3
```

```output2
4
```

- An optimal solution is to allocate the (multi)sets of balls $\{0,1,1,2,3\}, \{\}$ to the boxes.
- In this case, the lids show $4, 0$, respectively, for a total of $4$.
- Note that we may have empty boxes.

```input3
20 4
6 2 6 8 4 5 5 8 4 1 7 8 0 3 6 1 1 8 3 0
```

```output3
11
```