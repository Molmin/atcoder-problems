Score : $400$ points

## Problem Statement

There is a sequence that contains one $0$, $A=(0)$.<br>
Additionally, you are given a string of length $N$, $S=s_1s_2\ldots s_N$, consisting of `L` and `R`.

For each $i=1, 2, \ldots, N$ in this order, the following will be done.

- If $s_i$ is `L`, insert $i$ to the immediate left of $i-1$ in $A$.
- If $s_i$ is `R`, insert $i$ to the immediate right of $i-1$ in $A$.

Find the final contents of $A$.

## Constraints

- $1\leq N \leq 5\times 10^5$
- $N$ is an integer.
- $|S| = N$
- $s_i$ is `L` or `R`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the final contents of $A$, separated by spaces.

```input1
5
LRRLR
```

```output1
1 2 4 5 3 0
```

Initially, $A=(0)$.<br>
$S_1$ is `L`, which makes it $A=(1,0)$.<br>
$S_2$ is `R`, which makes it $A=(1,2,0)$.<br>
$S_3$ is `R`, which makes it $A=(1,2,3,0)$.<br>
$S_4$ is `L`, which makes it $A=(1,2,4,3,0)$.<br>
$S_5$ is `R`, which makes it $A=(1,2,4,5,3,0)$.  

```input2
7
LLLLLLL
```

```output2
7 6 5 4 3 2 1 0
```