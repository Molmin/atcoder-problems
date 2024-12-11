Score : $700$ points

## Problem Statement

Takahashi is locked within a building.

This building consists of $H \times W$ rooms, arranged in $H$ rows and $W$ columns.
We will denote the room at the $i$-th row and $j$-th column as $(i,j)$. The state of this room is represented by a character $A_{i,j}$. If $A_{i,j}=$ `#`, the room is locked and cannot be entered; if $A_{i,j}=$ `.`, the room is not locked and can be freely entered.
Takahashi is currently at the room where $A_{i,j}=$ `S`, which can also be freely entered.

Each room in the $1$-st row, $1$-st column, $H$-th row or $W$-th column, has an exit.
Each of the other rooms $(i,j)$ is connected to four rooms: $(i-1,j)$, $(i+1,j)$, $(i,j-1)$ and $(i,j+1)$.

Takahashi will use his magic to get out of the building. In one cast, he can do the following:

- Move to an adjacent room at most $K$ times, possibly zero. Here, locked rooms cannot be entered.
- Then, select and unlock at most $K$ locked rooms, possibly zero. Those rooms will remain unlocked from then on.

His objective is to reach a room with an exit. Find the minimum necessary number of casts to do so.

It is guaranteed that Takahashi is initially at a room without an exit.

## Constraints

- $3 \leq H \leq 800$
- $3 \leq W \leq 800$
- $1 \leq K \leq H \times W$
- Each $A_{i,j}$ is `#` , `.`  or `S`.
- There uniquely exists $(i,j)$ such that $A_{i,j}=$ `S`, and it satisfies $2 \leq i \leq H-1$ and $2 \leq j \leq W-1$.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$ $K$
> 
> $A_{1,1}A_{1,2}$...$A_{1,W}$
> 
> :
> 
> $A_{H,1}A_{H,2}$...$A_{H,W}$

## Output

Print the minimum necessary number of casts.

```input1
3 3 3
#.#
#S.
###
```

```output1
1
```

Takahashi can move to room $(1,2)$ in one cast.

```input2
3 3 3
###
#S#
###
```

```output2
2
```

Takahashi cannot move in the first cast, but can unlock room $(1,2)$.
Then, he can move to room $(1,2)$ in the next cast, achieving the objective in two casts.

```input3
7 7 2
#######
#######
##...##
###S###
##.#.##
###.###
#######
```

```output3
2
```