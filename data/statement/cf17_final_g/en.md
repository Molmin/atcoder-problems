Score : $1000$ points

## Problem Statement

Consider the following game:

- The game is played using a row of $N$ squares and many stones.
- First, $a_i$ stones are put in Square $i\ (1 \leq i \leq N)$.
- A player can perform the following operation as many time as desired: "Select an integer $i$ such that Square $i$ contains exactly $i$ stones. Remove all the stones from Square $i$, and add one stone to each of the $i-1$ squares from Square $1$ to Square $i-1$."
- The final score of the player is the total number of the stones remaining in the squares.

For a sequence $a$ of length $N$, let $f(a)$ be the minimum score that can be obtained when the game is played on $a$.

Find the sum of $f(a)$ over all sequences $a$ of length $N$ where each element is between $0$ and $K$ (inclusive).
Since it can be extremely large, find the answer modulo $1000000007 (= 10^9+7)$.

## Constraints

- $1 \leq N \leq 100$
- $1 \leq K \leq N$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the sum of $f(a)$ modulo $1000000007 (= 10^9+7)$.

```input1
2 2
```

```output1
10
```

There are nine sequences of length $2$ where each element is between $0$ and $2$. For each of them, the value of $f(a)$ and how to achieve it is as follows:

- $f(\{0,0\})$: $0$ (Nothing can be done)
- $f(\{0,1\})$: $1$ (Nothing can be done)
- $f(\{0,2\})$: $0$ (Select Square $2$, then Square $1$)
- $f(\{1,0\})$: $0$ (Select Square $1$)
- $f(\{1,1\})$: $1$ (Select Square $1$)
- $f(\{1,2\})$: $0$ (Select Square $1$, Square $2$, then Square $1$)
- $f(\{2,0\})$: $2$ (Nothing can be done)
- $f(\{2,1\})$: $3$ (Nothing can be done)
- $f(\{2,2\})$: $3$ (Select Square $2$)

```input2
20 17
```

```output2
983853488
```