Score : $400$ points

## Problem Statement

There is a row of $L$ chairs. Now, $N$ groups of people will come and take seats in order.
Each group consists of one or two people, and the $i$-th group to come consists of $a_i$ people.
The total number of people equals $L$.

Each group will randomly choose unoccupied chairs where all group members can sit consecutively, and occupy those chairs.
However, if there are not enough consecutive unoccupied chairs, they will leave without taking seats.

Determine whether it is guaranteed that all $N$ groups can take seats.

## Constraints

- $1\leq N\leq 2\times 10^5$
- $1\leq a_i\leq 2$
- $L=a_1 +a_2 +\ldots +a_N$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $L$
> 
> $a_1$ $a_2$ $\ldots$ $a_N$

## Output

If it is guaranteed that all $N$ groups can take seats, print `Yes`; otherwise, print `No`.

```input1
2 4
2 2
```

```output1
No
```

Let us number the chairs $1$, $2$, $3$, $4$ from left to right.
If the first group of two people takes chairs $2$ and $3$, the next group of two people cannot take seats and will leave.
Thus, it is not guaranteed that all $N$ groups can take seats, so you should print `No`.

```input2
3 4
1 2 1
```

```output2
Yes
```

No matter what chairs they choose, everyone can always take a seat.