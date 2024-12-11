Score : $300$ points

## Problem Statement

There are $N$ people living on a number line.

The $i$-th person lives at coordinate $X_i$.

You are going to hold a meeting that all $N$ people have to attend.

The meeting can be held at any **integer coordinate**. If you choose to hold the meeting at coordinate $P$, the $i$-th person will spend $(X_i - P)^2$ points of stamina to attend the meeting.

Find the minimum total points of stamina the $N$ people have to spend.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 100$
- $1 \leq X_i \leq 100$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $X_1$ $X_2$ $...$ $X_N$

## Output

Print the minimum total stamina the $N$ people have to spend.

```input1
2
1 4
```

```output1
5
```

Assume the meeting is held at coordinate $2$. In this case, the first person will spend $(1 - 2)^2$ points of stamina, and the second person will spend $(4 - 2)^2 = 4$ points of stamina, for a total of $5$ points of stamina. This is the minimum total stamina that the $2$ people have to spend.

Note that you can hold the meeting only at an integer coordinate.

```input2
7
14 14 2 13 56 2 37
```

```output2
2354
```