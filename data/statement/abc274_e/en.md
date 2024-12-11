Score : $500$ points

## Problem Statement

In a two-dimensional plane, there are $N$ towns and $M$ chests. Town $i$ is at the coordinates $(X_i,Y_i)$, and chest $i$ is at the coordinates $(P_i,Q_i)$.

Takahashi will go on a trip where he starts at the origin, visits all $N$ towns, and then returns to the origin.<br>
It is not mandatory to visit chests, but each chest contains an accelerator. Each time he picks up an accelerator, his moving speed gets multiplied by $2$.

Takahashi's initial moving speed is $1$. Find the shortest time needed to complete the trip.

## Constraints

- $1 \leq N \leq 12$
- $0 \leq M \leq 5$
- $-10^9 \leq X_i,Y_i,P_i,Q_i \leq 10^9$
- $(0,0)$, $(X_i,Y_i)$, and $(P_i,Q_i)$ are distinct.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $X_1$ $Y_1$
> 
> $\vdots$
> 
> $X_N$ $Y_N$
> 
> $P_1$ $Q_1$
> 
> $\vdots$
> 
> $P_M$ $Q_M$

## Output

Print the answer. Your output will be considered correct if the absolute or relative error from the judge's answer is at most $10^{-6}$.

```input1
2 1
1 1
0 1
1 0
```

```output1
2.5000000000
```

Here is one optimal way to complete the trip.

- Go the distance $1$ from the origin to chest $1$ at a speed of $1$, taking a time of $1$.
- Go the distance $1$ from chest $1$ to town $1$ at a speed of $2$, taking a time of $0.5$.
- Go the distance $1$ from town $1$ to town $2$ at a speed of $2$, taking a time of $0.5$.
- Go the distance $1$ from town $2$ to the origin at a speed of $2$, taking a time of $0.5$.

```input2
2 1
1 1
0 1
100 0
```

```output2
3.4142135624
```

Here is one optimal way to complete the trip.

- Go the distance $1.41\ldots$ from the origin to town $1$ at a speed of $1$, taking a time of $1.41\ldots$.
- Go the distance $1$ from town $1$ to town $2$ at a speed of $1$, taking a time of $1$.
- Go the distance $1$ from town $2$ to the origin at a speed of $1$, taking a time of $1$.

```input3
1 2
4 4
1 0
0 1
```

```output3
4.3713203436
```

Here is one optimal way to complete the trip.

- Go the distance $1$ from the origin to chest $1$ at a speed of $1$, taking a time of $1$.
- Go the distance $1.41\ldots$ from chest $1$ to chest $2$ at a speed of $2$, taking a time of $0.707\ldots$.
- Go the distance $5$ from chest $2$ to town $1$ at a speed of $4$, taking a time of $1.25$.
- Go the distance $5.65\ldots$ from town $1$ to the origin at a speed of $4$, taking a time of $1.41\ldots$.