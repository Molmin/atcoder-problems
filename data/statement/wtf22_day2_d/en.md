Score : $2000$ points

## Problem Statement

You are given a sequence of positive integers $A_1,A_2,\cdots,A_N$.
Let $S=N+\sum_{1 \leq i \leq N}A_i$.

Cat Snuke has $S$ cards.
Each card has an integer written on it. The integers on the cards are $A_1,A_2,\cdots,A_N,-1,\cdots,-1$.
Particularly, there are $\sum_{1 \leq i \leq N}A_i$ cards with $-1$.

Snuke is now standing at the coordinate $0$ on a number line.
He will perform the following operation $S$ times.

- Let $x$ be the current coordinate of Snuke.
 Choose and discard one of the cards he has.
Let $v$ be the number on the discarded card, and jump to the coordinate $x+v$.
If he has jumped to the coordinate $0$, earn one coin.

For each $k=1,2,\cdots,N$, find the number, modulo $998244353$, of sequences of moves for Snuke such that he earns exactly $k$ coins.

Note that you should count sequences of moves.
Namely, if two cards have the same number, discarding one of them is not distinguished from discarding the other.

## Constraints

- $1 \leq N \leq 5000$
- $1 \leq A_i \leq 5000$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print $N$ lines.
The $i$-th line should contain the answer for $k=i$.

```input1
2
1 1
```

```output1
2
4
```

One possible sequence of moves is $(-1,+1,+1,-1)$.
Here, Snuke changes his coordinate as $0 \to -1 \to 0 \to 1 \to 0$ and earns two coins.

Here are all possible sequences of moves and the number of coins that will be earned.

- $(-1,-1,+1,+1)$: one coin
- $(-1,+1,-1,+1)$: two coins
- $(-1,+1,+1,-1)$: two coins
- $(+1,-1,-1,+1)$: two coins
- $(+1,-1,+1,-1)$: two coins
- $(+1,+1,-1,-1)$: one coin

```input2
3
1 2 3
```

```output2
140
220
144
```

```input3
20
16 6 15 19 1 9 6 1 11 7 6 12 3 11 11 18 10 9 15 5
```

```output3
507808441
401798892
110460932
680359166
737048635
442374434
737773176
980506765
473506608
693729211
532774651
621434128
4273369
839437048
585784927
590354055
969740008
825216624
442091194
660636013
```