Score : $300$ points

## Problem Statement

You are given a sequence of $N$ positive integers: $A=(A_1,A_2,\dots,A_N)$.

You will repeat the following operation until the length of $A$ becomes $1$.

- Let $k$ be the length of $A$ before this operation.
Choose integers $i$ and $j$ such that $\max(\{A_1,A_2,\dots,A_{k}\})=A_i,\min(\{A_1,A_2,\dots,A_{k}\})=A_j$, and $i \neq j$.
Then, replace $A_i$ with $(A_i \bmod A_j)$.
If $A_i$ becomes $0$ at this moment, delete $A_i$ from $A$.

Find the number of operations that you will perform.
We can prove that, no matter how you choose $i,j$ in the operations, the total number of operations does not change.

## Constraints

- $2 \le N \le 2 \times 10^5$
- $1 \le A_i \le 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
3
2 3 6
```

```output1
3
```

You will perform $3$ operations as follows:

- Choose $i=3,j=1$. You get $A_3=0$, and delete $A_3$ from $A$. Now you have $A=(2,3)$.
- Choose $i=2,j=1$. You get $A_2=1$. Now you have $A=(2,1)$.
- Choose $i=1,j=2$. You get $A_1=0$, and delete $A_1$ from $A$. Now you have $A=(1)$, and terminate the process because the length of $A$ becomes $1$.

```input2
6
1232 452 23491 34099 57341 21488
```

```output2
12
```