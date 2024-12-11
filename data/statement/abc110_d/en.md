Score : $400$ points

## Problem Statement

You are given positive integers $N$ and $M$.

How many sequences $a$ of length $N$ consisting of positive integers satisfy $a_1 \times a_2 \times ... \times a_N = M$? Find the count modulo $10^9+7$.

Here, two sequences $a'$ and $a''$ are considered different when there exists some $i$ such that $a_i' \neq a_i''$.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 10^5$
- $1 \leq M \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the number of the sequences consisting of positive integers that satisfy the condition, modulo $10^9 + 7$.

```input1
2 6
```

```output1
4
```

Four sequences satisfy the condition: $\{a_1, a_2\} = \{1, 6\}, \{2, 3\}, \{3, 2\}$ and $\{6, 1\}$.

```input2
3 12
```

```output2
18
```

```input3
100000 1000000000
```

```output3
957870001
```