Score : $350$ points

## Problem Statement

Takahashi has $N$ cards from the card game "AtCoder Magics." The $i$-th card will be called card $i$. Each card has two parameters: strength and cost. Card $i$ has a strength of $A_i$ and a cost of $C_i$.

He does not like weak cards, so he will discard them. Specifically, he will repeat the following operation until it can no longer be performed:

- Choose two cards $x$ and $y$ such that $A_x &gt; A_y$ and $C_x &lt; C_y$. Discard card $y$.

It can be proved that the set of remaining cards when the operations can no longer be performed is uniquely determined. Find this set of cards.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq A_i, C_i \leq 10^9$
- $A_1, A_2, \dots ,A_N$ are all distinct.
- $C_1, C_2, \dots ,C_N$ are all distinct.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $C_1$
> 
> $A_2$ $C_2$
> 
> $\vdots$
> 
> $A_N$ $C_N$

## Output

Let there be $m$ remaining cards, cards $i_1, i_2, \dots, i_m$, in ascending order. Print these in the following format:

> $m$
> 
> $i_1$ $i_2$ $\cdots$ $i_m$

```input1
3
2 4
1 1
3 2
```

```output1
2
2 3
```

Focusing on cards $1$ and $3$, we have $A_1 &lt; A_3$ and $C_1 &gt; C_3$, so card $1$ can be discarded.

No further operations can be performed. At this point, cards $2$ and $3$ remain, so print them.

```input2
5
1 1
10 2
100 3
1000 4
10000 5
```

```output2
5
1 2 3 4 5
```

In this case, no cards can be discarded.

```input3
6
32 101
65 78
2 29
46 55
103 130
52 40
```

```output3
4
2 3 5 6
```