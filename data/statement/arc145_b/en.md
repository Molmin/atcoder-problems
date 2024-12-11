Score : $500$ points

## Problem Statement

The following game is called Game $n$:

The game is played by Alice and Bob. Initially, there are $n$ stones.

The players alternate turns, making a move described below, with Alice going first. The player who becomes unable to make a move loses.

- In Alice's turn, she must remove a number of stones that is a positive multiple of $A$.
- In Bob's turn, he must remove a number of stones that is a positive multiple of $B$.

In how many of Game $1$, Game $2$, ..., Game $N$ does Alice win when both players play optimally?

## Constraints

- $1 \leq N ,A,B \leq 10^{18}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $A$ $B$

## Output

Print the answer.

```input1
4 2 1
```

```output1
2
```

In Game $1$, Alice cannot make a move and thus loses.

In Game $2$, Alice removes $2$ stones, and then Bob cannot make a move: Alice wins.

In Game $3$, Alice removes $2$ stones, Bob removes $1$ stone, and then Alice cannot make a move and loses.

In Game $4$, Alice removes $2 \times 2 = 4$ stones, and then Bob cannot make a move: Alice wins.

Therefore, Alice wins in two of the four games.

```input2
27182818284 59045 23356
```

```output2
10752495144
```