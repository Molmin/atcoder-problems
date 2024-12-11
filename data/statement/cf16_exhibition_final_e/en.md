Score : $1000$ points

## Problem Statement

   #nck {
      width: 30px;
      height: auto;
   }

There are $N$ cities in a two-dimensional plane.
The coordinates of the $i$-th city is $(x_i, y_i)$.
Initially, the amount of water stored in the $i$-th city is $a_i$ liters.

Snuke can carry any amount of water from a city to another city.
However, water leaks out a bit while he carries it.
If he carries $l$ liters of water from the $s$-th city to the $t$-th city, only $max(l-d_{s,t}, 0)$ liters of water remains when he arrives at the destination.
Here $d_{s,t}$ denotes the (Euclidean) distance between the $s$-th city and the $t$-th city.
He can perform arbitrary number of operations of this type.

Snuke wants to maximize the minimum amount of water among the $N$ cities.
Find the maximum $X$ such that he can distribute at least $X$ liters of water to each city.

## Constraints

- $1 \leq N \leq 15$
- $0 \leq x_i, y_i, a_i \leq 10^9$
- All values in the input are integers.
- No two cities are at the same position.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $y_1$ $a_1$
> 
> :
> 
> $x_N$ $y_N$ $a_N$

## Output

Print the maximum of the minimum amount of water among the $N$ cities.
The absolute error or the relative error must be at most $10^{-9}$.

```input1
3
0 0 10
2 0 5
0 5 8
```

```output1
6.500000000000
```

The optimal solution is to carry $3.5$ liters of water from the 1st city to the 2nd city.
After the operation, both the 1st and the 2nd cities will have $6.5$ liters of water, and the 3rd city will have $8$ liters of water.

```input2
15
335279264 849598327 822889311
446755913 526239859 548830120
181424399 715477619 342858071
625711486 448565595 480845266
647639160 467825612 449656269
160714711 336869678 545923679
61020590 573085537 816372580
626006012 389312924 135599877
547865075 511429216 605997004
561330066 539239436 921749002
650693494 63219754 786119025
849028504 632532642 655702582
285323416 611583586 211428413
990607689 590857173 393671555
560686330 679513171 501983447
```

```output2
434666178.237122833729
```