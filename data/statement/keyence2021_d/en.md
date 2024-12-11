Score : $700$ points

## Problem Statement

Let $N$ be a positive integer.
Consider a competition where two teams, each with $2^{N-1}$ players, play against each other.

We have $2^N$ players numbered $1$ through $2^N$.
Coach Snuke can do the following operation any number of times: separate the players into two teams A and B, each with $2^{N-1}$ players, and make them play against each other.

He wants to do this operation one or more times so that both of the following conditions are satisfied:

1. there exists an integer $n$ such that, for every $(i, j)$ such that $1 \leq i &lt; j \leq 2^N$, Player $i$ and Player $j$ have belonged to the **same** team exactly $n$ times.
2. there exists an integer $m$ such that, for every $(i, j)$ such that $1 \leq i &lt; j \leq 2^N$, Player $i$ and Player $j$ have belonged to **different** teams exactly $m$ times.

We can prove that there exist sequences of operations that achieve Snuke's objective. Among those sequences, present one sequence with the **minimum possible number of operations**.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 8$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print a sequence of operations in the format below:

> $K$
> 
> $s_1$
> 
> $s_2$
> 
> $\vdots$
> 
> $s_K$

Here, $K$ represents the length of the sequence, and $s_i$ represents the division into teams in the $i$-th operation.
$s_i$ should be a string of length $2^N$ consisting of `A` and `B`. In the $i$-th operation, if Player $j$ belongs to Team A, the ${j}$-th character of $s_{i}$ should be `A`; if Player $j$ belongs to Team B, the ${j}$-th character of $s_{i}$ should be `B`. Note that `A` and `B` each must occur exactly $2^{N-1}$ times in each $s_i$.

Your output will be accepted when $K$ is the minimum possible length of a sequence of operations that achieves the objective, and the sequence actually achieves the objective.

```input1
1
```

```output1
1
AB
```

- We can satisfy the objective with one operation.
- Note that we must do at least one operation.