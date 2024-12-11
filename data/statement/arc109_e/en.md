Score : $700$ points

## Problem Statement

Kuro and Shiro are playing with a board composed of $n$ squares lining up in a row.
The squares are numbered $1$ to $n$ from left to right, and Square $s$ has a mark on it.

First, for each square, Kuro paints it black or white with equal probability, independently from other squares. Then, he puts on Square $s$ a stone of the same color as the square.

Kuro and Shiro will play a game using this board and infinitely many black stones and white stones. In this game, Kuro and Shiro alternately put a stone as follows, with Kuro going first:

1. Choose an empty square adjacent to a square with a stone on it. Let us say Square $i$ is chosen.
2. Put on Square $i$ a stone of the same color as the square.
3. If there are squares other than Square $i$ that contain a stone of the same color as the stone just placed, among such squares, let Square $j$ be the one nearest to Square $i$. Change the color of every stone between Square $i$ and Square $j$ to the color of Square $i$.

The game ends when the board has no empty square.

Kuro plays optimally to maximize the number of black stones at the end of the game, while Shiro plays optimally to maximize the number of white stones at the end of the game.

For each of the cases $s=1,\dots,n$, find the expected value, modulo $998244353$, of the number of black stones at the end of the game.

## Notes

When the expected value in question is represented as an irreducible fraction $p/q$, there uniquely exists an integer $r$ such that $rq=p \sim (\text{mod } 998244353)$ and $0 \leq r \lt 998244353$, which we ask you to find.

## Constraints

- $1 \leq n \leq 2\times 10^5$

## Input

Input is given from Standard Input in the following format:

> $n$

## Output

Print $n$ values.
The $i$-th value should be the expected value, modulo $998244353$, of the number of black stones at the end of the game for the case $s=i$.

```input1
3
```

```output1
499122178
499122178
499122178
```

Let us use `b` to represent a black square and `w` to represent a white square.
There are eight possible boards: `www`, `wwb`, `wbw`, `wbb`, `bww`, `bwb`, `bbw`, and `bbb`, which are chosen with equal probability.

For each of these boards, there will be $0$, $1$, $0$, $2$, $1$, $3$, $2$, and $3$ black stones at the end of the game, respectively, regardless of the value of $s$.
Thus, the expected number of stones is $(0+1+0+2+1+3+2+3)/8 = 3/2$, and the answer is $r = 499122178$, which satisfies $2r = 3 \sim (\text{mod } 998244353)$ and $0 \leq r \lt 998244353$.

```input2
10
```

```output2
5
5
992395270
953401350
735035398
735035398
953401350
992395270
5
5
```

```input3
19
```

```output3
499122186
499122186
499110762
499034602
498608106
496414698
485691370
434999274
201035754
138645483
201035754
434999274
485691370
496414698
498608106
499034602
499110762
499122186
499122186
```