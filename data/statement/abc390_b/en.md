Score : $200$ points

## Problem Statement

You are given a length-$N$ sequence $A=(A_1,A_2,\ldots,A_N)$ of positive integers.

Determine whether $A$ is a geometric progression.

## Constraints

- $2 \leq N \leq 100$
- $1 \leq A_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

If $A$ is a geometric progression, print `Yes`; otherwise, print `No`.

```input1
5
3 6 12 24 48
```

```output1
Yes
```

$A=(3,6,12,24,48)$.<br>
$A$ is a geometric progression with first term $3$, common ratio $2$, and five terms.<br>
Therefore, print `Yes`.

```input2
3
1 2 3
```

```output2
No
```

$A=(1,2,3)$.<br>
Since $A_1 : A_2 = 1 : 2 \neq 2 : 3 = A_2 : A_3$, $A$ is not a geometric progression.<br>
Therefore, print `No`.

```input3
2
10 8
```

```output3
Yes
```

$A$ is a geometric progression with first term $10$, common ratio $0.8$, and two terms.<br>
Therefore, print `Yes`.