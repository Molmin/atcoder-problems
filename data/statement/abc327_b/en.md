Score : $200$ points

## Problem Statement

You are given an integer $B$.<br>
If there exists a positive integer $A$ such that $A^A = B$, print its value; otherwise, output `-1`.  

## Constraints

- $1 \leq B \leq 10^{18}$
- $B$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $B$

## Output

If there exists a positive integer $A$ such that $A^A = B$, print its value; otherwise, print `-1`.<br>
If there are multiple positive integers $A$ such that $A^A = B$, any of them will be accepted.

```input1
27
```

```output1
3
```

$3^3 = 27$, so print $3$.

```input2
100
```

```output2
-1
```

There is no $A$ such that $A^A = B$.

```input3
10000000000
```

```output3
10
```