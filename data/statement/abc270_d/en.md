Score : $400$ points

## Problem Statement

Takahashi and Aoki will play a game of taking stones using a sequence $(A_1, \ldots, A_K)$.

There is a pile that initially contains $N$ stones. The two players will alternately perform the following operation, with Takahashi going first.

- Choose an $A_i$ that is at most the current number of stones in the pile. Remove $A_i$ stones from the pile.

The game ends when the pile has no stones.

If both players attempt to maximize the total number of stones they remove before the end of the game, how many stones will Takahashi remove?

## Constraints

- $1 \leq N \leq 10^4$
- $1 \leq K \leq 100$
- $1 = A_1 &lt; A_2 &lt; \ldots &lt; A_K \leq N$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\ldots$ $A_K$

## Output

Print the answer.

```input1
10 2
1 4
```

```output1
5
```

Below is one possible progression of the game.

- Takahashi removes $4$ stones from the pile.
- Aoki removes $4$ stones from the pile.
- Takahashi removes $1$ stone from the pile.
- Aoki removes $1$ stone from the pile.

In this case, Takahashi removes $5$ stones. There is no way for him to remove $6$ or more stones, so this is the maximum.

Below is another possible progression of the game where Takahashi removes $5$ stones.

- Takahashi removes $1$ stone from the pile.
- Aoki removes $4$ stones from the pile.
- Takahashi removes $4$ stones from the pile.
- Aoki removes $1$ stone from the pile.

```input2
11 4
1 2 3 6
```

```output2
8
```

Below is one possible progression of the game.

- Takahashi removes $6$ stones.
- Aoki removes $3$ stones.
- Takahashi removes $2$ stones.

In this case, Takahashi removes $8$ stones. There is no way for him to remove $9$ or more stones, so this is the maximum.

```input3
10000 10
1 2 4 8 16 32 64 128 256 512
```

```output3
5136
```