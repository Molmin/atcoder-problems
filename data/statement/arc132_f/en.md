Score : $900$ points

## Problem Statement

Takahashi, Aoki, and Snuke will play a game with $k$ rounds of rock-paper-scissors.

Let us call a string of length $k$ consisting of `P`, `R`, `S` a **strategy**. The game proceeds as follows.

- Each participant chooses a strategy.
- Play $k$ rounds of rock-paper-scissors. In the $i$-th round, each participant plays the hand corresponding to the $i$-th character in the chosen strategy: paper for `P`, rock for `R`, and scissors for `S`.

Aoki will randomly choose one strategy from the $n$ strategies $a_1,\dots,a_n$ with equal probability.
Snuke will randomly choose one strategy from the $m$ strategies $b_1,\dots,b_m$ with equal probability.
Their choices are independent of each other.

Takahashi will be happy if he is the **only** winner in at least one of the $k$ rounds.
For each of the $3^k$ possible strategies, find the probability that he becomes happy when choosing that strategy and print it multiplied by $nm$ as an integer (it can be proved that this value is an integer).

## Notes

In the game of rock-paper-scissors with three players, the following three scenarios make Takahashi the only winner.

- Takahashi plays paper, while Aoki and Snuke play rock.
- Takahashi plays rock, while Aoki and Snuke play scissors.
- Takahashi plays scissors, while Aoki and Snuke play paper.

## Constraints

- $1 \leq k \leq 12$
- $1 \leq n,m \leq 3^k$
- Each of $a_i$ and $b_i$ is a string of length $k$ consisting of `P`, `R`, `S`.
- $a_1,\dots,a_n$ are distinct.
- $b_1,\dots,b_m$ are distinct.

## Input

Input is given from Standard Input in the following format:

> $k$ $n$ $m$
> 
> $a_1$
> 
> $\vdots$
> 
> $a_n$
> 
> $b_1$
> 
> $\vdots$
> 
> $b_m$

## Output

Print $3^k$ values. The $i$-th value should be the answer when Takahashi chooses the $i$-th lexicographically smallest possible strategy.

```input1
2 1 3
RS
RP
RR
RS
```

```output1
3
3
3
0
1
0
0
1
0
```

Aoki chooses the strategy `RS`.

If Snuke chooses the strategy `RP`, the strategies that can meet Takahashi's objective are `PP`, `PR`, `PS`.

If Snuke chooses the strategy `RR`, the strategies that can meet Takahashi's objective are `PP`, `PR`, `PS`.

If Snuke chooses the strategy `RS`, the strategies that can meet Takahashi's objective are `PP`, `PR`, `PS`, `RR`, `SR`.

Therefore, the probabilities when Takahashi chooses `PP`, `PR`, `PS`, `RP`, `RR`, `RS`, `SP`, `SR`, `SS` are $1$, $1$, $1$, $0$, $\frac 13$, $0$, $0$, $\frac 13$, $0$, respectively.
Print them multiplied by $3$.

```input2
3 5 4
RRP
SSS
RSR
PPP
RSS
PPS
SRP
SSP
RRS
```

```output2
4
7
7
6
9
10
4
7
8
4
8
7
4
8
8
3
7
7
3
7
6
4
8
8
1
5
5
```