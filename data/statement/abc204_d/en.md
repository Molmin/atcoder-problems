Score : $400$ points

## Problem Statement

Takahashi is going to cook $N$ dishes called Dish $1$ through $N$.

Dish $i$ can be cooked by using an oven for $T_i$ consecutive minutes. An oven cannot be used for two or more dishes simultaneously.

If Takahashi has two ovens to use, what is the shortest number of minutes needed to cook all the $N$ dishes? Assume that all processes other than using ovens take negligible time.

## Constraints

- $1 \leq N \leq 100$
- $1 \leq T_i \leq 10^3$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $T_1$ $\ldots$ $T_N$

## Output

Print the answer.

```input1
5
8 3 7 2 5
```

```output1
13
```

We can, for example, use the two ovens as follows to cook all the dishes in $13$ minutes.

- The first oven: Cook Dishes $5$ and $1$ in this order.
- The second oven: Cook Dishes $2$, $4$, and $3$ in this order.

```input2
2
1000 1
```

```output2
1000
```

```input3
9
3 14 15 9 26 5 35 89 79
```

```output3
138
```