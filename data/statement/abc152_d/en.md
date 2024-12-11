Score : $400$ points

## Problem Statement

Given is a positive integer $N$.<br>
Find the number of pairs $(A, B)$ of positive integers not greater than $N$ that satisfy the following condition:

- When $A$ and $B$ are written in base ten without leading zeros, the last digit of $A$ is equal to the first digit of $B$, and the first digit of $A$ is equal to the last digit of $B$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
25
```

```output1
17
```

The following $17$ pairs satisfy the condition: $(1,1)$, $(1,11)$, $(2,2)$, $(2,22)$, $(3,3)$, $(4,4)$, $(5,5)$, $(6,6)$, $(7,7)$, $(8,8)$, $(9,9)$, $(11,1)$, $(11,11)$, $(12,21)$, $(21,12)$, $(22,2)$, and $(22,22)$.

```input2
1
```

```output2
1
```

```input3
100
```

```output3
108
```

```input4
2020
```

```output4
40812
```

```input5
200000
```

```output5
400000008
```