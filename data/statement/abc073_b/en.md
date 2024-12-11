Score : $200$ points

## Problem Statement

Joisino is working as a receptionist at a theater.

The theater has $100000$ seats, numbered from $1$ to $100000$.

According to her memo, $N$ groups of audiences have come so far, and the $i$-th group occupies the consecutive seats from Seat $l_i$ to Seat $r_i$ (inclusive).

How many people are sitting at the theater now?

## Constraints

- $1 \leq N \leq 1000$
- $1 \leq l_i \leq r_i \leq 100000$
- No seat is occupied by more than one person.
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $l_1$ $r_1$
> 
> $:$
> 
> $l_N$ $r_N$

## Output

Print the number of people sitting at the theater.

```input1
1
24 30
```

```output1
7
```

There are $7$ people, sitting at Seat $24,25,26,27,28,29$ and $30$.

```input2
2
6 8
3 3
```

```output2
4
```