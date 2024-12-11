Score : $600$ points

## Problem Statement

You are given a non-negative integer sequence of length $N$: $A=(A_1,A_2,\cdots,A_N)$.
Here, all elements of $A$ are pairwise distinct.

Alice and Bob will play a game.
They will alternately play a turn, with Alice going first.
In each turn, the player does the operation below.

- Choose the largest element in $A$ at the moment, and replace it with a smaller non-negative integer.
Here, all elements in $A$ must still be pairwise distinct after this operation.

The first player to be unable to do the operation loses.
Determine the winner when both players play optimally.

## Constraints

- $2 \leq N \leq 3 \times 10^5$
- $0 \leq A_1 &lt; A_2 &lt; \cdots &lt; A_N \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

If Alice wins, print `Alice`; if Bob wins, print `Bob`.

```input1
2
2 4
```

```output1
Alice
```

In Alice's first turn, she may replace $4$ with $0$, $1$, or $3$.
If she replaces $4$ with $0$ or $1$, Bob's move in the next turn will make Alice unable to do the operation and lose.
On the other hand, if she replaces $4$ with $3$, she can win regardless of Bob's subsequent moves.
Thus, Alice wins in this input.

```input2
3
0 1 2
```

```output2
Bob
```