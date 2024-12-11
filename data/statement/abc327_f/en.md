Score : $550$ points

## Problem Statement

There are apple trees lined up on a number line, and $N$ apples fall from the trees.<br>
Specifically, for each $1\leq i\leq N$, an apple falls at coordinate $X_i$ at time $T_i$.

Takahashi has a basket with durability $D$ and length $W$, and he can take the following action **exactly once**.

Choose positive integers $S$ and $L$. He sets up the basket to cover the range $L-0.5\leq x\leq L+W-0.5$ at time $S-0.5$, and retrieves it at time $S+D-0.5$.
He gets all the apples that fell into the range covered by the basket between the time it was set up and the time it was retrieved.

He cannot move the basket once it has been set up, nor can he set it up again once it has been retrieved.<br>
Find the maximum number of apples that he can get.

## Constraints

- $1 \leq N\leq 2\times 10^5$
- $1 \leq D\leq 2\times 10^5$
- $1 \leq W\leq 2\times 10^5$
- $1 \leq T_i\leq 2\times 10^5$
- $1 \leq X_i\leq 2\times 10^5$
- All pairs $(T_i,X_i)$ are different.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $D$ $W$
> 
> $T_1$ $X_1$
> 
> $T_2$ $X_2$
> 
> $\vdots$
> 
> $T_N$ $X_N$

## Output

Print the maximum number of apples that Takahashi can get.

```input1
8 4 3
1 1
3 4
6 4
5 2
4 2
4 3
5 5
7 3
```

```output1
5
```

If Takahashi chooses $S=3$ and $L=2$, he will set up the basket to cover the range $1.5\leq x\leq 4.5$ from time $2.5$ to $6.5$. Then, he gets the following five apples:

- The apple that falls at coordinate $X_2=4$ at time $T_2=3$
- The apple that falls at coordinate $X_3=4$ at time $T_3=6$
- The apple that falls at coordinate $X_4=2$ at time $T_4=5$
- The apple that falls at coordinate $X_5=2$ at time $T_5=4$
- The apple that falls at coordinate $X_6=3$ at time $T_6=4$

There is no way to get six or more apples, so print $5$.