Score : $600$ points

## Problem Statement

There are $N$ holes in a two-dimensional plane. The coordinates of the $i$-th hole are $(x_i,y_i)$.

Let $R=10^{10^{10^{10}}}$. Ringo performs the following operation:

- Randomly choose a point from the interior of a circle of radius $R$ centered at the origin, and put Snuke there. Snuke will move to the hole with the smallest Euclidean distance from the point, and fall into that hole. If there are multiple such holes, the hole with the smallest index will be chosen.

For every $i$ $(1 \leq i \leq N)$, find the probability that Snuke falls into the $i$-th hole.

Here, the operation of randomly choosing a point from the interior of a circle of radius $R$ is defined as follows:

- Pick two real numbers $x$ and $y$ independently according to uniform distribution on $[-R,R]$.
- If $x^2+y^2\leq R^2$, the point $(x,y)$ is chosen. Otherwise, repeat picking the real numbers $x,y$ until the condition is met.

## Constraints

- $2 \leq N \leq 100$
- $|x_i|,|y_i| \leq 10^6(1\leq i\leq N)$
- All given points are pairwise distinct.
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $y_1$
> 
> $:$
> 
> $x_N$ $y_N$

## Output

Print $N$ real numbers. The $i$-th real number must represent the probability that Snuke falls into the $i$-th hole.

The output will be judged correct when, for all output values, the absolute or relative error is at most $10^{-5}$.

```input1
2
0 0
1 1
```

```output1
0.5
0.5
```

If Ringo put Snuke in the region $x+y\leq 1$, Snuke will fall into the first hole. The probability of this happening is very close to $0.5$.
Otherwise, Snuke will fall into the second hole, the probability of which happening is also very close to $0.5$.

```input2
5
0 0
2 8
4 5
2 6
3 10
```

```output2
0.43160120892732328768
0.03480224363653196956
0.13880483535586193855
0.00000000000000000000
0.39479171208028279727
```