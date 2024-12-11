Score : $475$ points

## Problem Statement

You are given a sequence of $N$ positive integers $A = (A_1, A_2, \dots ,A_N)$, where each element is at least $2$. Anna and Bruno play a game using these integers. They take turns, with Anna going first, performing the following operation.

- Choose an integer $i \ (1 \leq i \leq N)$ freely. Then, freely choose a positive divisor $x$ of $A_i$ that is not $A_i$ itself, and replace $A_i$ with $x$.

The player who cannot perform the operation loses, and the other player wins. Determine who wins assuming both players play optimally for victory.

## Constraints

- $1 \leq N \leq 10^5$
- $2 \leq A_i \leq 10^5$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print `Anna` if Anna wins the game, and `Bruno` if Bruno wins.

```input1
3
2 3 4
```

```output1
Anna
```

For example, the game might proceed as follows. Note that this example may not necessarily represent optimal play by both players:

- Anna changes $A_3$ to $2$.
- Bruno changes $A_1$ to $1$.
- Anna changes $A_2$ to $1$.
- Bruno changes $A_3$ to $1$.
- Anna cannot operate on her turn, so Bruno wins.

Actually, for this sample, Anna always wins if she plays optimally.

```input2
4
2 3 4 6
```

```output2
Bruno
```