Score : $400$ points

## Problem Statement

There are $N$ piles of stones, and the $i$-th pile ($1 \leq i \leq N$) has $A_i$ stones.

You will choose a positive integer $k$.
Then, Alice and Bob will play a game with these piles as follows.

- Starting with Alice, the players take turns to play.
- In each turn, the player must choose a non-empty pile and remove from it some number of stones between $1$ and $k$, inclusive.

The person who cannot make a move on their turn loses, and the other person wins.

You want to choose a positive integer $k$ for which there is a winning strategy for Alice.
Determine if such a $k$ exists.
If it exists, determine if there is a maximum value for such $k$.
If the maximum value exists, provide that value.

## Constraints

- $1 \leq N \leq 250000$
- $1 \leq A_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

If there is no $k$ for which Alice has a winning strategy, print $0$.

If there is a $k$ for which Alice has a winning strategy, and there is no maximum value for such $k$, print $-1$.

If there is a $k$ for which Alice has a winning strategy, and there is a maximum value for such $k$, print that value.

```input1
3
1 2 3
```

```output1
2
```

For example, if $k=2$, Alice has a winning strategy.
If $k \geq 3$, Alice has no winning strategy, so the answer is $k=2$.

```input2
4
1 2 3 4
```

```output2
-1
```

For example, Alice has winning strategies for all $k=100,200,300,\cdots$.
Thus, there is no maximum value for $k$, so print $-1$.

```input3
2
100 100
```

```output3
0
```

No matter what $k$ is chosen, Alice has no winning strategy.
Thus, print $0$.