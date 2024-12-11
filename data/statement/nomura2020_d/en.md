Score : $700$ points

## Problem Statement

There are $N$ towns numbered $1, 2, \cdots, N$.

Some roads are planned to be built so that each of them connects two distinct towns bidirectionally. Currently, there are no roads connecting towns.

In the planning of construction, each town chooses one town different from itself and requests the following: roads are built so that the chosen town is reachable from itself using one or more roads.

These requests from the towns are represented by an array $P_1, P_2, \cdots, P_N$. If $P_i = -1$, it means that Town $i$ has not chosen the request; if $1 \leq P_i \leq N$, it means that Town $i$ has chosen Town $P_i$.

Let $K$ be the number of towns $i$ such that $P_i = -1$. There are $(N-1)^K$ ways in which the towns can make the requests. For each way to make requests, find the minimum number of roads needed to meet all the requests, and print the sum of those $(N-1)^K$ numbers, modulo ($10^9+7$).

## Constraints

- $2 \leq N \leq 5000$
- $P_i = -1$ or $1 \leq P_i \leq N$.
- $P_i \neq i$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $P_2$ $\cdots$ $P_N$

## Output

For each way to make requests, find the minimum number of roads needed to meet all the requests, and print the sum of those $(N-1)^K$ numbers, modulo ($10^9+7$).

```input1
4
2 1 -1 3
```

```output1
8
```

There are three ways to make requests, as follows:

- Choose $P_1 = 2, P_2 = 1, P_3 = 1, P_4 = 3$. In this case, at least three roads - for example, $(1,2),(1,3),(3,4)$ - are needed to meet the requests.
- Choose $P_1 = 2, P_2 = 1, P_3 = 2, P_4 = 3$. In this case, at least three roads - for example, $(1,2),(1,3),(3,4)$ - are needed to meet the requests.
- Choose $P_1 = 2, P_2 = 1, P_3 = 4, P_4 = 3$. In this case, at least two roads - for example, $(1,2),(3,4)$ - are needed to meet the requests.

Note that it is not mandatory to connect Town $i$ and Town $P_i$ directly.

The sum of the above numbers is $8$.

```input2
2
2 1
```

```output2
1
```

There may be just one fixed way to make requests.

```input3
10
2 6 9 -1 6 9 -1 -1 -1 -1
```

```output3
527841
```