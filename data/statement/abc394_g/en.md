Score : $600$ points

## Problem Statement

There is a city divided into $H \times W$ blocks in the north-south-east-west directions, and there is exactly one building in each block.<br>
Specifically, in the block at the $i$-th row from the north $(1\leq i\leq H)$ and the $j$-th column from the west $(1\leq j\leq W)$ (hereafter referred to as block $(i,j)$), there is a building of $F_{i,j}$ floors.

Takahashi has two ways of moving. If he is on the $X$-th floor $(1\leq X\leq F_{i,j})$ of the building in block $(i,j)$, he can:

- Move up or down one floor within the same building using **stairs**. If $X=1$, he cannot move down; if $X=F_{i,j}$, he cannot move up.
- Choose a building with at least $X$ floors in a cardinally adjacent block, and move to the $X$-th floor of that building using a **(sky) walkway**.

Here, two blocks $(i,j)$ and $(i',j')$ are cardinally adjacent if and only if $\lvert i - i'\rvert + \lvert j - j'\rvert = 1$.

You are given $Q$ queries to be answered. The $i$-th query $(1\leq i\leq Q)$ is the following.

Find the minimum possible number of times that Takahashi uses **stairs** to move from the $Y_i$-th floor of the building in block $(A_i,B_i)$ to the $Z_i$-th floor of the building in block $(C_i,D_i)$.<br>
The count of times using stairs is incremented each time he moves up or down one floor, possibly multiple times within the same building. (For example, moving from the 1st floor to the 6th floor of a building counts as $5$ uses of stairs.)<br>
Note that he does not have to minimize the number of times he uses walkways.

## Constraints

- $1\leq H \leq 500$
- $1\leq W \leq 500$
- $1\leq F_{i,j} \leq 10^6$
- $1\leq Q\leq 2\times 10^5$
- $1\leq A_i,C_i\leq H$
- $1\leq B_i,D_i\leq W$
- $1\leq Y_i\leq F_{A_i,B_i}$
- $1\leq Z_i\leq F_{C_i,D_i}$
- $(A_i,B_i,Y_i)\neq (C_i,D_i,Z_i)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$
> 
> $F_{1,1}$ $F_{1,2}$ $\ldots$ $F_{1,W}$
> 
> $F_{2,1}$ $F_{2,2}$ $\ldots$ $F_{2,W}$
> 
> $\vdots$
> 
> $F_{H,1}$ $F_{H,2}$ $\ldots$ $F_{H,W}$
> 
> $Q$
> 
> $A_1$ $B_1$ $Y_1$ $C_1$ $D_1$ $Z_1$
> 
> $A_2$ $B_2$ $Y_2$ $C_2$ $D_2$ $Z_2$
> 
> $\vdots$
> 
> $A_Q$ $B_Q$ $Y_Q$ $C_Q$ $D_Q$ $Z_Q$

## Output

Print $Q$ lines. The $i$-th line should contain the answer to the $i$-th query as an integer.

```input1
3 3
12 10 6
1 1 3
8 6 7
2
1 1 10 3 1 6
1 1 6 1 2 4
```

```output1
10
2
```

For the first query, for example, it is possible to move from the 10th floor of the building in block $(1,1)$ to the 6th floor of the building in block $(3,1)$ by using stairs a total of $10$ times, in the following manner:

- Move from the 10th floor of the building in block $(1,1)$ to the 10th floor of the building in block $(1,2)$ via a walkway.
- Use stairs $4$ times to go from the 10th floor down to the 6th floor of the building in block $(1,2)$.
- Move from the 6th floor of the building in block $(1,2)$ to the 6th floor of the building in block $(1,3)$ via a walkway.
- Use stairs $3$ times to go from the 6th floor down to the 3rd floor of the building in block $(1,3)$.
- Move from the 3rd floor of the building in block $(1,3)$ to the 3rd floor of the building in block $(2,3)$ via a walkway.
- Move from the 3rd floor of the building in block $(2,3)$ to the 3rd floor of the building in block $(3,3)$ via a walkway.
- Use stairs $3$ times to go from the 3rd floor up to the 6th floor of the building in block $(3,3)$.
- Move from the 6th floor of the building in block $(3,3)$ to the 6th floor of the building in block $(3,2)$ via a walkway.
- Move from the 6th floor of the building in block $(3,2)$ to the 6th floor of the building in block $(3,1)$ via a walkway.

It is impossible to make this journey using at most $9$ uses of stairs, so we output $10$.

For the second query, if you first use a walkway to go to the building in block $(1,2)$, and then use the stairs twice to go from the 6th floor down to the 4th floor, it is possible to move from the 6th floor of the building in block $(1,1)$ to the 4th floor of the building in block $(1,2)$ by using the stairs twice.