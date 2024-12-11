Score : $100$ points

## Problem Statement

You are given three integers $A$, $B$ and $C$.
Determine whether $C$ is not less than $A$ and not greater than $B$.

## Constraints

- $-100 \leq A,B,C \leq 100$
- $A$, $B$ and $C$ are all integers.

## Input

Input is given from Standard Input in the following format:  

> $A$ $B$ $C$

## Output

If the condition is satisfied, print `Yes`; otherwise, print `No`.

```input1
1 3 2
```

```output1
Yes
```

$C=2$ is not less than $A=1$ and not greater than $B=3$, and thus the output should be `Yes`.

```input2
6 5 4
```

```output2
No
```

$C=4$ is less than $A=6$, and thus the output should be `No`.

```input3
2 2 2
```

```output3
Yes
```