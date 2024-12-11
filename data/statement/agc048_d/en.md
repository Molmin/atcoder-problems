Score : $900$ points

## Problem Statement

There are $N$ piles of stones lying in a row.
The $i$-th pile from the left contains $A_i$ stones.

Two players, FirstLeft and SecondRight, play a game.
They alternately play a turn, with FirstLeft going first.
In each turn, the player does the following operation:

- In FirstLeft's turn: he removes one or more stones from the **leftmost** pile with one or more stones.
- In SecondRight's turn: he removes one or more stones from the **rightmost** pile with one or more stones.

The player who becomes unable to play his turn loses.
Determine the winner of the game when the players act optimally.

Solve $T$ test cases in an input file.

## Constraints

- $1 \leq T \leq 100$
- $1 \leq N \leq 100$
- $1 \leq A_i \leq 10^9$

## Input

Input is given from Standard Input in the following format.
The first line of input is as follows:

> $T$

Then, $T$ test cases follow, each of which is in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

For each test case, print `First` if FirstLeft wins, and print `Second` if SecondRight wins.
Use one line for each case.

```input1
3
1
10
2
3 2
3
2 1 2
```

```output1
First
First
Second
```

For example, in the third game, one possible scenario is as follows:

- FirstLeft takes $2$ stones from the leftmost pile. The piles now contain $0,1,2$ stone(s).
- SecondRight takes $1$ stone from the rightmost pile. The piles now contain $0,1,1$ stone(s).
- FirstLeft takes $1$ stone from the middle pile. The piles now contain $0,0,1$ stone(s).
- SecondRight takes $1$ stone from the rightmost pile. The piles now contain $0,0,0$ stones.
- FirstLeft is unable to do his operation and loses.