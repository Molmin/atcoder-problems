Score : $300$ points

## Problem Statement

We have $HW$ cards arranged in a matrix with $H$ rows and $W$ columns.<br>
For each $i=1, \ldots, N$, the card at the $A_i$-th row from the top and $B_i$-th column from the left has a number $i$ written on it. The other $HW-N$ cards have nothing written on them.

We will repeat the following two kinds of operations on these cards as long as we can.

- If there is a row without a numbered card, remove all the cards in that row and fill the gap by shifting the remaining cards upward.
- If there is a column without a numbered card, remove all the cards in that column and fill the gap by shifting the remaining cards to the left.

Find the position of each numbered card after the end of the process above. It can be proved that these positions are uniquely determined without depending on the order in which the operations are done.

## Constraints

- $1 \leq H,W \leq 10^9$
- $1 \leq N \leq \min(10^5,HW)$
- $1 \leq A_i \leq H$
- $1 \leq B_i \leq W$
- All pairs $(A_i,B_i)$ are distinct.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$ $N$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_N$ $B_N$

## Output

Print $N$ lines.

If, after the end of the process, the card with the number $i$ is at the $C_i$-th row from the top and $D_i$-th column from the left, the $i$-th line should contain $C_i$ and $D_i$ in this order with a space between them.

```input1
4 5 2
3 2
2 5
```

```output1
2 1
1 2
```

Let `*` represent a card with nothing written on it. The initial arrangement of cards is:

```output1
*****
****2
*1***
*****
```

After the end of the process, they will be arranged as follows:

```output1
*2
1*
```

Here, the card with $1$ is at the $2$-nd row from the top and $1$-st column from the left, and the card with $2$ is at the $1$-st row from the top and $2$-nd column from the left.

```input2
1000000000 1000000000 10
1 1
10 10
100 100
1000 1000
10000 10000
100000 100000
1000000 1000000
10000000 10000000
100000000 100000000
1000000000 1000000000
```

```output2
1 1
2 2
3 3
4 4
5 5
6 6
7 7
8 8
9 9
10 10
```