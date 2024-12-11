Score : $500$ points

## Problem Statement

There are $N$ towns on a plane. The $i$-th town is located at the coordinates $(x_i,y_i)$. There may be more than one town at the same coordinates.

You can build a road between two towns at coordinates $(a,b)$ and $(c,d)$ for a cost of $min(|a-c|,|b-d|)$ yen (the currency of Japan). It is not possible to build other types of roads.

Your objective is to build roads so that it will be possible to travel between every pair of towns by traversing roads. At least how much money is necessary to achieve this?

## Constraints

- $2 \leq N \leq 10^5$
- $0 \leq x_i,y_i \leq 10^9$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> :
> 
> $x_N$ $y_N$

## Output

Print the minimum necessary amount of money in order to build roads so that it will be possible to travel between every pair of towns by traversing roads.

```input1
3
1 5
3 9
7 8
```

```output1
3
```

Build a road between Towns $1$ and $2$, and another between Towns $2$ and $3$. The total cost is $2+1=3$ yen.

```input2
6
8 3
4 9
12 19
18 1
13 5
7 6
```

```output2
8
```