Score: $400$ points

## Problem Statement

There is an $N \times N$ grid. Let $(i, j)$ denote the cell at the $i$-th row from the top and the $j$-th column from the left.

You are to fill each cell with $0$ or $1$. Construct one method to fill the grid that satisfies all of the following conditions:

- The cells $(A_1,B_1), (A_2,B_2), \dots, (A_M,B_M)$ contain $1$.
- The integers in the $i$-th row sum to $M$. $(1 \le i \le N)$
- The integers in the $i$-th column sum to $M$. $(1 \le i \le N)$

It can be proved that under the constraints of this problem, there is at least one method to fill the grid that satisfies the conditions.

## Constraints

- $1 \le N \le 10^5$
- $1 \le M \le \min(N,10)$
- $1 \le A_i, B_i \le N$
- $(A_i, B_i) \neq (A_j, B_j)$ if $i \neq j$.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_{M}$ $B_{M}$

## Output

Let $(x_1,y_1), (x_2,y_2), \dots, (x_k,y_k)$ be the cells that contain $1$, and print the following:

> $k$
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $\vdots$
> 
> $x_k$ $y_k$

If multiple methods satisfy the conditions, any of them will be considered correct.

```input1
4 2
1 4
3 2
```

```output1
8
1 2
1 4
2 1
2 4
3 2
3 3
4 1
4 3
```

This output fills the grid as follows. All the conditions are satisfied, so this output is correct.

```output1
0101
1001
0110
1010
```

```input2
3 3
3 1
2 3
1 3
```

```output2
9
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
```

```input3
7 3
1 7
7 6
6 1
```

```output3
21
1 6
2 4
4 1
7 3
3 6
4 5
6 1
1 7
7 6
3 5
2 2
6 3
6 7
5 4
5 2
2 5
5 3
1 4
7 1
4 7
3 2
```