Score : $800$ points

## Problem Statement

There are $N$ towns in Snuke Kingdom, conveniently numbered $1$ through $N$.
Town $1$ is the capital.

Each town in the kingdom has a *Teleporter*, a facility that instantly transports a person to another place.
The destination of the Teleporter of town $i$ is town $a_i$ ($1 \leq a_i \leq N$).
It is guaranteed that **one can get to the capital from any town by using the Teleporters some number of times**.

King Snuke loves the integer $K$.
The selfish king wants to change the destination of the Teleporters so that the following holds:

- Starting from any town, one will be at the capital after using the Teleporters exactly $K$ times in total.

Find the minimum number of the Teleporters whose destinations need to be changed in order to satisfy the king's desire.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq a_i \leq N$
- One can get to the capital from any town by using the Teleporters some number of times.
- $1 \leq K \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $a_1$ $a_2$ $...$ $a_N$

## Output

Print the minimum number of the Teleporters whose destinations need to be changed in order to satisfy King Snuke's desire.

```input1
3 1
2 3 1
```

```output1
2
```

Change the destinations of the Teleporters to $a = (1,1,1)$.

```input2
4 2
1 1 2 2
```

```output2
0
```

There is no need to change the destinations of the Teleporters, since the king's desire is already satisfied.

```input3
8 2
4 1 2 3 1 2 3 4
```

```output3
3
```

For example, change the destinations of the Teleporters to $a = (1,1,2,1,1,2,2,4)$.