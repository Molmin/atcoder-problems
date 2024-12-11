Score : $1000$ points

## Problem Statement

   #nck {
      width: 30px;
      height: auto;
   }

Snuke received $N$ intervals as a birthday present.
The $i$-th interval was $[-L_i, R_i]$.
It is guaranteed that both $L_i$ and $R_i$ are positive.
In other words, the origin is strictly inside each interval.

Snuke doesn't like overlapping intervals, so he decided to move some intervals.
For any positive integer $d$, if he pays $d$ dollars, he can choose one of the intervals and move it by the distance of $d$.
That is, if the chosen segment is $[a, b]$, he can change it to either $[a+d, b+d]$ or $[a-d, b-d]$.

He can repeat this type of operation arbitrary number of times.
After the operations, the intervals must be pairwise disjoint (however, they may touch at a point).
Formally, for any two intervals, the length of the intersection must be zero.

Compute the minimum cost required to achieve his goal.

## Constraints

- $1 \leq N \leq 5000$
- $1 \leq L_i, R_i \leq 10^9$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $L_1$ $R_1$
> 
> :
> 
> $L_N$ $R_N$

## Output

Print the minimum cost required to achieve his goal.

```input1
4
2 7
2 5
4 1
7 5
```

```output1
22
```

One optimal solution is as follows:

- Move the interval $[-2, 7]$ to $[6, 15]$ with $8$ dollars
- Move the interval $[-2, 5]$ to $[-1, 6]$ with $1$ dollars
- Move the interval $[-4, 1]$ to $[-6, -1]$ with $2$ dollars
- Move the interval $[-7, 5]$ to $[-18, -6]$ with $11$ dollars

The total cost is $8 + 1 + 2 + 11 = 22$ dollars.

```input2
20
97 2
75 25
82 84
17 56
32 2
28 37
57 39
18 11
79 6
40 68
68 16
40 63
93 49
91 10
55 68
31 80
57 18
34 28
76 55
21 80
```

```output2
7337
```