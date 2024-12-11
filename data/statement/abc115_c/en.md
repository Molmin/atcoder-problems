Score : $300$ points

## Problem Statement

In some other world, today is Christmas Eve.

There are $N$ trees planted in Mr. Takaha's garden. The height of the $i$-th tree $(1 \leq i \leq N)$ is $h_i$ meters.

He decides to choose $K$ trees from these trees and decorate them with electric lights. To make the scenery more beautiful, the heights of the decorated trees should be as close to each other as possible.

More specifically, let the height of the tallest decorated tree be $h_{max}$ meters, and the height of the shortest decorated tree be $h_{min}$ meters. The smaller the value $h_{max} - h_{min}$ is, the better. What is the minimum possible value of $h_{max} - h_{min}$?

## Constraints

- $2 \leq K &lt; N \leq 10^5$
- $1 \leq h_i \leq 10^9$
- $h_i$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $h_1$
> 
> $h_2$
> 
> $:$
> 
> $h_N$

## Output

Print the minimum possible value of $h_{max} - h_{min}$.

```input1
5 3
10
15
11
14
12
```

```output1
2
```

If we decorate the first, third and fifth trees, $h_{max} = 12, h_{min} = 10$ so $h_{max} - h_{min} = 2$. This is optimal.

```input2
5 3
5
7
5
7
7
```

```output2
0
```

If we decorate the second, fourth and fifth trees, $h_{max} = 7, h_{min} = 7$ so $h_{max} - h_{min} = 0$. This is optimal.

There are not too many trees in these sample inputs, but note that there can be at most one hundred thousand trees (we just can't put a sample with a hundred thousand lines here).