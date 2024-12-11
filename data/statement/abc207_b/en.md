Score : $200$ points

## Problem Statement

There is a container with $A$ cyan balls. Takahashi will do the following operation as many times as he likes (possibly zero times):

- add $B$ cyan balls and $C$ red balls into the container.

Takahashi's objective is to reach a situation where the number of cyan balls in the container is at most $D$ times the number of red balls in it.

Determine whether the objective is achievable. If it is achievable, find the minimum number of operations needed to achieve it.

## Constraints

- $1 \leq A,B,C,D \leq 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$ $D$

## Output

If Takahashi's objective is achievable, print the minimum number of operations needed to achieve it. Otherwise, print `-1`.

```input1
5 2 3 2
```

```output1
2
```

Before the first operation, the container has $5$ cyan balls and $0$ red balls. Since $5$ is greater than $0$ multiplied by $D=2$, Takahashi's objective is not yet achieved.

Just after the first operation, the container has $7$ cyan balls and $3$ red balls. Since $7$ is greater than $3$ multiplied by $2$, the objective is still not achieved.

Just after the second operation, the container has $9$ cyan balls and $6$ red balls. Since $9$ is not greater than $6$ multiplied by $2$, the objective is achieved.

Thus, the answer is $2$.

```input2
6 9 2 3
```

```output2
-1
```

No matter how many times Takahashi repeats the operation, his objective will never be achieved.