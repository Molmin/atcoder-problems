Score : $1300$ points

## Problem Statement

You are playing a game and your goal is to maximize your expected gain.
At the beginning of the game, a pawn is put, uniformly at random, at a position $p\in\{1,2,\dots, N\}$. The $N$ positions are arranged on a circle (so that $1$ is between $N$ and $2$).

The game consists of turns. At each turn you can either end the game, and get $A_p$ dollars (where $p$ is the current position of the pawn), or pay $B_p$ dollar to keep playing.
If you decide to keep playing, the pawn is randomly moved to one of the two adjacent positions $p-1$, $p+1$ (with the identifications $0 = N$ and $N+1=1$).

What is the expected gain of an optimal strategy?

**Note**: The "expected gain of an optimal strategy" shall be defined as the supremum of the expected gain among all strategies such that the game ends in a *finite* number of turns.

## Constraints

- $2 \le N \le 200,000$
- $0 \le A_p \le 10^{12}$ for any $p = 1,\ldots, N$
- $0 \le B_p \le 100$ for any $p = 1, \ldots, N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$
> 
> $B_1$ $B_2$ $\cdots$ $B_N$

## Output

Print a single real number, the expected gain of an optimal strategy. 
Your answer will be considered correct if its relative or absolute error does not exceed $10^{-10}$.

```input1
5
4 2 6 3 5
1 1 1 1 1
```

```output1
4.700000000000
```

```input2
4
100 0 100 0
0 100 0 100
```

```output2
50.000000000000
```

```input3
14
4839 5400 6231 5800 6001 5200 6350 7133 7986 8012 7537 7013 6477 5912
34 54 61 32 52 61 21 43 65 12 45 21 1 4
```

```output3
7047.142857142857
```

```input4
10
470606482521 533212137322 116718867454 746976621474 457112271419 815899162072 641324977314 88281100571 9231169966 455007126951
26 83 30 59 100 88 84 91 54 61
```

```output4
815899161079.400024414062
```