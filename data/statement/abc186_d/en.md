Score : $400$ points

## Problem Statement

Given are $N$ integers $A_1,\ldots,A_N$.

Find the sum of $|A_i-A_j|$ over all pairs $i,j$ such that $1\leq i &lt; j \leq N$.

In other words, find $\displaystyle{\sum_{i=1}^{N-1}\sum_{j=i+1}^{N} |A_i-A_j|}$.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $|A_i|\leq 10^8$
- $A_i$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
3
5 1 2
```

```output1
8
```

We have $|5-1|+|5-2|+|1-2|=8$.

```input2
5
31 41 59 26 53
```

```output2
176
```