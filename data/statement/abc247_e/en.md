Score : $500$ points

## Problem Statement

We have a number sequence $A = (A_1, A_2, \dots, A_N)$ of length $N$ and integers $X$ and $Y$.
Find the number of pairs of integers $(L, R)$ satisfying all the conditions below.

- $1 \leq L \leq R \leq N$
- The maximum value of $A_L, A_{L+1}, \dots, A_R$ is $X$, and the minimum is $Y$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq 2 \times 10^5$
- $1 \leq Y \leq X \leq 2 \times 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $X$ $Y$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
4 3 1
1 2 3 1
```

```output1
4
```

$4$ pairs satisfy the conditions: $(L,R)=(1,3),(1,4),(2,4),(3,4)$.

```input2
5 2 1
1 3 2 4 1
```

```output2
0
```

No pair $(L,R)$ satisfies the condition.

```input3
5 1 1
1 1 1 1 1
```

```output3
15
```

It may hold that $X=Y$.

```input4
10 8 1
2 7 1 8 2 8 1 8 2 8
```

```output4
36
```