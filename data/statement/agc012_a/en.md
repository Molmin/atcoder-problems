Score : $300$ points

## Problem Statement

There are $3N$ participants in *AtCoder Group Contest*.
The *strength* of the $i$-th participant is represented by an integer $a_i$.
They will form $N$ teams, each consisting of three participants.
No participant may belong to multiple teams.

The strength of a team is defined as the second largest strength among its members.
For example, a team of participants of strength $1$, $5$, $2$ has a strength $2$, and a team of three participants of strength $3$, $2$, $3$ has a strength $3$.

Find the maximum possible sum of the strengths of $N$ teams.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq a_i \leq 10^{9}$
- $a_i$ are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $...$ $a_{3N}$

## Output

Print the answer.

```input1
2
5 2 8 5 1 5
```

```output1
10
```

The following is one formation of teams that maximizes the sum of the strengths of teams:

- Team $1$: consists of the first, fourth and fifth participants.
- Team $2$: consists of the second, third and sixth participants.

```input2
10
1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000
```

```output2
10000000000
```

The sum of the strengths can be quite large.