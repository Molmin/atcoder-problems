Score : $400$ points

## Problem Statement

Given is an integer $S$.
Find how many sequences there are whose terms are all integers greater than or equal to $3$, and whose sum is equal to $S$.
The answer can be very large, so output it modulo $10^9 + 7$.

## Constraints

- $1 \leq S \leq 2000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
7
```

```output1
3
```

$3$ sequences satisfy the condition: $\{3,4\}$, $\{4,3\}$ and $\{7\}$.

```input2
2
```

```output2
0
```

There are no sequences that satisfy the condition.

```input3
1729
```

```output3
294867501
```