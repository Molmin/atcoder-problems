Score : $1200$ points

## Problem Statement

There are $N$ red stones and $M$ blue stones on a two-dimensional plane.
The $i$-th red stone is at coordinates $(RX_i,RY_i)$, and the $j$-th blue stone is at $(BX_j,BY_j)$.
There may be multiple stones at the same coordinates.

You can choose a blue stone and move it to anywhere you like, any number of times.
The cost of moving a blue stone from $(x, y)$ to $(x',y')$ is $|x-x'|+|y-y'|$.

You want to meet the following condition:

- For every $1 \leq i \leq N$, there are $K$ or more blue stones to the upper right of the $i$-th red stone.
More formally, there are $K$ or more indices $1 \leq j \leq M$ such that $RX_i \leq BX'_j$ and $RY_i \leq BY'_j$, where $(BX'_j,BY'_j)$ are the coordinates of the $j$-th blue stone after your operations.

Find the minimum total cost needed to achieve your objective.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq M \leq 10^5$
- $1 \leq K \leq \min(M,10)$
- $0 \leq RX_i,RY_i,BX_j,BY_j \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $RX_1$ $RY_1$
> 
> $RX_2$ $RY_2$
> 
> $\vdots$
> 
> $RX_N$ $RY_N$
> 
> $BX_1$ $BY_1$
> 
> $BX_2$ $BY_2$
> 
> $\vdots$
> 
> $BX_M$ $BY_M$

## Output

Print the answer.

```input1
3 2 1
0 0
2 0
0 2
1 0
0 1
```

```output1
2
```

The optimal moves are as follows.

- Move the first blue stone to $(2,0)$, for the cost of $|1-2|+|0-0|=1$.
- Move the second blue stone to $(0,2)$, for the cost of $|0-0|+|1-2|=1$.

```input2
3 2 2
0 0
2 0
0 2
1 0
0 1
```

```output2
6
```

The optimal moves are as follows.

- Move the first blue stone to $(2,2)$, for the cost of $|1-2|+|0-2|=3$.
- Move the second blue stone to $(2,2)$, for the cost of $|0-2|+|1-2|=3$.

```input3
10 10 3
985971569 9592031
934345597 151698665
212173157 492617927
623299445 288193327
381549360 462770084
681791249 242910920
569404932 353061961
357882677 463919940
110389433 533715995
9639432 700209424
771167518 75925290
439954587 566974581
738467799 122646638
267815107 900808287
886340750 70087431
434010239 822484872
388269208 879859813
393002209 874330449
154134229 924857472
667626345 460737380
```

```output3
1165266772
```