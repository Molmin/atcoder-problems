Score : $400$ points

## Problem Statement

We have a water heater, which supplies $W$ liters of hot water per minute.

There are $N$ people. The $i$-th person plans to use $P_i$ liters of hot water per minute boiled by the heater from Time $S_i$ to $T_i$ (excluding at Time $T_i$ exactly). As hot water gets cold fast, it cannot be stored.

Is it possible to supply hot water to the people according to their plans?

## Constraints

- $1\leq N \leq 2\times 10^5$
- $0\leq S_i &lt; T_i \leq 2\times 10^5$
- $1\leq W, P_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $W$
> 
> $S_1$ $T_1$ $P_1$
> 
> $\vdots$
> 
> $S_N$ $T_N$ $P_N$

## Output

If it is possible to supply hot water to the people according to their plans, print `Yes`; otherwise, print `No`.

```input1
4 10
1 3 5
2 4 4
3 10 6
2 4 1
```

```output1
No
```

Between Time $3$ and $4$, the $2$-nd, $3$-rd, and $4$-th persons plan to use $4$, $6$, and $1$ liter(s) of hot water per minute, for a total of $11$ liters per minute.

The water heater can only supply $10$ liters of hot water per minute, which is not enough.

```input2
4 10
1 3 5
2 4 4
3 10 6
2 3 1
```

```output2
Yes
```

```input3
6 1000000000
0 200000 999999999
2 20 1
20 200 1
200 2000 1
2000 20000 1
20000 200000 1
```

```output3
Yes
```