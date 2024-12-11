Score : $500$ points

## Problem Statement

We have $N$ locked treasure boxes, numbered $1$ to $N$.

A shop sells $M$ keys. The $i$-th key is sold for $a_i$ yen (the currency of Japan), and it can unlock $b_i$ of the boxes: Box $c_{i1}$, $c_{i2}$, $...$, $c_{i{b_i}}$. Each key purchased can be used any number of times.

Find the minimum cost required to unlock all the treasure boxes. If it is impossible to unlock all of them, print $-1$.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 12$
- $1 \leq M \leq 10^3$
- $1 \leq a_i \leq 10^5$
- $1 \leq b_i \leq N$
- $1 \leq c_{i1} &lt; c_{i2} &lt; ... &lt; c_{i{b_i}} \leq N$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $a_1$ $b_1$
> 
> $c_{11}$ $c_{12}$ $...$ $c_{1{b_1}}$
> 
> $:$
> 
> $a_M$ $b_M$
> 
> $c_{M1}$ $c_{M2}$ $...$ $c_{M{b_M}}$

## Output

Print the minimum cost required to unlock all the treasure boxes.
If it is impossible to unlock all of them, print $-1$.

```input1
2 3
10 1
1
15 1
2
30 2
1 2
```

```output1
25
```

We can unlock all the boxes by purchasing the first and second keys, at the cost of $25$ yen, which is the minimum cost required.

```input2
12 1
100000 1
2
```

```output2
-1
```

We cannot unlock all the boxes.

```input3
4 6
67786 3
1 3 4
3497 1
2
44908 3
2 3 4
2156 3
2 3 4
26230 1
2
86918 1
3
```

```output3
69942
```