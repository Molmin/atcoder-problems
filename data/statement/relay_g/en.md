Score : $100$ points

## Problem Statement

You have $N$ cups and $1$ ball.

The cups are arranged in a row, from left to right.

You turned down all the cups, then inserted the ball into the leftmost cup.

Then, you will perform the following $Q$ operations:

- The $i$-th operation: swap the positions of the $A_i$-th and $B_i$-th cups from the left. If one of these cups contains the ball, the ball will also move.

Since you are a magician, you can cast a magic described below:

- Magic: When the ball is contained in the $i$-th cup from the left, teleport the ball into the adjacent cup (that is, the $(i-1)$-th or $(i+1)$-th cup, if they exist).

The magic can be cast before the first operation, between two operations, or after the last operation, but you are allowed to cast it at most once during the whole process.

Find the number of cups with a possibility of containing the ball after all the operations and possibly casting the magic.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq Q \leq 10^5$
- $1 \leq A_i &lt; B_i \leq N$

## Input

The input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> :          
> 
> $A_Q$ $B_Q$

## Output

Print the number of cups with a possibility of eventually containing the ball.

```input1
10 3
1 3
2 4
4 5
```

```output1
4
```

```input2
20 3
1 7
8 20
1 19
```

```output2
5
```