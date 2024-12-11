Score : $600$ points

## Problem Statement

Takahashi has $N$ balls with positive integers written on them. The integer written on the $i$-th ball is $A_i$.
He would like to form some number of pairs such that the sum of the integers written on each pair of balls is a power of $2$.
Note that a ball cannot belong to multiple pairs.
Find the maximum possible number of pairs that can be formed.

Here, a positive integer is said to be a power of $2$ when it can be written as $2^t$ using some non-negative integer $t$.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $1 \leq A_i \leq 10^9$
- $A_i$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Print the maximum possible number of pairs such that the sum of the integers written on each pair of balls is a power of $2$.

```input1
3
1 2 3
```

```output1
1
```

We can form one pair whose sum of the written numbers is $4$ by pairing the first and third balls.
Note that we cannot pair the second ball with itself.

```input2
5
3 11 14 5 13
```

```output2
2
```