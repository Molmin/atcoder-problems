Score : $1000$ points

## Problem Statement

There are $N$ oases on a number line. The coordinate of the $i$-th oases from the left is $x_i$.

Camel hopes to visit all these oases.
Initially, the volume of the hump on his back is $V$. When the volume of the hump is $v$, water of volume at most $v$ can be stored. Water is only supplied at oases. He can get as much water as he can store at a oasis, and the same oasis can be used any number of times.

Camel can travel on the line by either walking or jumping:

- Walking over a distance of $d$ costs water of volume $d$ from the hump. A walk that leads to a negative amount of stored water cannot be done.
- Let $v$ be the amount of water stored at the moment. When $v &gt; 0$, Camel can jump to any point on the line of his choice. After this move, the volume of the hump becomes $v/2$ (rounded down to the nearest integer), and the amount of stored water becomes $0$.

For each of the oases, determine whether it is possible to start from that oasis and visit all the oases.

## Constraints

- $2 \leq N,V \leq 2 \times 10^5$
- $-10^9 \leq x_1 &lt; x_2 &lt; ... &lt; x_N \leq 10^9$
- $V$ and $x_i$ are all integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $V$
> 
> $x_1$ $x_2$ $...$ $x_{N}$

## Output

Print $N$ lines. The $i$-th line should contain `Possible` if it is possible to start from the $i$-th oasis and visit all the oases, and `Impossible` otherwise.

```input1
3 2
1 3 6
```

```output1
Possible
Possible
Possible
```

It is possible to start from the first oasis and visit all the oases, as follows:

- Walk from the first oasis to the second oasis. The amount of stored water becomes $0$.
- Get water at the second oasis. The amount of stored water becomes $2$.
- Jump from the second oasis to the third oasis. The amount of stored water becomes $0$, and the volume of the hump becomes $1$.

```input2
7 2
-10 -4 -2 0 2 4 10
```

```output2
Impossible
Possible
Possible
Possible
Possible
Possible
Impossible
```

A oasis may be visited any number of times.

```input3
16 19
-49 -48 -33 -30 -21 -14 0 15 19 23 44 52 80 81 82 84
```

```output3
Possible
Possible
Possible
Possible
Possible
Possible
Possible
Possible
Possible
Possible
Possible
Possible
Impossible
Impossible
Impossible
Impossible
```