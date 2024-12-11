Score : $500$ points

## Problem Statement

Alice and Brown loves games. Today, they will play the following game.

In this game, there are two piles initially consisting of $X$ and $Y$ stones, respectively.
Alice and Bob alternately perform the following operation, starting from Alice:

- Take $2i$ stones from one of the piles. Then, throw away $i$ of them, and put the remaining $i$ in the other pile. Here, the integer $i$ $(1 \leq i)$ can be freely chosen as long as there is a sufficient number of stones in the pile.

The player who becomes unable to perform the operation, loses the game.

Given $X$ and $Y$, determine the winner of the game, assuming that both players play optimally.

## Constraints

- $0 \leq X, Y \leq 10^{18}$

## Input

Input is given from Standard Input in the following format:

> $X$ $Y$

## Output

Print the winner: either `Alice` or `Brown`.

```input1
2 1
```

```output1
Brown
```

Alice can do nothing but taking two stones from the pile containing two stones. As a result, the piles consist of zero and two stones, respectively. Then, Brown will take the two stones, and the piles will consist of one and zero stones, respectively. Alice will be unable to perform the operation anymore, which means Brown's victory.

```input2
5 0
```

```output2
Alice
```

```input3
0 0
```

```output3
Brown
```

```input4
4 8
```

```output4
Alice
```