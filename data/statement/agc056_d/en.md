Score : $1600$ points

## Problem Statement

There are $N$ integers written on a blackboard. The $i$-th integer is $A_i$.
Here, $N$ is even.
Additionally, integers $L$ and $R$ are given.

Alice and Bob will play a game.
They alternately take turns, with Alice going first.
In each turn, the player chooses a number written on the blackboard and erases it.

The game will end in $N$ turns.
Then, let $s$ be the sum of the integers erased by Alice.
If $L \leq s \leq R$, Alice wins; otherwise, Bob wins.
Find which player will win when both players play optimally.

## Constraints

- $2 \leq N \leq 5000$
- $N$ is even.
- $1 \leq A_i \leq 10^9$
- $0 \leq L \leq R \leq \sum_{1 \leq i \leq N} A_i$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $L$ $R$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

If Alice wins, print `Alice`; if Bob wins, print `Bob`.

```input1
4 5 6
3 1 4 5
```

```output1
Alice
```

In this game, Alice will always win.
Below is a possible progression of the game.

- Alice erases $1$.
- Bob erases $4$.
- Alice erases $5$.
- Bob erases $3$.

Here, the sum of the integers erased by Alice is $6$. Since $L \leq 6 \leq R$, Alice wins.

```input2
2 2 3
4 1
```

```output2
Bob
```

```input3
30 655 688
42 95 9 13 91 27 99 56 64 15 3 11 5 16 85 3 62 100 64 79 1 70 8 69 70 28 78 4 33 12
```

```output3
Bob
```

```input4
30 792 826
81 60 86 57 5 20 26 13 39 64 89 58 43 98 50 79 58 21 27 68 46 47 45 85 88 5 82 90 74 57
```

```output4
Alice
```