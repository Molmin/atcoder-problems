Score : $1000$ points

## Problem Statement

There are $N$ cards numbered $1$ to $N$. Card $i$ has an integer $A_i$ written on it.
Here, $N$ is even.

Snuke and Robot will play a game, which will go as follows.

- The game master announces a permutation $(p_1,p_2,\cdots,p_N)$ of $(1,2,\cdots,N)$, to both Snuke and Robot.
- Then, Snuke and Robot alternately take turns, with Snuke going first.
Each turn goes as follows.-   - Snuke's turn: choose a remaining card of his choice and eat it.
-   - Robot's turn: choose Card $i$ with the largest $p_i$ and burn it.
- The game ends when there is no more card.

The final score of the game is the sum of integers written on the cards eaten by Snuke.
Snuke will play optimally to maximize the score.

There are $N!$ permutations $p$ of $(1,2,\cdots,N)$. Find the sum, modulo $998244353$, of the final scores for all of these permutations.

## Constraints

- $1 \leq N \leq 10^6$
- $N$ is even.
- $1 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer.

```input1
2
1 2
```

```output1
4
```

Regardless of the permutation $p$, Snuke will eat Card $2$.

```input2
4
1 100 10000 1000000
```

```output2
24200400
```

For example, when $p=(3,1,4,2)$, the game will go as follows.

- Snuke eats Card $3$.
- Robot burns Card $1$.
- Snuke eats Card $4$.
- Robot burns Card $2$.

The score of the game here is $1010000$.

```input3
10
866111664 178537096 844917655 218662351 383133839 231371336 353498483 865935868 472381277 579910117
```

```output3
710984634
```