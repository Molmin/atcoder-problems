Score : $600$ points

## Problem Statement

There are $N$ cities in Republic of AtCoder. The size of the $i$-th city is $A_{i}$.
Takahashi would like to build $N-1$ bidirectional roads connecting two cities so that any city can be reached from any other city by using these roads.

Assume that the cost of building a road connecting the $i$-th city and the $j$-th city is $|i-j| \times D + A_{i} + A_{j}$.
For Takahashi, find the minimum possible total cost to achieve the objective.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq D \leq 10^9$
- $1 \leq A_{i} \leq 10^9$
- $A_{i}$ and $D$ are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $D$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Print the minimum possible total cost.

```input1
3 1
1 100 1
```

```output1
106
```

This cost can be achieved by, for example, building roads connecting City $1$, $2$ and City $1$, $3$.

```input2
3 1000
1 100 1
```

```output2
2202
```

```input3
6 14
25 171 7 1 17 162
```

```output3
497
```

```input4
12 5
43 94 27 3 69 99 56 25 8 15 46 8
```

```output4
658
```