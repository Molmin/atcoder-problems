Score : $500$ points

## Problem Statement

   #nck {
      width: 30px;
      height: auto;
   }

There are $N$ computers and $N$ sockets in a one-dimensional world.
The coordinate of the $i$-th computer is $a_i$, and the coordinate of the $i$-th socket is $b_i$.
It is guaranteed that these $2N$ coordinates are pairwise distinct.

Snuke wants to connect each computer to a socket using a cable.
Each socket can be connected to only one computer.

In how many ways can he minimize the total length of the cables?
Compute the answer modulo $10^9+7$.

## Constraints

- $1 \leq N \leq 10^5$
- $0 \leq a_i, b_i \leq 10^9$
- The coordinates are integers.
- The coordinates are pairwise distinct.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $a_1$
> 
> :
> 
> $a_N$
> 
> $b_1$
> 
> :
> 
> $b_N$

## Output

Print the number of ways to minimize the total length of the cables, modulo $10^9+7$.

```input1
2
0
10
20
30
```

```output1
2
```

There are two optimal connections: $0-20, 10-30$ and $0-30, 10-20$.
In both connections the total length of the cables is $40$.

```input2
3
3
10
8
7
12
5
```

```output2
1
```