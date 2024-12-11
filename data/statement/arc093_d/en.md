Score : $1100$ points

## Problem Statement

There are $2^N$ players, numbered $1, 2, ..., 2^N$.
They decided to hold a tournament.

The tournament proceeds as follows:

- Choose a permutation of $1, 2, ..., 2^N$: $p_1, p_2, ..., p_{2^N}$.
- The players stand in a row in the order of Player $p_1$, Player $p_2$, $...$, Player $p_{2^N}$.
- Repeat the following until there is only one player remaining in the row:-   - Play the following matches: the first player in the row versus the second player in the row, the third player versus the fourth player, and so on. The players who lose leave the row. The players who win stand in a row again, preserving the relative order of the players.
- The last player who remains in the row is the champion.

It is known that, the result of the match between two players can be written as follows, using $M$ integers $A_1, A_2, ..., A_M$ given as input:

- When $y = A_i$ for some $i$, the winner of the match between Player $1$ and Player $y$ ($2 \leq y \leq 2^N$) will be Player $y$.
- When $y \neq A_i$ for every $i$, the winner of the match between Player $1$ and Player $y$ ($2 \leq y \leq 2^N$) will be Player $1$.
- When $2 \leq x &lt; y \leq 2^N$, the winner of the match between Player $x$ and Player $y$ will be Player $x$.

The champion of this tournament depends only on the permutation $p_1, p_2, ..., p_{2^N}$ chosen at the beginning.
Find the number of permutation $p_1, p_2, ..., p_{2^N}$ chosen at the beginning of the tournament that would result in Player $1$ becoming the champion, modulo $10^9 + 7$.

## Constraints

- $1 \leq N \leq 16$
- $0 \leq M \leq 16$
- $2 \leq A_i \leq 2^N$ ($1 \leq i \leq M$)
- $A_i &lt; A_{i + 1}$ ($1 \leq i &lt; M$)

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $...$ $A_M$

## Output

Print the answer.

```input1
2 1
3
```

```output1
8
```

Examples of $p$ that satisfy the condition are: $[1, 4, 2, 3]$ and $[3, 2, 1, 4]$. Examples of $p$ that do not satisfy the condition are: $[1, 2, 3, 4]$ and $[1, 3, 2, 4]$.

```input2
4 3
2 4 6
```

```output2
0
```

```input3
3 0
```

```output3
40320
```

```input4
3 3
3 4 7
```

```output4
2688
```

```input5
16 16
5489 5490 5491 5492 5493 5494 5495 5497 18993 18995 18997 18999 19000 19001 19002 19003
```

```output5
816646464
```