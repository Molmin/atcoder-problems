Score : $300$ points

## Problem Statement

There is an iron bar of length $L$ lying east-west. We will cut this bar at $11$ positions to divide it into $12$ bars. Here, each of the $12$ resulting bars must have a positive integer length.<br>
Find the number of ways to do this division. Two ways to do the division are considered different if and only if there is a position cut in only one of those ways.<br>
Under the constraints of this problem, it can be proved that the answer is less than $2^{63}$.

## Constraints

- $12 \le L \le 200$
- $L$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $L$

## Output

Print the number of ways to do the division.

```input1
12
```

```output1
1
```

There is only one way: to cut the bar into $12$ bars of length $1$ each.  

```input2
13
```

```output2
12
```

Just one of the resulting bars will be of length $2$. We have $12$ options: one where the westmost bar is of length $2$, one where the second bar from the west is of length $2$, and so on.

```input3
17
```

```output3
4368
```