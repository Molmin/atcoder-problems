Score : $100$ points

## Problem Statement

You are given three integers, $A$, $B$ and $C$.<br>
Among them, two are the same, but the remaining one is different from the rest.<br>
For example, when $A=5,B=7,C=5$, $A$ and $C$ are the same, but $B$ is different.<br>
Find the one that is different from the rest among the given three integers.  

## Constraints

- $-100 \leq A,B,C \leq 100$
- $A$, $B$ and $C$ are integers.
- The input satisfies the condition in the statement.

## Input

Input is given from Standard Input in the following format:  

> $A$ $B$ $C$

## Output

Among $A$, $B$ and $C$, print the integer that is different from the rest.

```input1
5 7 5
```

```output1
7
```

This is the same case as the one in the statement.

```input2
1 1 7
```

```output2
7
```

In this case, $C$ is the one we seek.

```input3
-100 100 100
```

```output3
-100
```