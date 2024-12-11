Score : $100$ points

## Story

You heard a song consisting of $N$ notes in fits and starts. You want to guess whether a phrase consisting of $M$ sounds was included in this song. You also want to consider cases where the phrase is included in a different [key](https://en.wikipedia.org/wiki/Key_(music)) than the original.

## Problem Statement

You are given two sequences of non-negative integers, $A = (A_1, \dots, A_N)$ and $B = (B_1, \dots, B_M)$, each of length $N$ and $M$, respectively.

Find the number of integers $i$ that satisfy $1 \le i \le N - M + 1$ and meet the following condition:

### Condition

Define a contiguous subsequence $C$ of length $M$ of $A$ as $C = (A_i, \dots, A_{i + M - 1})$. Next, update all elements of the sequences $B$ and $C$ that are $0$ with any **positive real number** (the updated values may be different for each element). Then, determine an arbitrary **positive real number** $t$, and multiply all elements of sequence $C$ by $t$. By doing so, the sequences $B$ and $C$ can be made identical.

## Constraints

- $1 \leq M \leq N \leq 5 \times 10^5$
- $0 \leq A_i \leq 5 \times 10^5$ $(i = 1, \ldots, N)$
- $0 \leq B_i \leq 5 \times 10^5$ $(i = 1, \ldots, M)$

## Input

The input is given from Standard Input in the following format:

> $N \ M$
> 
> $A_1 \ A_2 \ \dots \ A_N$
> 
> $B_1 \ B_2 \ \dots \ B_M$

## Output

Print an integer as the answer.

```input1
9 4
9 3 0 0 2 99 4 0 0
6 2 0 4
```

```output1
4
```

For $i = 1$, update $B$ to $(6, 2, 5, 4)$ and $C = (9, 3, 0, 0)$ to $(9, 3, 7.5, 6)$, and take $t = 2/3$. Finally, $B$ and $C$ will match.

For $i = 2, 3, 4$, it is possible to make $B$ and $C$ match by performing appropriate operations, but for $i = 5, 6$, it is impossible.

Therefore, since $i = 1, 2, 3, 4$ meet the condition, output $4$ as the answer.

```input2
8 2
0 0 0 0 0 0 0 0
0 0
```

```output2
7
```