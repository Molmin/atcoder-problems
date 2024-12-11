Score : $100$ points

## Problem Statement

A mayoral election is being held in AtCoder City. The candidates are Takahashi and Aoki.

There are $N$ valid votes cast for either of the two candidates, and the counting is currently underway. Here, $N$ is an odd number.

The current vote count is $T$ votes for Takahashi and $A$ votes for Aoki.

Determine if the outcome of the election is already decided at this point.

## Constraints

- $1 \leq N \leq 99$
- $N$ is an odd number.
- $0 \leq T, A \leq N$
- $T + A \leq N$
- All input values are integers.

## Input

The input is given from standard input in the following format:

> $N$ $T$ $A$

## Output

Print `Yes` if the outcome of the election is already decided, and `No` otherwise.

```input1
7 4 2
```

```output1
Yes
```

Even if the remaining one vote goes to Aoki, Takahashi will still win. That is, his victory is decided, so print `Yes`.

```input2
99 12 48
```

```output2
No
```

Although Aoki currently has more votes, Takahashi would win if he receives the remaining $39$ votes. Therefore, print `No`.

```input3
1 0 0
```

```output3
No
```