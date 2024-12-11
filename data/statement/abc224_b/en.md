Score : $200$ points

## Problem Statement

We have a grid with $H$ horizontal rows and $W$ vertical columns, where each square contains an integer.
The integer written on the square at the $i$-th row from the top and $j$-th column from the left is $A_{i, j}$.

Determine whether the grid satisfies the condition below.

$A_{i_1, j_1} + A_{i_2, j_2} \leq A_{i_2, j_1} + A_{i_1, j_2}$ holds for every quadruple of integers $(i_1, i_2, j_1, j_2)$ such that $1 \leq i_1 &lt; i_2 \leq H$ and $1 \leq j_1 &lt; j_2 \leq W$.

## Constraints

- $2 \leq H, W \leq 50$
- $1 \leq A_{i, j} \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $A_{1, 1}$ $A_{1, 2}$ $\cdots$ $A_{1, W}$
> 
> $A_{2, 1}$ $A_{2, 2}$ $\cdots$ $A_{2, W}$
> 
> $\vdots$
> 
> $A_{H, 1}$ $A_{H, 2}$ $\cdots$ $A_{H, W}$

## Output

If the grid satisfies the condition in the Problem Statement, print `Yes`; otherwise, print `No`.

```input1
3 3
2 1 4
3 1 3
6 4 1
```

```output1
Yes
```

There are nine quadruples of integers $(i_1, i_2, j_1, j_2)$ such that $1 \leq i_1 &lt; i_2 \leq H$ and $1 \leq j_1 &lt; j_2 \leq W$. For all of them, $A_{i_1, j_1} + A_{i_2, j_2} \leq A_{i_2, j_1} + A_{i_1, j_2}$ holds. Some examples follow.

- For $(i_1, i_2, j_1, j_2) = (1, 2, 1, 2)$, we have $A_{i_1, j_1} + A_{i_2, j_2} = 2 + 1 \leq 3 + 1 = A_{i_2, j_1} + A_{i_1, j_2}$.
- For $(i_1, i_2, j_1, j_2) = (1, 2, 1, 3)$, we have $A_{i_1, j_1} + A_{i_2, j_2} = 2 + 3 \leq 3 + 4 = A_{i_2, j_1} + A_{i_1, j_2}$.
- For $(i_1, i_2, j_1, j_2) = (1, 2, 2, 3)$, we have $A_{i_1, j_1} + A_{i_2, j_2} = 1 + 3 \leq 1 + 4 = A_{i_2, j_1} + A_{i_1, j_2}$.
- For $(i_1, i_2, j_1, j_2) = (1, 3, 1, 2)$, we have $A_{i_1, j_1} + A_{i_2, j_2} = 2 + 4 \leq 6 + 1 = A_{i_2, j_1} + A_{i_1, j_2}$.
- For $(i_1, i_2, j_1, j_2) = (1, 3, 1, 3)$, we have $A_{i_1, j_1} + A_{i_2, j_2} = 2 + 1 \leq 6 + 4 = A_{i_2, j_1} + A_{i_1, j_2}$.

We can also see that the property holds for the other quadruples: $(i_1, i_2, j_1, j_2) = (1, 3, 2, 3), (2, 3, 1, 2), (2, 3, 1, 3), (2, 3, 2, 3)$.<br>
Thus, we should print `Yes`.

```input2
2 4
4 3 2 1
5 6 7 8
```

```output2
No
```

We should print `No` because the condition is not satisfied.<br>
This is because, for example, we have $A_{i_1, j_1} + A_{i_2, j_2} = 4 + 8 &gt; 5 + 1 = A_{i_2, j_1} + A_{i_1, j_2}$ for $(i_1, i_2, j_1, j_2) = (1, 2, 1, 4)$.