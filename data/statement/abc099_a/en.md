Score : $100$ points

## Problem Statement

Decades have passed since the beginning of AtCoder Beginner Contest.

The contests are labeled as `ABC001`, `ABC002`, $...$ from the first round, but after the $999$-th round `ABC999`, a problem occurred: how the future rounds should be labeled?

In the end, the labels for the rounds from the $1000$-th to the $1998$-th are decided: `ABD001`, `ABD002`, $...$, `ABD999`.

You are given an integer $N$ between $1$ and $1998$ (inclusive). Print the first three characters of the label of the $N$-th round of AtCoder Beginner Contest.

## Constraints

- $1 \leq N \leq 1998$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the first three characters of the label of the $N$-th round of AtCoder Beginner Contest.

```input1
999
```

```output1
ABC
```

The $999$-th round of AtCoder Beginner Contest is labeled as `ABC999`.

```input2
1000
```

```output2
ABD
```

The $1000$-th round of AtCoder Beginner Contest is labeled as `ABD001`.

```input3
1481
```

```output3
ABD
```

The $1481$-th round of AtCoder Beginner Contest is labeled as `ABD482`.