Score : $400$ points

## Problem Statement

Joisino the magical girl has decided to turn every single digit that exists on this world into $1$.

Rewriting a digit $i$ with $j$ $(0 \leq i,j \leq 9)$ costs $c_{i,j}$ MP (Magic Points).

She is now standing before a wall. The wall is divided into $HW$ squares in $H$ rows and $W$ columns, and at least one square contains a digit between $0$ and $9$ (inclusive).

You are given $A_{i,j}$ that describes the square at the $i$-th row from the top and $j$-th column from the left, as follows:

- If $A_{i,j} \neq -1$, the square contains a digit $A_{i,j}$.
- If $A_{i,j}=-1$, the square does not contain a digit.

Find the minimum total amount of MP required to turn every digit on this wall into $1$ in the end.

## Constraints

- $1 \leq H,W \leq 200$
- $1 \leq c_{i,j} \leq 10^3$ $(i \neq j)$
- $c_{i,j}=0$ $(i=j)$
- $-1 \leq A_{i,j} \leq 9$
- All input values are integers.
- There is at least one digit on the wall.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $c_{0,0}$ $...$ $c_{0,9}$
> 
> $:$
> 
> $c_{9,0}$ $...$ $c_{9,9}$
> 
> $A_{1,1}$ $...$ $A_{1,W}$
> 
> $:$
> 
> $A_{H,1}$ $...$ $A_{H,W}$

## Output

Print the minimum total amount of MP required to turn every digit on the wall into $1$ in the end.

```input1
2 4
0 9 9 9 9 9 9 9 9 9
9 0 9 9 9 9 9 9 9 9
9 9 0 9 9 9 9 9 9 9
9 9 9 0 9 9 9 9 9 9
9 9 9 9 0 9 9 9 9 2
9 9 9 9 9 0 9 9 9 9
9 9 9 9 9 9 0 9 9 9
9 9 9 9 9 9 9 0 9 9
9 9 9 9 2 9 9 9 0 9
9 2 9 9 9 9 9 9 9 0
-1 -1 -1 -1
8 1 1 8
```

```output1
12
```

To turn a single $8$ into $1$, it is optimal to first turn $8$ into $4$, then turn $4$ into $9$, and finally turn $9$ into $1$, costing $6$ MP.

The wall contains two $8$s, so the minimum total MP required is $6 \times 2=12$.

```input2
5 5
0 999 999 999 999 999 999 999 999 999
999 0 999 999 999 999 999 999 999 999
999 999 0 999 999 999 999 999 999 999
999 999 999 0 999 999 999 999 999 999
999 999 999 999 0 999 999 999 999 999
999 999 999 999 999 0 999 999 999 999
999 999 999 999 999 999 0 999 999 999
999 999 999 999 999 999 999 0 999 999
999 999 999 999 999 999 999 999 0 999
999 999 999 999 999 999 999 999 999 0
1 1 1 1 1
1 1 1 1 1
1 1 1 1 1
1 1 1 1 1
1 1 1 1 1
```

```output2
0
```

Note that she may not need to change any digit.

```input3
3 5
0 4 3 6 2 7 2 5 3 3
4 0 5 3 7 5 3 7 2 7
5 7 0 7 2 9 3 2 9 1
3 6 2 0 2 4 6 4 2 3
3 5 7 4 0 6 9 7 6 7
9 8 5 2 2 0 4 7 6 5
5 4 6 3 2 3 0 5 4 3
3 6 2 3 4 2 4 0 8 9
4 6 5 4 3 5 3 2 0 8
2 1 3 4 5 7 8 6 4 0
3 5 2 6 1
2 5 3 2 1
6 9 2 5 6
```

```output3
47
```