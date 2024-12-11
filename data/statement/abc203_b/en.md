Score : $200$ points

## Problem Statement

A condominium *AtCoder* has $N$ floors, called the $1$-st floor through the $N$-th floor.
Each floor has $K$ rooms, called the $1$-st room through the $K$-th room.

Here, both $N$ and $K$ are one-digit integers, and the $j$-th room on the $i$-th floor has the room number `i0j`.
For example, the $2$-nd room on the $1$-st floor has the room number $102$.

Takahashi, the manager, got interested in the sum of the room numbers of all rooms in the condominium, where each room number is seen as a three-digit integer.
Find this sum.

## Constraints

- $1 \leq N,K \leq 9$
- $N$ and $K$ are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the answer.

```input1
1 2
```

```output1
203
```

The condominium has two rooms $101$ and $102$.
We have $101+102=203$.

```input2
3 3
```

```output2
1818
```