Score : $500$ points

## Problem Statement

You are given a permutation $P=(P_1,P_2,\ldots,P_N)$ of $(1,2,\ldots,N)$.

You can repeat the following two kinds of operations in any order to make $P$ sorted in increasing order.

- <p>Operation $A$: Choose an integer $i$ such that $1 \leq i \leq N-1$, and swap $P_i$ and $P_{i+1}$.</p>
- <p>Operation $B$: Choose an integer $i$ such that $1 \leq i \leq N-2$, and swap $P_i$ and $P_{i+2}$.</p>

Find a sequence of operations with the following property:

- <p>The number of Operations $A$ is the minimum possible.</p>
- <p>The total number of operations is not larger than $10^5$.</p>

Under the Constraints of this problem, we can prove that a solution always exists.

## Constraints

- $2 \leq N \leq 400$
- $1 \leq P_i \leq N \,(1 \leq i \leq N)$
- $P_i \neq P_j \,(1 \leq i &lt; j \leq N)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $P_2$ $\ldots$ $P_N$

## Output

Let $S$ be the number of operations in your answer.
Print $S+1$ lines.

The first line should contain $S$.

The $(s+1)$-th ($1 \leq s \leq S$) line should contain the following:

- <p>`A i` if the $s$-th operation is Operation $A$, and the integer chosen in this operation is $i$.</p>
- <p>`B i` if the $s$-th operation is Operation $B$, and the integer chosen in this operation is $i$.</p>

If there are multiple solutions satisfying the condition, printing any of them will be accepted.

```input1
4
3 2 4 1
```

```output1
4
A 3
B 1
B 2
B 2
```

In this Sample Output, $P$ changes like this: $(3,2,4,1) \rightarrow (3,2,1,4) \rightarrow (1,2,3,4) \rightarrow (1,4,3,2) \rightarrow (1,2,3,4)$.

Note that you don't have to minimize the total number of operations.

```input2
3
1 2 3
```

```output2
0
```

```input3
6
2 1 4 3 6 5
```

```output3
3
A 1
A 3
A 5
```