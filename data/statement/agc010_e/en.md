Score : $1600$ points

## Problem Statement

There are $N$ integers written on a blackboard. The $i$-th integer is $A_i$.

Takahashi and Aoki will arrange these integers in a row, as follows:

- First, Takahashi will arrange the integers as he wishes.
- Then, Aoki will repeatedly swap two adjacent integers that are coprime, as many times as he wishes.

We will assume that Takahashi acts optimally so that the eventual sequence will be lexicographically as small as possible, and we will also assume that Aoki acts optimally so that the eventual sequence will be lexicographically as large as possible.
Find the eventual sequence that will be produced.

## Constraints

- $1 \leq N \leq 2000$
- $1 \leq A_i \leq 10^8$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ … $A_N$

## Output

Print the eventual sequence that will be produced, in a line.

```input1
5
1 2 3 4 5
```

```output1
5 3 2 4 1
```

If Takahashi arranges the given integers in the order $(1,2,3,4,5)$, they will become $(5,3,2,4,1)$ after Aoki optimally manipulates them.

```input2
4
2 3 4 6
```

```output2
2 4 6 3
```