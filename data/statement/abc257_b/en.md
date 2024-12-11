Score : $200$ points

## Problem Statement

There are $N$ squares, indexed Square $1$, Square $2$, …, Square $N$, arranged in a row from left to right.<br>
Also, there are $K$ pieces.  The $i$-th piece from the left is initially placed on Square $A_i$.<br>
Now, we will perform $Q$ operations against them.
The $i$-th operation is as follows:

- If the $L_i$-th piece from the left is on its rightmost square, do nothing.
- Otherwise, move the $L_i$-th piece from the left one square right if there is no piece on the next square on the right; if there is, do nothing.

Print the index of the square on which the $i$-th piece from the left is after the $Q$ operations have ended, for each $i=1,2,\ldots,K$.

## Constraints

- $1\leq K\leq N\leq 200$
- $1\leq A_1&lt;A_2&lt;\cdots&lt;A_K\leq N$
- $1\leq Q\leq 1000$
- $1\leq L_i\leq K$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$ $Q$
> 
> $A_1$ $A_2$ $\ldots$ $A_K$
> 
> $L_1$ $L_2$ $\ldots$ $L_Q$

## Output

Print $K$ integers in one line, with spaces in between.
The $i$-th of them should be the index of the square on which the $i$-th piece from the left is after the $Q$ operations have ended.

```input1
5 3 5
1 3 4
3 3 1 1 2
```

```output1
2 4 5
```

At first, the pieces are on Squares $1$, $3$, and $4$.  The operations are performed against them as follows:

- The $3$-rd piece from the left is on Square $4$.
This is not the rightmost square, and the next square on the right does not contain a piece, so move the $3$-rd piece from the left to Square $5$.
Now, the pieces are on Squares $1$, $3$, and $5$.
- The $3$-rd piece from the left is on Square $5$.
This is the rightmost square, so do nothing.
The pieces are still on Squares $1$, $3$, and $5$.
- The $1$-st piece from the left is on Square $1$.
This is not the rightmost square, and the next square on the right does not contain a piece, so move the $1$-st piece from the left to Square $2$.
Now, the pieces are on Squares $2$, $3$, and $5$.
- The $1$-st piece from the left is on Square $2$.
This is not the rightmost square, but the next square on the right (Square $3$) contains a piece, so do nothing.
The pieces are still on Squares $2$, $3$, and $5$.
- The $2$-nd piece from the left is on Square $3$.
This is not the rightmost square, and the next square on the right does not contain a piece, so move the $2$-nd piece from the left to Square $4$;
Now, the pieces are still on Squares $2$, $4$, and $5$.

Thus, after the $Q$ operations have ended, the pieces are on Squares $2$, $4$, and $5$, so $2$, $4$, and $5$ should be printed in this order, with spaces in between.

```input2
2 2 2
1 2
1 2
```

```output2
1 2
```

```input3
10 6 9
1 3 5 7 8 9
1 2 3 4 5 6 5 6 2
```

```output3
2 5 6 7 9 10
```