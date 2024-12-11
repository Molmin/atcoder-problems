Score : $600$ points

## Problem Statement

Solve the following problem for $T$ test cases.

A piece is placed at the origin $(0, 0)$ on an $xy$-plane.  You may perform the following operation any number of (possibly zero) times:

- Choose an integer $i$ such that $1 \leq i \leq 8$ and $s_i=$ `1`.  Let $(x, y)$ be the current coordinates where the piece is placed.-   - If $i=1$, move the piece to $(x+1,y)$.
-   - If $i=2$, move the piece to $(x+1,y+1)$.
-   - If $i=3$, move the piece to $(x,y+1)$.
-   - If $i=4$, move the piece to $(x-1,y+1)$.
-   - If $i=5$, move the piece to $(x-1,y)$.
-   - If $i=6$, move the piece to $(x-1,y-1)$.
-   - If $i=7$, move the piece to $(x,y-1)$.
-   - If $i=8$, move the piece to $(x+1,y-1)$.

Your objective is to move the piece to $(A, B)$.<br>
Find the minimum number of operations needed to achieve the objective.  If it is impossible, print `-1` instead.  

## Constraints

- $1 \leq T \leq 10^4$
- $-10^9 \leq A,B \leq 10^9$
- $s_i$ is `0` or `1`.
- $T$, $A$, and $B$ are integers.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Here, $\mathrm{case}_i$ denotes the $i$-th test case.  

Each test case is given in the following format:

> $A$ $B$ $s_1 s_2 s_3 s_4 s_5 s_6 s_7 s_8$

## Output

Print $T$ lines in total.<br>
The $i$-th line should contain the answer to the $i$-th test case.

```input1
7
5 3 10101010
5 3 01010101
5 3 11111111
5 3 00000000
0 0 11111111
0 1 10001111
-1000000000 1000000000 10010011
```

```output1
8
5
5
-1
0
-1
1000000000
```