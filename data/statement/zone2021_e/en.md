Score : $500$ points

## Problem Statement

On a two-dimensional plane, you are now at coordinate $(1, 1)$ and want to get to $(R, C)$, the coordinates of the UFO.<br>
When you are at $(r, c)$, you can make the following four kinds of moves:

- Move from $(r, c)$ to $(r, c + 1)$ at the cost of $A_{r, c}$. You can make this move when $c &lt; C$.
- Move from $(r, c)$ to $(r, c - 1)$ at the cost of $A_{r, c - 1}$. You can make this move when $c &gt; 1$.
- Move from $(r, c)$ to $(r + 1, c)$ at the cost of $B_{r, c}$. You can make this move when $r &lt; R$.
- Choose an integer $i$ such that $1 \leq i &lt; r$ and move from $(r, c)$ to $(r - i, c)$ at the cost of $1 + i$.

Find the minimum cost needed to move from $(1, 1)$ to $(R, C)$.

## Constraints

- All values in input are integers.
- $2 \leq R, C \leq 500$
- $0 \leq A_{i,j} &lt; 10^3$
- $0 \leq B_{i,j} &lt; 10^3$

## Input

Input is given from Standard Input in the following format:

> $R$ $C$
> 
> $A_{1,1}$ $\cdots$ $A_{1,C-1}$
> 
> $\vdots$
> 
> $A_{R,1}$ $\cdots$ $A_{R,C-1}$
> 
> $B_{1,1}$ $\cdots$ $B_{1,C}$
> 
> $\vdots$
> 
> $B_{R-1,1}$ $\cdots$ $B_{R-1,C}$

## Output

Print the answer.

```input1
3 3
10 1
10 10
1 10
1 10 1
1 10 1
```

```output1
9
```

You can achieve the cost of $9$ as follows:

- Move from $(1, 1)$ to $(2, 1)$ at the cost of $1$.
- Move from $(2, 1)$ to $(3, 1)$ at the cost of $1$.
- Move from $(3, 1)$ to $(3, 2)$ at the cost of $1$.
- Move from $(3, 2)$ to $(1, 2)$ at the cost of $3$.
- Move from $(1, 2)$ to $(1, 3)$ at the cost of $1$.
- Move from $(1, 3)$ to $(2, 3)$ at the cost of $1$.
- Move from $(2, 3)$ to $(3, 3)$ at the cost of $1$.

```input2
7 11
42 77 94 76 40 66 43 28 66 23
27 34 41 31 83 13 64 69 81 82
23 81 0 22 39 51 4 37 84 43
62 37 82 86 26 67 45 78 85 2
79 18 72 62 68 84 69 88 19 48
0 27 21 51 71 13 87 45 39 11
74 57 32 0 97 41 87 96 17 98
69 58 76 32 51 16 38 68 86 82 64
53 47 33 7 51 75 43 14 96 86 70
80 58 12 76 94 50 59 2 1 54 25
14 14 62 28 12 43 15 70 65 44 41
56 50 50 54 53 34 16 3 2 59 88
27 85 50 79 48 86 27 81 78 78 64
```

```output2
498
```

```input3
4 4
0 0 0
0 0 0
0 0 0
0 0 0
0 0 0 0
0 0 0 0
0 0 0 0
```

```output3
0
```