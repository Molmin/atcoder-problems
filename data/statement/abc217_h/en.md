Score : $600$ points

## Problem Statement

In a game called Snuketoon, developed by AtCoder, Inc., the player plays as Snuke to dodge water from water guns.

The platform consists of an infinite number line, and Snuke is at the point $0$ at the beginning of the game.<br>
Starting from the beginning of the game, Snuke can make one of the three moves in each second: move $1$ in the negative direction, move $1$ in the positive direction, or remain still. More formally, if Snuke's position is $p$ at $t$ seconds ($t \geq 0$, $t$ is an integer) from the beginning of the game, his position at $t+1$ seconds can be $p-1$, $p$, or $p+1$.

Snuke takes damage from getting soaked by water guns. The water guns shoot $N$ times, and the $i$-th shot is represented by $T_i$, $D_i$, and $X_i$ as follows.

- At $T_i$ seconds from the beginning of the game, water is shot from the left or right. Let $p$ be Snuke's position at that time. He takes the following damage if he is in the following range.-   - When $D_i = 0$, he takes $X_i - p$ points of damage if he is in the range $p \lt X_i$.
-   - When $D_i = 1$, he takes $p - X_i$ points of damage if he is in the range $X_i \lt p$.

Takahashi, a pro gamer, wants to minimize the total damage taken by Snuke after the end of the $N$-th shot, to post a tweet on this game. Find the total damage taken by Snuke when the game is played to minimize it.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq T_1 \lt T_2 \lt \dots \lt T_N \leq 10^9$
- $D_i$ $(1 \leq i \leq N)$ is $0$ or $1$.
- $-10^9 \leq X_i \leq 10^9$ $(1 \leq i \leq N)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $T_1$ $D_1$ $X_1$
> 
> $T_2$ $D_2$ $X_2$
> 
> $\vdots$
> 
> $T_N$ $D_N$ $X_N$

## Output

Print the number of points of damage taken by Snuke when the game is played to minimize it.

```input1
3
1 0 3
3 1 0
4 0 6
```

```output1
7
```

For convenience, let $t$ denote the number of seconds elapsed from the beginning of the game. The optimal course of movements for Snuke until all the shots are done is as follows.

- When $t = 0$, Snuke is at the point $0$. He moves $1$ in the positive direction.
- When $t = 1$, Snuke is at the point $1$ and takes $2$ points of damage from the first shot. He moves $1$ in the negative direction.
- When $t = 2$, Snuke is at the point $0$. He remains still.
- When $t = 3$, Snuke is at the point $0$ and takes no damage from the second shot. He moves $1$ in the positive direction.
- When $t = 4$, Snuke is at the point $1$ and takes $5$ points of damage from the third shot.

Here, Snuke takes a total of $7$ points of damage, so you should print $7$.

```input2
3
1 0 1
6 1 1
8 0 -1
```

```output2
0
```

```input3
5
1 0 1000000000
2 1 -1000000000
3 0 1000000000
4 1 -1000000000
5 0 1000000000
```

```output3
4999999997
```