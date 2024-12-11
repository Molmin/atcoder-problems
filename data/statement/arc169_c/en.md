Score : $600$ points

## Problem Statement

You are given an integer $N$.
An integer sequence $x=(x_1,x_2,\cdots,x_N)$ of length $N$ is called a **good** sequence if and only if the following conditions are satisfied:

- Each element of $x$ is an integer between $1$ and $N$, inclusive.
- For each integer $i$ ($1 \leq i \leq N$), there is no position in $x$ where $i$ appears $i+1$ or more times in a row.

You are given an integer sequence $A=(A_1,A_2,\cdots,A_N)$ of length $N$.
Each element of $A$ is $-1$ or an integer between $1$ and $N$.
Find the number, modulo $998244353$, of good sequences that can be obtained by replacing each $-1$ in $A$ with an integer between $1$ and $N$.

## Constraints

- $1 \leq N \leq 5000$
- $A_i=-1$ or $1 \leq A_i \leq N$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer.

```input1
2
-1 -1
```

```output1
3
```

You can obtain four sequences by replacing each $-1$ with an integer between $1$ and $2$.

$A=(1,1)$ is not a good sequence because $1$ appears twice in a row.

The other sequences $A=(1,2),(2,1),(2,2)$ are good.

Thus, the answer is $3$.

```input2
3
2 -1 2
```

```output2
2
```

```input3
4
-1 1 1 -1
```

```output3
0
```

```input4
20
9 -1 -1 -1 -1 -1 -1 -1 -1 -1 7 -1 -1 -1 19 4 -1 -1 -1 -1
```

```output4
128282166
```