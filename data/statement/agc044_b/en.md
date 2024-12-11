Score : $700$ points

## Problem Statement

Tonight, in your favourite cinema they are giving the movie Joker and all seats are occupied. In the cinema there are $N$ rows with $N$ seats each, forming an $N\times N$ square. We denote with $1, 2,\dots, N$ the viewers in the first row (from left to right); with $N+1, \dots, 2N$ the viewers in the second row (from left to right); and so on until the last row, whose viewers are denoted by $N^2-N+1,\dots, N^2$.

At the end of the movie, the viewers go out of the cinema in a certain order: the $i$-th viewer leaving her seat is the one denoted by the number $P_i$. The viewer $P_{i+1}$ waits until viewer $P_i$ has left the cinema before leaving her seat.
To exit from the cinema, a viewer must move from seat to seat until she exits the square of seats (any side of the square is a valid exit). A viewer can move from a seat to one of its $4$ adjacent seats (same row or same column).
While leaving the cinema, it might be that a certain viewer $x$ goes through a seat **currently** occupied by viewer $y$; in that case viewer $y$ will hate viewer $x$ forever. Each viewer chooses the way that minimizes the number of viewers that will hate her forever.

Compute the number of pairs of viewers $(x, y)$ such that $y$ will hate $x$ forever.

## Constraints

- $2 \le N \le 500$
- The sequence $P_1, P_2, \dots, P_{N^2}$ is a permutation of $\{1, 2, \dots, N^2\}$.

## Input

The input is given from Standard Input in the format

> $N$
> 
> $P_1$ $P_2$ $\cdots$ $P_{N^2}$

## Output

If $ans$ is the number of pairs of viewers described in the statement, you should print on Standard Output

> $ans$

```input1
3
1 3 7 9 5 4 8 6 2
```

```output1
1
```

Before the end of the movie, the viewers are arranged in the cinema as follows:

```output1
1 2 3
4 5 6
7 8 9
```

The first four viewers leaving the cinema ($1$, $3$, $7$, $9$) can leave the cinema without going through any seat, so they will not be hated by anybody.

Then, viewer $5$ must go through one of the seats where viewers $2$, $4$, $6$, $8$ are currently seated while leaving the cinema; hence he will be hated by at least one of those viewers.

Finally the remaining viewers can leave the cinema (in the order $4$, $8$, $6$, $2$) without going through any occupied seat (actually, they can leave the cinema without going through any seat at all).

```input2
4
6 7 1 4 13 16 10 9 5 11 12 14 15 2 3 8
```

```output2
3
```

```input3
6
11 21 35 22 7 36 27 34 8 20 15 13 16 1 24 3 2 17 26 9 18 32 31 23 19 14 4 25 10 29 28 33 12 6 5 30
```

```output3
11
```