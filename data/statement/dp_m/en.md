Score : $100$ points

## Problem Statement

There are $N$ children, numbered $1, 2, \ldots, N$.

They have decided to share $K$ candies among themselves.
Here, for each $i$ ($1 \leq i \leq N$), Child $i$ must receive between $0$ and $a_i$ candies (inclusive).
Also, no candies should be left over.

Find the number of ways for them to share candies, modulo $10^9 + 7$.
Here, two ways are said to be different when there exists a child who receives a different number of candies.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 100$
- $0 \leq K \leq 10^5$
- $0 \leq a_i \leq K$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $a_1$ $a_2$ $\ldots$ $a_N$

## Output

Print the number of ways for the children to share candies, modulo $10^9 + 7$.

```input1
3 4
1 2 3
```

```output1
5
```

There are five ways for the children to share candies, as follows:

- $(0, 1, 3)$
- $(0, 2, 2)$
- $(1, 0, 3)$
- $(1, 1, 2)$
- $(1, 2, 1)$

Here, in each sequence, the $i$-th element represents the number of candies that Child $i$ receives.

```input2
1 10
9
```

```output2
0
```

There may be no ways for the children to share candies.

```input3
2 0
0 0
```

```output3
1
```

There is one way for the children to share candies, as follows:

- $(0, 0)$

```input4
4 100000
100000 100000 100000 100000
```

```output4
665683269
```

Be sure to print the answer modulo $10^9 + 7$.