Score : $300$ points

## Problem Statement

There is a circular pond with a perimeter of $K$ meters, and $N$ houses around them.

The $i$-th house is built at a distance of $A_i$ meters from the northmost point of the pond, measured clockwise around the pond.

When traveling between these houses, you can only go around the pond.

Find the minimum distance that needs to be traveled when you start at one of the houses and visit all the $N$ houses.

## Constraints

- $2 \leq K \leq 10^6$
- $2 \leq N \leq 2 \times 10^5$
- $0 \leq A_1 &lt; ... &lt; A_N &lt; K$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $K$ $N$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Print the minimum distance that needs to be traveled when you start at one of the houses and visit all the $N$ houses.

```input1
20 3
5 10 15
```

```output1
10
```

If you start at the $1$-st house and go to the $2$-nd and $3$-rd houses in this order, the total distance traveled will be $10$.

```input2
20 3
0 5 15
```

```output2
10
```

If you start at the $2$-nd house and go to the $1$-st and $3$-rd houses in this order, the total distance traveled will be $10$.