Score : $600$ points

## Problem Statement

A string of length $2N$, $S=S_1S_2\dots S_{2N}$, is said to be a *parenthesis sequence* when $S$ is composed of $N$ `(`s and $N$ `)`s.

Additionally, a parenthesis sequence $S$ is said to be *correct* when it is one of the following.

- An empty string.
- The concatenation of `(`, $A$, `)` in this order, where $A$ is a correct parenthesis sequence.
- The concatenation of $A$, $B$ in this order, where $A$ and $B$ are non-empty correct parenthesis sequences.

You are given two permutations $P=(P_1,\ P_2,\ \dots,\ P_{2N})$ and $Q=(Q_1,\ Q_2,\ \dots,\ Q_{2N})$ of the integers from $1$ to $2N$.

Determine whether there exists a parenthesis sequence $S=S_1S_2\dots S_{2N}$ that satisfies the following conditions.

- $P$ is the lexicographically smallest permutation $p$ of the integers from $1$ to $2N$ such that $S_{p_1}S_{p_2}\dots S_{p_{2N}}$ is a correct parenthesis sequence.
- $Q$ is the lexicographically largest permutation $p$ of the integers from $1$ to $2N$ such that $S_{p_1}S_{p_2}\dots S_{p_{2N}}$ is a correct parenthesis sequence.

If such a parenthesis sequence exists, find one.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq P_i,Q_i \leq 2N$
- Each of $P$ and $Q$ is a permutation of $1$ to $2N$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $P_2$ $\dots$ $P_{2N}$
> 
> $Q_1$ $Q_2$ $\dots$ $Q_{2N}$

## Output

If there exists a parenthesis sequence $S$ that satisfies the conditions above, print one such sequence. If there are multiple such sequences, you may print any of them.

If there is no such sequence, print `-1`.

```input1
2
1 2 4 3
4 3 1 2
```

```output1
())(
```

For $S=$ `())(`, some of the permutations $p$ such that $S_{p_1}S_{p_2}S_{p_3}S_{p_4}$ is a correct parenthesis sequence are $p=(1,\ 4,\ 2,\ 3),\ (1,\ 4,\ 3,\ 2)$. The lexicographically smallest and largest among them are $p=(1,\ 2,\ 4,\ 3)$ and $p=(4,\ 3,\ 1,\ 2)$, satisfying the conditions.

```input2
2
1 3 2 4
4 3 2 1
```

```output2
-1
```

No $S$ satisfies the conditions.

```input3
3
2 1 5 3 4 6
6 5 3 4 2 1
```

```output3
-1
```