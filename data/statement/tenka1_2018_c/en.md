Score : $400$ points

## Problem Statement

You are given $N$ integers; the $i$-th of them is $A_i$.
Find the maximum possible sum of the absolute differences between the adjacent elements after arranging these integers in a row in any order you like.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$
> 
> $:$
> 
> $A_N$

## Output

Print the maximum possible sum of the absolute differences between the adjacent elements after arranging the given integers in a row in any order you like.

```input1
5
6
8
1
2
3
```

```output1
21
```

When the integers are arranged as $3,8,1,6,2$, the sum of the absolute differences between the adjacent elements is $|3 - 8| + |8 - 1| + |1 - 6| + |6 - 2| = 21$. This is the maximum possible sum.

```input2
6
3
1
4
1
5
9
```

```output2
25
```

```input3
3
5
5
1
```

```output3
8
```