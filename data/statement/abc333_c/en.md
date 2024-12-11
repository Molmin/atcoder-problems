Score : $300$ points

## Problem Statement

A repunit is an integer whose digits are all $1$ in decimal representation. The repunits in ascending order are $1, 11, 111, \ldots$.

Find the $N$-th smallest integer that can be expressed as the sum of exactly three repunits.

## Constraints

- $N$ is an integer between $1$ and $333$, inclusive.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
5
```

```output1
113
```

The integers that can be expressed as the sum of exactly three repunits are $3, 13, 23, 33, 113, \ldots$ in ascending order. For example, $113$ can be expressed as $113 = 1 + 1 + 111$.

Note that the three repunits do not have to be distinct.

```input2
19
```

```output2
2333
```

```input3
333
```

```output3
112222222233
```