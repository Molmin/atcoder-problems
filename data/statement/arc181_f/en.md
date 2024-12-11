Score : $1100$ points

## Problem Statement

You are given an integer sequence $A=(A_1,A_2,\dots,A_N)$ of length $N$. On this sequence, the following operation can be performed:

- Choose $l$ and $r$ $(1\leq l &lt; r \leq N)$ such that $A_l=A_r$, $A_{l+1}=A_{l+2}=\dots=A_{r-1}$, and $A_{l+1}\neq A_l$. Replace each of $A_{l+1},A_{l+2},\dots,A_{r-1}$ with $A_l$. The cost of this operation is $r-l-1$.

You will repeat this operation until there is no $l$ and $r$ $(1\leq l &lt; r \leq N)$ such that $A_l=A_r$, $A_{l+1}=A_{l+2}=\dots=A_{r-1}$, and $A_{l+1}\neq A_l$. Find the minimum total cost of such a series of operations.

## Constraints

- $3 \leq N \leq 5 \times 10^5$
- $1 \leq A_i \leq N$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
7
1 2 3 2 3 2 1
```

```output1
7
```

For example, if you perform the operation with $(l,r)=(3,5), (2,6), (1,7)$ in this order, $A$ changes as follows: $(1,2,3,2,3,2,1)\rightarrow (1,2,3,3,3,2,1) \rightarrow (1,2,2,2,2,2,1) \rightarrow (1,1,1,1,1,1,1)$, after which there is no $l$ and $r$ with the said property. The total cost of this series of operations is $1+3+5=9$.

On the other hand, if you perform the operation with $(l,r)=(2,4), (4,6), (1,7)$ in this order, $A$ changes as follows: $(1,2,3,2,3,2,1)\rightarrow (1,2,2,2,3,2,1) \rightarrow (1,2,2,2,2,2,1) \rightarrow (1,1,1,1,1,1,1)$. The total cost of this series of operations is $1+1+5=7$.

```input2
5
1 2 3 4 5
```

```output2
0
```

```input3
40
1 2 3 4 5 6 7 8 7 6 5 6 7 8 7 6 5 4 3 2 2 1 2 3 4 5 4 5 6 7 8 7 7 6 5 6 6 7 8 8
```

```output3
44
```