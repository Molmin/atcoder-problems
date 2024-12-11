Score : $900$ points

## Problem Statement

There are $N$ squares: square $1$, square $2$, $\ldots$, square $N$. Each square is colored red or blue.
The colors of the squares are represented by a string $S$ of length $N$. Specifically, for each $i = 1, 2, \ldots, N$, square $i$ is colored red if the $i$-th character of $S$ is `R`, and blue if it is `B`.
Square $N$ is always colored blue.

Initially, each square has a chip of the same color as the square.

For each $i = 1, 2, \ldots, N-1$ in this order, let us perform the following operation.

- Choose an integer $j$ such that $i \lt j \leq N$ and square $j$ is colored **blue**, and place the pile of chips on square $i$ on top of the pile of chips on square $j$, keeping the order of the chips.

Print the number of possible sequences of colors of chips of the $N$-chip pile on square $N$ from top to bottom after the above process, modulo $998244353$.

## Constraints

- $2 \leq N \leq 300$
- $N$ is an integer.
- $S$ is a string of length $N$ consisting of `R` and `B`.
- The $N$-th character of $S$ is `B`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the answer.

```input1
4
RBRB
```

```output1
2
```

We use a string consisting of `R` and `B`, corresponding to red and blue, to represent the sequence of colors of the chips of a pile from top to bottom.
Particularly, the sequence of colors of the chips of a $0$-chip pile is an empty string $\varepsilon$.

Also, the state where the sequences of colors of chips of the piles on square $1, 2, 3, 4$ are $S_1, S_2, S_3, S_4$, respectively, is called as state $(S_1, S_2, S_3, S_4)$.

The following process yields `RRBB` as the sequence of colors of chips of the pile on square $4$.

- First, on each square, place a chip of the same color as the square, resulting in state $($ `R` $,$ `B` $,$ `R` $,$ `B` $)$.
- Place the pile of chips on square $1$ on top of the pile of chips on square $2$, resulting in state $(\varepsilon,$ `RB` $,$ `R` $,$ `B` $)$.
- Place the pile of chips on square $2$ on top of the pile of chips on square $4$, resulting in state $(\varepsilon, \varepsilon,$ `R` $,$ `RBB` $)$.
- Place the pile of chips on square $3$ on top of the pile of chips on square $4$, resulting in state $(\varepsilon, \varepsilon, \varepsilon,$ `RRBB` $)$.

The following process yields `RBRB` as the sequence of colors of chips of the pile on square $4$.

- First, on each square, place a chip of the same color as the square, resulting in state $($ `R` $,$ `B` $,$ `R` $,$ `B` $)$.
- Place the pile of chips on square $1$ on top of the pile of chips on square $4$, resulting in state $(\varepsilon,$ `B` $,$ `R` $,$ `RB` $)$.
- Place the pile of chips on square $2$ on top of the pile of chips on square $4$, resulting in state $(\varepsilon, \varepsilon,$ `R` $,$ `BRB` $)$.
- Place the pile of chips on square $3$ on top of the pile of chips on square $4$, resulting in state $(\varepsilon, \varepsilon, \varepsilon,$ `RBRB` $)$.

The above two, `RRBB` and `RBRB`, are the only possible sequences of colors of chips of the pile on square $4$ from top to bottom after the process in the problem.

```input2
20
RRBRRRBBRBBBBRBRBRBB
```

```output2
92378
```