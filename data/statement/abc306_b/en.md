Score : $200$ points

## Problem Statement

You are given a sequence $A=(A_0,A_1,\dots,A_{63})$ of length $64$ consisting of $0$ and $1$.

Find $A_0 2^0 + A_1 2^1 + \dots + A_{63} 2^{63}$.

## Constraints

- $A_i$ is $0$ or $1$.

## Input

The input is given from Standard Input in the following format:

> $A_0$ $A_1$ $\dots$ $A_{63}$

## Output

Print the answer as an integer.

```input1
1 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
```

```output1
13
```

$A_0 2^0 + A_1 2^1 + \dots + A_{63} 2^{63} = 2^0 + 2^2 + 2^3 = 13$.

```input2
1 0 1 0 1 0 0 0 0 1 0 0 1 1 0 1 1 1 1 0 0 0 1 0 0 1 1 1 1 1 1 0 0 0 0 1 0 1 0 1 0 1 1 1 1 0 0 1 1 0 0 0 0 1 0 1 0 1 0 1 0 0 0 0
```

```output2
766067858140017173
```