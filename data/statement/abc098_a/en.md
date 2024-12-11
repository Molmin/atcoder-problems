Score : $100$ points

## Problem Statement

You are given two integers $A$ and $B$.
Find the largest value among $A+B$, $A-B$ and $A \times B$.

## Constraints

- $-1000 \leq A,B \leq 1000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the largest value among $A+B$, $A-B$ and $A \times B$.

```input1
3 1
```

```output1
4
```

$3+1=4$, $3-1=2$ and $3 \times 1=3$. The largest among them is $4$.

```input2
4 -2
```

```output2
6
```

The largest is $4 - (-2) = 6$.

```input3
0 0
```

```output3
0
```