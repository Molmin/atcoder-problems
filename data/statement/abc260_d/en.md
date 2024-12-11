Score : $400$ points

## Problem Statement

There is a deck consisting of $N$ face-down cards with an integer from $1$ through $N$ written on them.  The integer on the $i$-th card from the top is $P_i$.

Using this deck, you will perform $N$ moves, each consisting of the following steps:

- Draw the topmost card from the deck.  Let $X$ be the integer written on it.
- Stack the drawn card, face up, onto the card with the smallest integer among the face-up topmost cards on the table with an integer greater than or equal to $X$ written on them.  If there is no such card on the table, put the drawn card on the table, face up, without stacking it onto any card.
- Then, if there is a pile consisting of $K$ face-up cards on the table, eat all those cards.  The eaten cards all disappear from the table.

For each card, find which of the $N$ moves eats it.  If the card is not eaten until the end, report that fact.

## Constraints

- All values in input are integers.
- $1 \le K \le N \le 2 \times 10^5$
- $P$ is a permutation of $(1,2,\dots,N)$ (i.e. a sequence obtained by rearranging $(1,2,\dots,N)$).

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $P_1$ $P_2$ $\dots$ $P_N$

## Output

Print $N$ lines.<br>
The $i$-th line ($1 \le i \le N$) should describe the card with the integer $i$ written on it.  Specifically,

- if the card with $i$ written on it is eaten in the $x$-th move, print $x$;
- if that card is not eaten in any move, print $-1$.

```input1
5 2
3 5 2 1 4
```

```output1
4
3
3
-1
4
```

In this input, $P=(3,5,2,1,4)$ and $K=2$.

- In the $1$-st move, the card with $3$ written on it is put on the table, face up, without stacked onto any card.
- In the $2$-nd move, the card with $5$ written on it is put on the table, face up, without stacked onto any card.
- In the $3$-rd move, the card with $2$ written on it is stacked, face up, onto the card with $3$ written on it.-   - Now there is a pile consisting of $K=2$ face-up cards, on which $2$ and $3$ from the top are written, so these cards are eaten.
- In the $4$-th move, the card with $1$ written on it is stacked, face up, onto the card with $5$ written on it.-   - Now there is a pile consisting of $K=2$ face-up cards, on which $1$ and $5$ from the top are written, so these cards are eaten.
- In the $5$-th move, the card with $4$ written on it is put on the table, face up, without stacked onto any card.
- The card with $4$ written on it was not eaten until the end.

```input2
5 1
1 2 3 4 5
```

```output2
1
2
3
4
5
```

If $K=1$, every card is eaten immediately after put on the table within a single move.

```input3
15 3
3 14 15 9 2 6 5 13 1 7 10 11 8 12 4
```

```output3
9
9
9
15
15
6
-1
-1
6
-1
-1
-1
-1
6
15
```