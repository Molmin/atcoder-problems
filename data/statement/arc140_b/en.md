Score : $400$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of `A`,`R`,`C`.

As long as $S$ contains three consecutive characters that are `ARC`, you can perform the operation below.

- In an odd-numbered ($1$-st, $3$-rd, $5$-th, ...) operation, choose in $S$ three consecutive characters that are `ARC`, and replace them with `R`.
- In an even-numbered ($2$-nd, $4$-th, $6$-th, ...) operation, choose in $S$ three consecutive characters that are `ARC`, and replace them with `AC`.

Find the maximum number of operations that can be performed.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $S$ is a string of length $N$ consisting of `A`,`R`,`C`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the answer.

```input1
6
AARCCC
```

```output1
2
```

You can perform two operations as follows.

`AARCCC` → `ARCC` → `ACC`

```input2
5
AAAAA
```

```output2
0
```

$S$ does not contain three consecutive characters that are `ARC`, so you cannot perform the operation at all.

```input3
9
ARCARCARC
```

```output3
3
```