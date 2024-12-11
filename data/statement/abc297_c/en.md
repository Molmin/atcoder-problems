Score : $300$ points

## Problem Statement

Planning to place many PCs in his room, Takahashi has decided to write a code that finds how many PCs he can place in his room.

You are given $H$ strings $S_1,S_2,\ldots,S_H$, each of length $W$, consisting of `.` and `T`.  

Takahashi may perform the following operation any number of times (possibly zero):

- Choose integers satisfying $1\leq i \leq H$ and $1 \leq j \leq W-1$ such that the $j$-th and $(j+1)$-th characters of $S_i$ are both `T`.  Replace the $j$-th character of $S_i$ with `P`, and $(j+1)$-th with `C`.

He tries to maximize the number of times he performs the operation.  Find possible resulting $S_1,S_2,\ldots,S_H$.

## Constraints

- $1\leq H \leq 100$
- $2\leq W \leq 100$
- $H$ and $W$ are integers.
- $S_i$ is a string of length $W$ consisting of `.` and `T`.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$ 
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_H$

## Output

Print a sequence of strings, $S_1,S_2,\ldots,S_H$, separated by newlines, possibly resulting from maximizing the number of times he performs the operation.

If multiple solutions exist, print any of them.

```input1
2 3
TTT
T.T
```

```output1
PCT
T.T
```

He can perform the operation at most once.

For example, an operation with $(i,j)=(1,1)$ makes $S_1$ `PCT`.

```input2
3 5
TTT..
.TTT.
TTTTT
```

```output2
PCT..
.PCT.
PCTPC
```