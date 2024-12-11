Score : $2000$ points

## Problem Statement

Solve the following problem for $T$ test cases.

There is a board with $N$ rows and $N$ columns. Let $(i,j)$ denote the cell at the $i$-th row from the top and $j$-th column from the left. Initially, all cells are colorless.

You have $N^2$ stamps. For each pair of integers $(h,w)$ ($1 \leq h,w \leq N$), there is one stamp of size $h \times w$, which is called stamp $(h,w)$. All stamps have different colors.

"Pressing a stamp $(h,w)$" means the following operation:

- Choose a position $(a,b)$ ($1 \leq a \leq N-h+1,\ 1 \leq b \leq N-w+1$). Then, color all cells $(i,j)$ ($a \leq i \leq a+h-1$, $b \leq j \leq b+w-1$) with the color of stamp $(h,w)$. If a cell is already colored, the color will be overwritten.

Your goal is to press each stamp exactly once so that all cells on the final board have different colors.

You have already pressed $K$ stamps. The $i$-th pressed stamp was $(H_i,W_i)$, and its position was $(A_i,B_i)$.

Show one way to press the remaining $N^2-K$ stamps to achieve the goal. 
In this problem, you are only provided with inputs where you can achieve the goal by pressing the remaining stamps in an appropriate order and positions.

## Constraints

- $1 \leq T$
- $2 \leq N \leq 400$
- $0 \leq K &lt; N^2$
- $1 \leq H_i,W_i \leq N$
- $1 \leq A_i \leq N-H_i+1$
- $1 \leq B_i \leq N-W_i+1$
- $(H_i,W_i) \neq (H_j,W_j)$ ($i \neq j$)
- The sum of $N^2$ across all test cases in a single input does not exceed $400^2$.
- You are only provided with inputs where you can achieve the goal by pressing the remaining stamps in an appropriate order and positions.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $case_1$
> 
> $case_2$
> 
> $\vdots$
> 
> $case_T$

Each test case is given in the following format:

> $N$ $K$
> 
> $H_1$ $W_1$ $A_1$ $B_1$
> 
> $H_2$ $W_2$ $A_2$ $B_2$
> 
> $\vdots$
> 
> $H_K$ $W_K$ $A_K$ $B_K$

## Output

For each test case, print an answer in the following format:

> $h_1$ $w_1$ $a_1$ $b_1$
> 
> $h_2$ $w_2$ $a_2$ $b_2$
> 
> $\vdots$
> 
> $h_{N^2-K}$ $w_{N^2-K}$ $a_{N^2-K}$ $b_{N^2-K}$

This means that the $i$-th stamp to be pressed (excluding the already pressed $K$ stamps) is $(h_i,w_i)$, and its position is $(a_i,b_i)$.

```input1
4
2 2
2 2 1 1
1 2 2 1
2 0
3 3
3 3 1 1
3 2 1 2
2 3 1 1
5 15
5 5 1 1
4 5 2 1
5 4 1 1
4 4 2 1
3 5 3 1
2 5 4 1
1 5 4 1
5 3 1 1
3 4 3 1
2 4 3 1
4 3 2 1
1 4 4 1
3 3 3 1
2 3 4 1
1 3 5 1
```

```output1
2 1 1 1
1 1 2 1

2 2 1 1
2 1 1 1
1 2 1 1
1 1 1 1

2 2 1 2
3 1 1 2
1 3 2 1
1 2 2 1
2 1 1 2
1 1 1 2

5 2 1 1
4 2 1 1
3 2 1 1
5 1 1 1
2 2 1 1
4 1 1 1
1 2 1 1
3 1 1 1
2 1 1 1
1 1 1 1
```

Consider the first test case.

If we let $i$ denote the color of the $i$-th pressed stamp (including the already pressed $K$ stamps), the board changes as follows:

```output1
..     ->      11     ->      11     ->      31     ->      31
..  (2,2,1,1)  11  (1,2,2,1)  22  (2,1,1,1)  32  (1,1,2,1)  42
```

Note that the sample output includes extra newlines for readability, but you do not need to print these (although you may if you wish).