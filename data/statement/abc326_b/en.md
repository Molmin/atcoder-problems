Score : $200$ points

## Problem Statement

A **326-like number** is a three-digit positive integer where the product of the hundreds and tens digits equals the ones digit.

For example, $326,400,144$ are 326-like numbers, while $623,777,429$ are not.

Given an integer $N$, find the smallest 326-like number greater than or equal to $N$. It always exists under the constraints.

## Constraints

- $100 \leq N \leq 919$
- $N$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
320
```

```output1
326
```

$320,321,322,323,324,325$ are not 326-like numbers, while $326$ is a 326-like number.

```input2
144
```

```output2
144
```

$144$ is a 326-like number.

```input3
516
```

```output3
600
```