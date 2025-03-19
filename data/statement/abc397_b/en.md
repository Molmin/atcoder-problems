Score : $250$ points

## Problem Statement

Takahashi aggregated usage records from ticket gates.
However, he accidentally erased some records of entering and exiting stations.
He is trying to restore the erased records.

You are given a string $S$ consisting of `i` and `o`. We want to insert zero or more characters at arbitrary positions in $S$ so that the resulting string satisfies the following conditions:

- Its length is even, and every odd-numbered (1st, 3rd, ...) character is `i` while every even-numbered (2nd, 4th, ...) character is `o`.

Find the minimum number of characters that need to be inserted. It can be proved under the constraints of this problem that by inserting an appropriate finite number of characters, $S$ can be made to satisfy the conditions.

## Constraints

- $S$ is a string of length between $1$ and $100$, consisting of `i` and `o`.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
ioi
```

```output1
1
```

We can insert `o` after the 3rd character to form `ioio` to satisfy the conditions. The conditions cannot be satisfied by inserting zero or fewer characters.

```input2
iioo
```

```output2
2
```

We can insert `o` after the 1st character and `i` after the 3rd character to satisfy the conditions. The conditions cannot be satisfied by inserting one or fewer characters.

```input3
io
```

```output3
0
```

$S$ already satisfies the conditions.