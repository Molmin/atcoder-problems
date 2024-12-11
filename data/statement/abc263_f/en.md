Score : $500$ points

## Problem Statement

$2^N$ people, numbered $1$ to $2^N$, will participate in a rock-paper-scissors tournament.

The tournament proceeds as follows:

- The participants are arranged in a row in the order Person $1$, Person $2$, $\ldots$, Person $2^N$ from left to right.
- Let $2M$ be the current length of the row. For each $i\ (1\leq i \leq M)$, the $(2i-1)$-th and $(2i)$-th persons from the left play a game against each other. Then, the $M$ losers are removed from the row. This process is repeated $N$ times.

Here, if Person $i$ wins exactly $j$ games, they receive $C_{i,j}$ yen (Japanese currency). A person winning zero games receives nothing. Find the maximum possible total amount of money received by the $2^N$ people if the results of all games can be manipulated freely.

## Constraints

- $1 \leq N \leq 16$
- $1 \leq C_{i,j} \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ 
> 
> $C_{1,1}$ $C_{1,2}$ $\ldots$ $C_{1,N}$
> 
> $C_{2,1}$ $C_{2,2}$ $\ldots$ $C_{2,N}$
> 
> $\vdots$
> 
> $C_{2^N,1}$ $C_{2^N,2}$ $\ldots$ $C_{2^N,N}$

## Output

Print the answer.

```input1
2
2 5
6 5
2 1
7 9
```

```output1
15
```

The initial row of the people is $(1,2,3,4)$.

If Person $2$ wins the game against Person $1$, and Person $4$ wins the game against Person $3$, the row becomes $(2,4)$.

Then, if Person $4$ wins the game against Person $2$, the row becomes $(4)$, and the tournament ends.

Here, Person $2$ wins exactly $1$ game, and Person $4$ wins exactly $2$ games, so they receive $0+6+0+9=15$ yen in total, which is the maximum possible sum.

```input2
3
1 1 1
1 1 1
1 1 1
1 1 1
1 1 1
1 1 1
1 1 1
1 1 1
```

```output2
4
```