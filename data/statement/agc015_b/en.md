Score : $400$ points

## Problem Statement

Skenu constructed a building that has $N$ floors. The building has an elevator that stops at every floor.

There are buttons to control the elevator, but Skenu thoughtlessly installed only one button on each floor - up or down.
This means that, from each floor, one can only go in one direction.
If $S_i$ is `U`, only "up" button is installed on the $i$-th floor and one can only go up; if $S_i$ is `D`, only "down" button is installed on the $i$-th floor and one can only go down.

The residents have no choice but to go to their destination floors via other floors if necessary.
Find the sum of the following numbers over all ordered pairs of two floors $(i,j)$: the minimum number of times one needs to take the elevator to get to the $j$-th floor from the $i$-th floor.

## Constraints

- $2 \leq |S| \leq 10^5$
- $S_i$ is either `U` or `D`.
- $S_1$ is `U`.
- $S_{|S|}$ is `D`.

## Input

The input is given from Standard Input in the following format:

> $S_1S_2...S_{|S|}$

## Output

Print the sum of the following numbers over all ordered pairs of two floors $(i,j)$: the minimum number of times one needs to take the elevator to get to the $j$-th floor from the $i$-th floor.

```input1
UUD
```

```output1
7
```

From the $1$-st floor, one can get to the $2$-nd floor by taking the elevator once.

From the $1$-st floor, one can get to the $3$-rd floor by taking the elevator once.

From the $2$-nd floor, one can get to the $1$-st floor by taking the elevator twice.

From the $2$-nd floor, one can get to the $3$-rd floor by taking the elevator once.

From the $3$-rd floor, one can get to the $1$-st floor by taking the elevator once.

From the $3$-rd floor, one can get to the $2$-nd floor by taking the elevator once.

The sum of these numbers of times, $7$, should be printed.

```input2
UUDUUDUD
```

```output2
77
```