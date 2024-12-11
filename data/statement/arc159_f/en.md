Score : $900$ points

## Problem Statement

A sequence $X$ is called **good** when the following holds.

- $X$ can be emptied by repeating the following operation zero or more times.-   - Delete two adjacent elements $x_i$ and $x_{i+1}$ of $X$ such that $x_i \neq x_{i+1}$.

You are given a sequence with $2N$ elements: $A=(a_1,\ldots,a_{2N})$.<br>
Among the $2^{2N-1}$ ways to divide $A$ into one or more contiguous subsequences, how many are such that all those contiguous subsequences are good? Find the count modulo $998244353$.

## Constraints

- $1 \leq N \leq 5 \times 10^5$
- $1 \leq a_i \leq 2N$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $\ldots$ $a_{2N}$

## Output

Print the answer.

```input1
3
1 1 2 3 4 5
```

```output1
2
```

The following two divisions satisfy the condition.

- $(1,1,2,3,4,5)$
- $(1,1,2,3),(4,5)$

```input2
1
1 2
```

```output2
1
```

```input3
1
1 1
```

```output3
0
```

```input4
12
4 2 17 12 18 15 17 4 22 6 9 20 21 16 23 16 13 2 20 15 16 3 7 15
```

```output4
2048
```