Score : $600$ points

## Problem Statement

We have an $N \times N$ grid.  The square at the $i$-th row from the top and $j$-th column from the left in this grid is called $(i,j)$.<br>
Each square of the grid has at most one piece.<br>
The state of the grid is given by $N$ strings $S_i$:

- if the $j$-th character of $S_i$ is `O`, then $(i,j)$ has a piece on it;
- if the $j$-th character of $S_i$ is `X`, then $(i,j)$ has no piece on it.

You are given an integer $M$.  Using this $M$, we define that a piece $P$ placed at $(s,t)$ covers a square $(u,v)$ if all of the following conditions are satisfied:

- $s \le u \le N$
- $t \le v \le N$
- $(u - s) + \frac{(v - t)}{2} &lt; M$

For each of $Q$ squares $(X_i,Y_i)$, find how many pieces cover the square.

## Constraints

- $N$, $M$, $X_i$, $Y_i$, and $Q$ are integers.
- $1 \le N \le 2000$
- $1 \le M \le 2 \times N$
- $S_i$ consists of `O` and `X`.
- $1 \le Q \le 2 \times 10^5$
- $1 \le X_i,Y_i \le N$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$
> 
> $Q$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $\vdots$
> 
> $X_Q$ $Y_Q$

## Output

Print $Q$ lines.<br>
The $i$-th line ( $1 \le i \le Q$ ) should contain the number of pieces that covers $(X_i,Y_i)$ as an integer.

```input1
4 2
OXXX
XXXX
XXXX
XXXX
6
1 1
1 4
2 2
2 3
3 1
4 4
```

```output1
1
1
1
0
0
0
```

Only Square $(1,1)$ contains a piece, which covers the following `#` squares:

```output1
####
##..
....
....
```

```input2
5 10
OOOOO
OOOOO
OOOOO
OOOOO
OOOOO
5
1 1
2 3
3 4
4 2
5 5
```

```output2
1
6
12
8
25
```

```input3
8 5
OXXOXXOX
XOXXOXOX
XOOXOOXO
OXOOXOXO
OXXOXXOX
XOXXOXOX
XOOXOOXO
OXOOXOXO
6
7 2
8 1
4 5
8 8
3 4
1 7
```

```output3
5
3
9
14
5
3
```