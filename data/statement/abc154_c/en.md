Score : $300$ points

## Problem Statement

Given is a sequence of integers $A_1, A_2, ..., A_N$.
If its elements are pairwise distinct, print `YES`; otherwise, print `NO`.

## Constraints

- $2 \leq N \leq 200000$
- $1 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $...$ $A_N$

## Output

If the elements of the sequence are pairwise distinct, print `YES`; otherwise, print `NO`.

```input1
5
2 6 1 4 5
```

```output1
YES
```

The elements are pairwise distinct.

```input2
6
4 1 3 1 6 2
```

```output2
NO
```

The second and fourth elements are identical.

```input3
2
10000000 10000000
```

```output3
NO
```