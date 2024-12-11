Score : $300$ points

## Problem Statement

We have two desks: A and B. Desk A has a vertical stack of $N$ books on it, and Desk B similarly has $M$ books on it.

It takes us $A_i$ minutes to read the $i$-th book from the top on Desk A $(1 \leq i \leq N)$, and $B_i$ minutes to read the $i$-th book from the top on Desk B $(1 \leq i \leq M)$.

Consider the following action:

- Choose a desk with a book remaining, read the topmost book on that desk, and remove it from the desk.

How many books can we read at most by repeating this action so that it takes us at most $K$ minutes in total? We ignore the time it takes to do anything other than reading.

## Constraints

- $1 \leq N, M \leq 200000$
- $1 \leq K \leq 10^9$
- $1 \leq A_i, B_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $B_1$ $B_2$ $\ldots$ $B_M$

## Output

Print an integer representing the maximum number of books that can be read.

```input1
3 4 240
60 90 120
80 150 80 150
```

```output1
3
```

In this case, it takes us $60$, $90$, $120$ minutes to read the $1$-st, $2$-nd, $3$-rd books from the top on Desk A, and $80$, $150$, $80$, $150$ minutes to read the $1$-st, $2$-nd, $3$-rd, $4$-th books from the top on Desk B, respectively.

We can read three books in $230$ minutes, as shown below, and this is the maximum number of books we can read within $240$ minutes.

- Read the topmost book on Desk A in $60$ minutes, and remove that book from the desk.
- Read the topmost book on Desk B in $80$ minutes, and remove that book from the desk.
- Read the topmost book on Desk A in $90$ minutes, and remove that book from the desk.

```input2
3 4 730
60 90 120
80 150 80 150
```

```output2
7
```

```input3
5 4 1
1000000000 1000000000 1000000000 1000000000 1000000000
1000000000 1000000000 1000000000 1000000000
```

```output3
0
```

Watch out for integer overflows.