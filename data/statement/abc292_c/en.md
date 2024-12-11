Score : $300$ points

## Problem Statement

You are given a positive integer $N$.<br>
Find the number of quadruples of positive integers $(A,B,C,D)$ such that $AB + CD = N$.

Under the constraints of this problem, it can be proved that the answer is at most $9 \times 10^{18}$.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $N$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
4
```

```output1
8
```

Here are the eight desired quadruples.

- $(A,B,C,D)=(1,1,1,3)$
- $(A,B,C,D)=(1,1,3,1)$
- $(A,B,C,D)=(1,2,1,2)$
- $(A,B,C,D)=(1,2,2,1)$
- $(A,B,C,D)=(1,3,1,1)$
- $(A,B,C,D)=(2,1,1,2)$
- $(A,B,C,D)=(2,1,2,1)$
- $(A,B,C,D)=(3,1,1,1)$

```input2
292
```

```output2
10886
```

```input3
19876
```

```output3
2219958
```