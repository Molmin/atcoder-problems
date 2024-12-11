Score : $400$ points

## Problem Statement

We have $N$ balls. The $i$-th ball has an integer $A_i$ written on it.<br>
For each $k=1, 2, ..., N$, solve the following problem and print the answer.  

- Find the number of ways to choose two distinct balls (disregarding order) from the $N-1$ balls other than the $k$-th ball so that the integers written on them are equal.

## Constraints

- $3 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

For each $k=1,2,...,N$, print a line containing the answer.

```input1
5
1 1 2 1 2
```

```output1
2
2
3
2
3
```

Consider the case $k=1$ for example. The numbers written on the remaining balls are $1,2,1,2$.<br>
From these balls, there are two ways to choose two distinct balls so that the integers written on them are equal.<br>
Thus, the answer for $k=1$ is $2$.

```input2
4
1 2 3 4
```

```output2
0
0
0
0
```

No two balls have equal numbers written on them.

```input3
5
3 3 3 3 3
```

```output3
6
6
6
6
6
```

Any two balls have equal numbers written on them.

```input4
8
1 2 1 4 2 1 4 1
```

```output4
5
7
5
7
7
5
7
5
```