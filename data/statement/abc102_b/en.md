Score : $200$ points

## Problem Statement

You are given an integer sequence $A$ of length $N$.
Find the maximum absolute difference of two elements (with different indices) in $A$.

## Constraints

- $2 \leq N \leq 100$
- $1 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Print the maximum absolute difference of two elements (with different indices) in $A$.

```input1
4
1 4 6 3
```

```output1
5
```

The maximum absolute difference of two elements is $A_3-A_1=6-1=5$.

```input2
2
1000000000 1
```

```output2
999999999
```

```input3
5
1 1 1 1 1
```

```output3
0
```