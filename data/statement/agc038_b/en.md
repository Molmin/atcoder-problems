Score : $700$ points

## Problem Statement

Snuke has a permutation $(P_0,P_1,\cdots,P_{N-1})$ of $(0,1,\cdots,N-1)$.

Now, he will perform the following operation **exactly once**:

- Choose $K$ consecutive elements in $P$ and sort them in ascending order.

Find the number of permutations that can be produced as $P$ after the operation.

## Constraints

- $2 \leq N \leq 200000$
- $2 \leq K \leq N$
- $0 \leq P_i \leq N-1$
- $P_0,P_1,\cdots,P_{N-1}$ are all different.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $P_0$ $P_1$ $\cdots$ $P_{N-1}$

## Output

Print the number of permutations that can be produced as $P$ after the operation.

```input1
5 3
0 2 1 4 3
```

```output1
2
```

Two permutations can be produced as $P$ after the operation: $(0,1,2,4,3)$ and $(0,2,1,3,4)$.

```input2
4 4
0 1 2 3
```

```output2
1
```

```input3
10 4
2 0 1 3 7 5 4 6 8 9
```

```output3
6
```