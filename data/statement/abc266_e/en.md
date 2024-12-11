Score : $500$ points

## Problem Statement

Let us play a game using a die. The game consists of at most $N$ turns, each of which goes as follows.

- Throw a $6$-sided die that shows $1,\ldots,6$ with equal probability, and let $X$ be the number shown (each throw is independent of the others).
- If it is the $N$-th turn now, your **score** is $X$, and the game ends.
- Otherwise, choose whether to continue or end the game.-   - If you end the game, your score is $X$, and there is no more turn.

Find the expected value of your score when you play the game to maximize this expected value.

## Constraints

- $1 \leq N \leq 100$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.<br>
Your output is considered correct if its absolute or relative error from the true answer is at most $10^{-6}$.

```input1
1
```

```output1
3.5000000000
```

```input2
2
```

```output2
4.2500000000
```

```input3
10
```

```output3
5.6502176688
```