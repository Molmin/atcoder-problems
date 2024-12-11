Score : $700$ points

## Problem Statement

You have $N$ balls of colors $C_1, C_2, \ldots, C_N$.
Here, all colors are represented by an integer between $1$ and $N$ inclusive.
You want to arrange the balls on a circle. After you do that, you will count the number of pairs of colors $(X, Y)$ such that $X &lt; Y$ and there exist two adjacent balls of colors $X$ and $Y$. 

Find an arrangement that minimizes the number of such pairs. If there are many such arrangements, find any of them.

For example, for balls of colors $1, 1, 2, 3$, if we arrange them as $1, 1, 2, 3$, we get $3$ pairs: $(1, 2), (2, 3), (1, 3)$. If we arrange them as $1, 2, 1, 3$, we get only $2$ pairs: $(1, 2), (1, 3)$.

Solve $T$ test cases for each input file.

## Constraints

- $1 \le T \le 5 \cdot 10^4$
- $3 \le N \le 2 \cdot 10^5$
- $1 \le C_i \le N$
- The sum of $N$ in one input file doesn't exceed $2\cdot 10^5$.
- All values in the input are integers.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $case_1$
> 
> $case_2$
> 
> $\vdots$
> 
> $case_T$

Each case is in the following format:

> $N$
> 
> $C_1$ $C_2$ $\ldots$ $C_N$

## Output

For each test case, output your answer in the following format:

> $A_1$ $A_2$ $\ldots$ $A_N$

Here, $A_i$ is the color of the $i$-th ball (in clockwise order) on the circle in your arrangement. 

$(A_1, A_2, \ldots, A_N)$ should be a permutation of $(C_1, C_2, \ldots, C_N)$, and the number of pairs of colors $(X, Y)$ such that $X &lt; Y$ and there exist two adjacent balls of colors $X$ and $Y$, should be minimized.

If multiple solutions exist, any of them will be accepted.

```input1
3
3
1 2 3
4
1 2 1 3
5
2 2 5 3 3
```

```output1
1 2 3 
2 1 3 1 
3 3 2 5 2
```