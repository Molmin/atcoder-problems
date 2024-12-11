Score : $600$ points

## Problem Statement

There are $N$ cards, indexed $1$ to $N$.
Card $i$ has an integer $A_i$ written on it.
Here, $N$ is even.

Snuke and Mr. Min will play a game.
The game consists of $N$ turns, alternately taken by the two players, with Snuke going first.
In each turn, the player does the following operation.

- In Snuke's turn: He takes any card of his choice that is not taken by anyone yet.
- In Mr. Min's turn: He takes the card with the minimum **index** that is not taken by anyone yet.

Snuke's score will be the sum of the integers written on the cards taken by Snuke.
Snuke plays optimally to maximize the score.

Incidentally, being a big fan of Snuke, you are planning to do something nasty to maximize the score.
Specifically, before the start of the game, you will do the following action once.

- Choose an integer $k$ ($0 \leq k \leq N-1$) and cyclically shift the integers written on the cards by $k$ to the left:
the cards $1,2,\cdots,N$ will have $A_{k+1},A_{k+2},\cdots,A_N,A_1,\cdots,A_k$ written on them.

Find the value $k$ that you should choose to maximize the score, and the resulting score when choosing that $k$.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $N$ is even.
- $1 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer in the following format:

> $k$ $s$

Here, $k$ is the integer you choose ($0 \leq k \leq N-1$), and $s$ is the score when choosing that $k$.
If there are multiple values of $k$ that maximize $s$, printing any of them will be accepted.

```input1
4
3 4 1 2
```

```output1
1 7
```

If you choose $k=1$, the cards $1,2,3,4$ will have $4,1,2,3$ written on them.
Then, the game will go as follows.

- Snuke takes Card $1$.
- Mr. Min takes Card $2$.
- Snuke takes Card $4$.
- Mr. Min takes Card $3$.

In this case, Snuke's score is $7$.

In this input, $k=2,3$ will also be accepted.

```input2
2
1 1
```

```output2
0 1
```

```input3
10
716893678 779607519 555600775 393111963 950925400 636571379 912411962 44228139 15366410 2063694
```

```output3
7 3996409938
```