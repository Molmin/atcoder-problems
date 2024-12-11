Score : $700$ points

## Problem Statement

Given are positive integers $N$ and $K$.

Determine if the $3N$ integers $K, K+1, ..., K+3N-1$ can be partitioned into $N$ triples $(a_1,b_1,c_1), ..., (a_N,b_N,c_N)$ so that the condition below is satisfied. Any of the integers $K, K+1, ..., K+3N-1$ must appear in exactly one of those triples.

- For every integer $i$ from $1$ to $N$, $a_i + b_i \leq c_i$ holds.

If the answer is yes, construct one such partition.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq K \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

If it is impossible to partition the integers satisfying the condition, print `-1`. If it is possible, print $N$ triples in the following format:

> $a_1$ $b_1$ $c_1$
> 
> $:$
> 
> $a_N$ $b_N$ $c_N$

```input1
1 1
```

```output1
1 2 3
```

```input2
3 3
```

```output2
-1
```