Score : $350$ points

## Problem Statement

There are $N$ ants on a number line, labeled $1$ to $N$. Ant $i$ $(1 \leq i \leq N)$ starts at coordinate $X_i$ and faces either a positive or negative direction. Initially, all ants are at distinct coordinates. The direction each ant is facing is represented by a binary string $S$ of length $N$, where ant $i$ is facing the negative direction if $S_i$ is `0` and the positive direction if $S_i$ is `1`.

Let the current time be $0$, and the ants move in their respective directions at a speed of $1$ unit per unit time for $(T+0.1)$ units of time until time $(T+0.1)$. If multiple ants reach the same coordinate, they pass through each other without changing direction or speed. After $(T+0.1)$ units of time, all ants stop.

Find the number of pairs $(i, j)$ such that $1 \leq i &lt; j \leq N$ and ants $i$ and $j$ pass each other from now before time $(T+0.1)$.

## Constraints

- $2 \leq N \leq 2 \times 10^{5}$
- $1 \leq T \leq 10^{9}$
- $S$ is a string of length $N$ consisting of `0` and `1`.
- $-10^{9} \leq X_i \leq 10^{9}$ $(1 \leq i \leq N)$
- $X_i \neq X_j$ $(1 \leq i &lt; j \leq N)$
- $N$, $T$, and $X_i$ $(1 \leq i \leq N)$ are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $T$
> 
> $S$
> 
> $X_1$ $X_2$ ... $X_N$

## Output

Print the answer.

```input1
6 3
101010
-5 -1 0 1 2 4
```

```output1
5
```

The following five pairs of ants pass each other:

- Ant $3$ and ant $4$ pass each other at time $0.5$.
- Ant $5$ and ant $6$ pass each other at time $1$.
- Ant $1$ and ant $2$ pass each other at time $2$.
- Ant $3$ and ant $6$ pass each other at time $2$.
- Ant $1$ and ant $4$ pass each other at time $3$.

No other pairs of ants pass each other, so print $5$.

```input2
13 656320850
0100110011101
-900549713 -713494784 -713078652 -687818593 -517374932 -498415009 -472742091 -390030458 -379340552 -237481538 -44636942 352721061 695864366
```

```output2
14
```