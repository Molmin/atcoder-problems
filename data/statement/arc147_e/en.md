Score : $800$ points

## Problem Statement

$N$ students, numbered $1,2,\ldots,N$, took an examination.
Student $i\,(1 \leq i \leq N)$ had to score at least $B_i$ points to graduate, where they actually scored $A_i$ points.

You can repeat the following operation any number of times (possibly zero):

- Choose two students, and swap their scores.

Your goal is to make everyone graduate.
Determine whether it is possible.
If it is possible, find the maximum number of students whose scores do not change during the process.

## Constraints

- $2 \leq N \leq 3 \times 10^5$
- $1 \leq A_i,B_i \leq 10^9\,(1 \leq i \leq N)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_N$ $B_N$

## Output

If it is possible to make everyone graduate, print the maximum number of students whose scores do not change during the process.

Otherwise, print `-1`.

```input1
3
1 2
3 1
3 3
```

```output1
1
```

If you swap scores of Student $1$ and $2$, everyone can graduate.
Here, the number of students whose scores do not change is $1$ (only Student $3$).

```input2
2
100 1
100 1
```

```output2
2
```

```input3
6
3 2
1 6
4 5
1 3
5 5
9 8
```

```output3
-1
```

```input4
6
3 1
4 5
5 2
2 3
5 4
5 1
```

```output4
3
```