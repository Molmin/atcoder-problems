Score : $300$ points

## Problem Statement

There are $N$ citizens in the Kingdom of Takahashi. Each citizen has a national ID number; the ID of the $i$-th citizen is $a_i$. Here, all $a_i$ are pairwise different.

Takahashi has $K$ pieces of sweets. He has decided to hand out these pieces to the citizens in the following way until he has no more pieces.

- When he has $N$ or more pieces, hand out one piece to every citizen.
- Otherwise, let $K'$ be the number of pieces he has at the moment, and hand out one piece to each of the citizens with the $K'$ smallest IDs.

When all pieces are handed out, how many pieces will the $i$-th citizen have?

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq K \leq 10^{18}$
- $1 \leq a_i \leq 10^9$
- All $a_i$ are pairwise different.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $a_1$ $a_2$ $\ldots$ $a_N$

## Output

Print $N$ lines. The $i$-th line should contain the number of pieces of sweets received by the $i$-th citizen.

```input1
2 7
1 8
```

```output1
4
3
```

Takahashi will hand out the pieces as follows.

- Hand out one piece to everyone, leaving Takhashi with $5$ pieces.
- Hand out one piece to everyone, leaving Takhashi with $3$ pieces.
- Hand out one piece to everyone, leaving Takhashi with $1$ piece.
- Hand out one piece to the $1$-st citizen, leaving Takhashi with no pieces.

In the end, the $1$-st citizen will receive $4$ pieces, and the $2$-nd citizen will receive $3$ pieces.

```input2
1 3
33
```

```output2
3
```

Since there is just one citizen, Takahashi will hand out all pieces to that $1$-st citizen.

```input3
7 1000000000000
99 8 2 4 43 5 3
```

```output3
142857142857
142857142857
142857142858
142857142857
142857142857
142857142857
142857142857
```