Score : $300$ points

## Problem Statement

Given a positive integer $K$, find the number of triples of positive integers $(A, B, C)$ such that $ABC \leq K$.
Two triples that only differ in the order of numbers are also distinguished. 

## Constraints

- $1\leq K\leq 2\times 10^5$
- $K$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $K$

## Output

Print the number of triples of positive integers $(A, B, C)$ such that $ABC \leq K$.

```input1
2
```

```output1
4
```

We have the following triples: $(1,1,1),(1,1,2),(1,2,1),(2,1,1)$.

```input2
10
```

```output2
53
```

```input3
31415
```

```output3
1937281
```