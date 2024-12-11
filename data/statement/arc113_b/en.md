Score : $400$ points

## Problem Statement

Given positive integers $A, B, C$, find the digit at the ones place in the decimal notation of $A^{B^C}$.

## Constraints

- $1\leq A,B,C \leq 10^9$
- $A,B,C$ are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$

## Output

Print the digit at the one's place in the decimal notation of $A^{B^C}$.

```input1
4 3 2
```

```output1
4
```

The ones digit in the decimal notation of $4^{3^2}=4^9=262144$ is $4$.

```input2
1 2 3
```

```output2
1
```

```input3
3141592 6535897 9323846
```

```output3
2
```