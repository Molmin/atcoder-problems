Score : $300$ points

## Problem Statement

A railroad running from west to east in Atcoder Kingdom is now complete.

There are $N$ stations on the railroad, numbered $1$ through $N$ from west to east.

Tomorrow, the opening ceremony of the railroad will take place.

On this railroad, for each integer $i$ such that $1 \leq i \leq N-1$, there will be trains that run from Station $i$ to Station $i+1$ in $C_i$ seconds. No other trains will be operated.

The first train from Station $i$ to Station $i+1$ will depart Station $i$ $S_i$ seconds after the ceremony begins. Thereafter, there will be a train that departs Station $i$ every $F_i$ seconds.

Here, it is guaranteed that $F_i$ divides $S_i$.

That is, for each Time $t$ satisfying $S_i \leq t$ and $t \% F_i=0$, there will be a train that departs Station $i$ $t$ seconds after the ceremony begins and arrives at Station $i+1$ $t+C_i$ seconds after the ceremony begins, where $A \% B$ denotes $A$ modulo $B$, and there will be no other trains.

For each $i$, find the earliest possible time we can reach Station $N$ if we are at Station $i$ when the ceremony begins, ignoring the time needed to change trains.

## Constraints

- $1 \leq N \leq 500$
- $1 \leq C_i \leq 100$
- $1 \leq S_i \leq 10^5$
- $1 \leq F_i \leq 10$
- $S_i \% F_i=0$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $C_1$ $S_1$ $F_1$
> 
> $:$
> 
> $C_{N-1}$ $S_{N-1}$ $F_{N-1}$

## Output

Print $N$ lines. Assuming that we are at Station $i$ $(1 \leq i \leq N)$ when the ceremony begins, if the earliest possible time we can reach Station $N$ is $x$ seconds after the ceremony begins, the $i$-th line should contain $x$.

```input1
3
6 5 1
1 10 1
```

```output1
12
11
0
```

We will travel from Station $1$ as follows:

- $5$ seconds after the beginning: take the train to Station $2$.
- $11$ seconds: arrive at Station $2$.
- $11$ seconds: take the train to Station $3$.
- $12$ seconds: arrive at Station $3$.

We will travel from Station $2$ as follows:

- $10$ seconds: take the train to Station $3$.
- $11$ seconds: arrive at Station $3$.

Note that we should print $0$ for Station $3$.

```input2
4
12 24 6
52 16 4
99 2 2
```

```output2
187
167
101
0
```

```input3
4
12 13 1
44 17 17
66 4096 64
```

```output3
4162
4162
4162
0
```