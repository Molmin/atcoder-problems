Score : $600$ points

## Problem Statement

You are given positive integers $N$ and $M$. For each $k=1,\ldots,N$, solve the following problem.

- Problem: We will divide $N$ people with ID numbers $1$ through $N$ into $k$ non-empty groups.
Here, people whose ID numbers are equal modulo $M$ cannot belong to the same group.<br>
How many such ways are there to divide people into groups?<br>
Since the answer may be enormous, find it modulo $998244353$.

Here, two ways to divide people into groups are considered different when there is a pair $(x, y)$ such that Person $x$ and Person $y$ belong to the same group in one way but not in the other.

## Constraints

- $2 \leq N \leq 5000$
- $2 \leq M \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print $N$ lines.

The $i$-th line should contain the answer for the problem with $k=i$.

```input1
4 2
```

```output1
0
2
4
1
```

People whose ID numbers are equal modulo $2$ cannot belong to the same group. That is, Person $1$ and Person $3$ cannot belong to the same group, and neither can Person $2$ and Person $4$.

- There is no way to divide the four into one group.
- There are two ways to divide the four into two groups: $\{\{1,2\},\{3,4\}\}$ and $\{\{1,4\},\{2,3\}\}$.
- There are four ways to divide the four into three groups: $\{\{1,2\},\{3\},\{4\}\}$, $\{\{1,4\},\{2\},\{3\}\}$, $\{\{1\},\{2,3\},\{4\}\}$, and $\{\{1\},\{2\},\{3,4\}\}$.
- There is one way to divide the four into four groups: $\{\{1\},\{2\},\{3\},\{4\}\}$.

```input2
6 6
```

```output2
1
31
90
65
15
1
```

You can divide them as you like.

```input3
20 5
```

```output3
0
0
0
331776
207028224
204931064
814022582
544352515
755619435
401403040
323173195
538468102
309259764
722947327
162115584
10228144
423360
10960
160
1
```

Be sure to find the answer modulo $998244353$.