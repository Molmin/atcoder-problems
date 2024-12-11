Score : $550$ points

## Problem Statement

You are planning to travel from coordinate $0$ to coordinate $X_N$ on a number line, then turn around and return to coordinate $0$. Here, you can only move in the positive direction on the outbound trip and in the negative direction on the return trip.<br>
You will travel by car. The car consumes one liter of fuel for every unit distance it travels. You can carry up to $H$ liters of fuel and cannot move without fuel.<br>
For each $i = 1, 2, \ldots, N-1$, there is a gas station at coordinate $X_i$, where you can get $F_i$ liters of fuel for $P_i$ yen. However, you cannot carry more than $H$ liters of fuel. More precisely, if you have $x$ liters of fuel and use the gas station at coordinate $X_i$, you must pay $P_i$ yen, and your amount of fuel becomes $\min(x + F_i, H)$ liters. Each gas station can be used at most once **in total during the round trip**.<br>
Determine if you can achieve this plan when you initially have $H$ liters of fuel, and if it is possible, find the minimum amount of money required.

## Constraints

- $1 \leq N, H \leq 300$
- $0 &lt; X_1 &lt; X_2 &lt; \ldots &lt; X_N \leq 10^5$
- $1 \leq P_i \leq 10^5$
- $1 \leq F_i \leq H$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $H$
> 
> $X_1$ $X_2$ $\ldots$ $X_N$
> 
> $P_1$ $F_1$
> 
> $P_2$ $F_2$
> 
> $\vdots$
> 
> $P_{N-1}$ $F_{N-1}$

## Output

If the plan can be achieved, print the minimum amount of money required; otherwise, print `-1`.

```input1
4 10
2 5 9 11
8 10
5 8
4 9
```

```output1
9
```

You can achieve the plan by using the gas station at coordinate $5$ on the outbound trip and the one at coordinate $9$ on the return trip, paying a total of $9$ yen.<br>
It is impossible to achieve the plan by paying $8$ yen or less. Note that you cannot use the same gas station on both the outbound and return trips.

```input2
1 1
100000
```

```output2
-1
```

```input3
5 20
4 13 16 18 23
1 16
2 8
4 11
8 13
```

```output3
13
```