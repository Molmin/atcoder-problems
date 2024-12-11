Score : $300$ points

## Problem Statement

We have a grid with $H$ horizontal rows and $W$ vertical columns.  $(i, j)$ denotes the square at the $i$-th row from the top and $j$-th column from the left.<br>
$(i,j)$ has a character $G_{i,j}$ written on it.  $G_{i,j}$ is `U`, `D`, `L`, or `R`.

You are initially at $(1,1)$.  You repeat the following operation until you cannot make a move.

Let $(i,j)$ be the square you are currently at.<br>
If $G_{i,j}$ is `U` and $i \neq 1$, move to $(i-1,j)$.<br>
If $G_{i,j}$ is `D` and $i \neq H$, move to $(i+1,j)$.<br>
If $G_{i,j}$ is `L` and $j \neq 1$, move to $(i,j-1)$.<br>
If $G_{i,j}$ is `R` and $j \neq W$, move to $(i,j+1)$.<br>
Otherwise, you cannot make a move.  

Print the square you end up at when you cannot make a move.<br>
If you indefinitely repeat moving, print `-1` instead.

## Constraints

- $1 \leq H, W \leq 500$
- $G_{i,j}$ is `U`, `D`, `L`, or `R`.
- $H$ and $W$ are integers.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $G_{1,1}G_{1,2}\dots G_{1,W}$
> 
> $G_{2,1}G_{2,2}\dots G_{2,W}$
> 
> $\vdots$
> 
> $G_{H,1}G_{H,2}\dots G_{H,W}$

## Output

If you end up at $(i, j)$, print it in the following format:

> $i$ $j$

If you indefinitely repeat moving, print `-1`.

```input1
2 3
RDU
LRU
```

```output1
1 3
```

You will move as $(1, 1) \to (1, 2) \to (2, 2) \to (2, 3) \to (1, 3)$, ending up here, so the answer is $(1, 3)$.

```input2
2 3
RRD
ULL
```

```output2
-1
```

You will indefinitely repeat moving as $(1, 1) \to (1, 2) \to (1, 3) \to (2, 3) \to (2, 2) \to (2, 1) \to (1, 1) \to (1, 2) \to \dots$, so `-1` should be printed in this case.

```input3
9 44
RRDDDDRRRDDDRRRRRRDDDRDDDDRDDRDDDDDDRRDRRRRR
RRRDLRDRDLLLLRDRRLLLDDRDLLLRDDDLLLDRRLLLLLDD
DRDLRLDRDLRDRLDRLRDDLDDLRDRLDRLDDRLRRLRRRDRR
DDLRRDLDDLDDRLDDLDRDDRDDDDRLRRLRDDRRRLDRDRDD
RDLRRDLRDLLLLRRDLRDRRDRRRDLRDDLLLLDDDLLLLRDR
RDLLLLLRDLRDRLDDLDDRDRRDRLDRRRLDDDLDDDRDDLDR
RDLRRDLDDLRDRLRDLDDDLDDRLDRDRDLDRDLDDLRRDLRR
RDLDRRLDRLLLLDRDRLLLRDDLLLLLRDRLLLRRRRLLLDDR
RRRRDRDDRRRDDRDDDRRRDRDRDRDRRRRRRDDDRDDDDRRR
```

```output3
9 5
```