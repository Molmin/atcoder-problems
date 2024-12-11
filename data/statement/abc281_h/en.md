Score : $600$ points

## Problem Statement

Takahashi has $A$ kinds of level-$1$ gems, and $10^{10^{100}}$ gems of each of those kinds.<br>
For an integer $n$ greater than or equal to $2$, he can put $n$ gems that satisfy all of the following conditions into a cauldron to generate a level-$n$ gem in return.

- No two gems are of the same kind.
- Every gem's level is less than $n$.
- For every integer $x$ greater than or equal to $2$, there is at most one level-$x$ gem.

Find the number of kinds of level-$N$ gems that Takahashi can obtain, modulo $998244353$.

Here, two level-$2$ or higher gems are considered to be of the same kind if and only if they are generated from the same set of gems.

- Two sets of gems are distinguished if and only if there is a gem in one of those sets such that the other set does not contain a gem of the same kind.

Any level-$1$ gem and any level-$2$ or higher gem are of different kinds.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq A \leq 10^9$
- $N$ and $A$ are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $A$

## Output

Print the answer.

```input1
3 3
```

```output1
10
```

Here are ten ways to obtain a level-$3$ gem.

- Put three kinds of level-$1$ gems into the cauldron.-   - Takahashi has three kinds of level-$1$ gems, so there is one way to choose three kinds of level-$1$ gems. Thus, he can obtain one kind of level-$3$ gem in this way.
- Put one kind of level-$2$ gem and two kinds of level-$1$ gems into the cauldron.-   - A level-$2$ gem can be obtained by putting two kinds of level-$1$ gems into the cauldron.-   -   - Takahashi has three kinds of level-$1$ gems, so there are three ways to choose two kinds of level-$1$ gems. Thus, three kinds of level-$2$ gems are available here.
-   - There are three kinds of level-$2$ gems, and three ways to choose two kinds of level-$1$ gems, so he can obtain $3 \times 3 = 9$ kinds of level-$3$ gems in this way.

```input2
1 100
```

```output2
100
```

```input3
200000 1000000000
```

```output3
797585162
```