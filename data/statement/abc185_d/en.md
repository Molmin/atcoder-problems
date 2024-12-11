Score : $400$ points

## Problem Statement

There are $N$ squares arranged in a row from left to right. Let Square $i$ be the $i$-th square from the left.<br>
$M$ of those squares, Square $A_1$, $A_2$, $A_3$, $\ldots$, $A_M$, are blue; the others are white. ($M$ may be $0$, in which case there is no blue square.)<br>
You will choose a positive integer $k$ just once and make a stamp with width $k$. In one use of a stamp with width $k$, you can choose $k$ consecutive squares from the $N$ squares and repaint them red, as long as those $k$ squares do not contain a blue square.<br>
At least how many uses of the stamp are needed to have no white square, with the optimal choice of $k$ and the usage of the stamp?

## Constraints

- $1 \le N \le 10^9$
- $0 \le M \le 2 \times 10^5$
- $1 \le A_i \le N$
- $A_i$ are pairwise distinct.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1 \hspace{7pt} A_2 \hspace{7pt} A_3 \hspace{5pt} \dots \hspace{5pt} A_M$

## Output

Print the minimum number of uses of the stamp needed to have no white square.

```input1
5 2
1 3
```

```output1
3
```

If we choose $k = 1$ and repaint the three white squares one at a time, three uses are enough, which is optimal.<br>
Choosing $k = 2$ or greater would make it impossible to repaint Square $2$, because of the restriction that does not allow the $k$ squares to contain a blue square.

```input2
13 3
13 3 9
```

```output2
6
```

One optimal strategy is choosing $k = 2$ and using the stamp as follows:

- Repaint Squares $1, 2$ red.
- Repaint Squares $4, 5$ red.
- Repaint Squares $5, 6$ red.
- Repaint Squares $7, 8$ red.
- Repaint Squares $10, 11$ red.
- Repaint Squares $11, 12$ red.

Note that, although the $k$ consecutive squares chosen when using the stamp cannot contain blue squares, they can contain already red squares.

```input3
5 5
5 2 1 4 3
```

```output3
0
```

If there is no white square from the beginning, we do not have to use the stamp at all.

```input4
1 0
```

```output4
1
```

$M$ may be $0$.