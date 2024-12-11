Score : $500$ points

## Problem Statement

The Republic of AtCoder has $N$ cities and $M$ roads.

The cities are numbered $1$ through $N$, and the roads are numbered $1$ through $M$. Road $i$ connects City $A_i$ and City $B_i$ bidirectionally.

There is a rush hour in the country that peaks at time $0$. If you start going through Road $i$ at time $t$, it will take $C_i+ \left\lfloor \frac{D_i}{t+1} \right\rfloor$ time units to reach the other end. ($\lfloor x\rfloor$ denotes the largest integer not exceeding $x$.)

Takahashi is planning to depart City $1$ at time $0$ or some **integer time** later and head to City $N$.

Print the earliest time when Takahashi can reach City $N$ if he can stay in each city for an **integer number of time units**. It can be proved that the answer is an integer under the Constraints of this problem.

If City $N$ is unreachable, print `-1` instead.

## Constraints

- $2 \leq N \leq 10^5$
- $0 \leq M \leq 10^5$
- $1 \leq A_i,B_i \leq N$
- $0 \leq C_i,D_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$ $C_1$ $D_1$
> 
> $\vdots$
> 
> $A_M$ $B_M$ $C_M$ $D_M$

## Output

Print an integer representing the earliest time when Takahashi can reach City $N$, or `-1` if City $N$ is unreachable.

```input1
2 1
1 2 2 3
```

```output1
4
```

We will first stay in City $1$ until time $1$. Then, at time $1$, we will start going through Road $1$, which will take $2+\left\lfloor \frac{3}{1+1} \right\rfloor = 3$ time units before reaching City $2$ at time $4$.

It is impossible to reach City $2$ earlier than time $4$.

```input2
2 3
1 2 2 3
1 2 2 1
1 1 1 1
```

```output2
3
```

There may be multiple roads connecting the same pair of cities, and a road going from a city to the same city.

```input3
4 2
1 2 3 4
3 4 5 6
```

```output3
-1
```

There may be no path from City $1$ to City $N$.

```input4
6 9
1 1 0 0
1 3 1 2
1 5 2 3
5 2 16 5
2 6 1 10
3 4 3 4
3 5 3 10
5 6 1 100
4 2 0 110
```

```output4
20
```