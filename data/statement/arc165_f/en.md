Score : $800$ points

## Problem Statement

An integer sequence of length $2n$, $X=(X_1,X_2,\dots,X_{2n})$, such that $X_{2i-1}=X_{2i}$ for every $i=1,2,\dots,n$ is called a **good sequence**.

There is an integer sequence of length $2N$, $A=(A_1,A_2,\dots,A_{2N})$, which contains each integer $i=1,2,\dots,N$ exactly twice.

We want to make $A$ a **good sequence** by performing the operation of swapping the values of two adjacent terms zero or more times.

Let $K$ be the minimum number of operations we must perform the operation to make $A$ a **good sequence**. Find the lexicographically smallest **good sequence** that can be obtained by performing the operations $K$ times on $A$.

 What is lexicographical order on sequences?

A sequence $S = (S_1,S_2,\ldots,S_{|S|})$ is **lexicographically smaller** than $T = (T_1,T_2,\ldots,T_{|T|})$ when 1. or 2. below holds.
Here, $|S|$ and $|T|$ denotes the lengths of $S$ and $T$, respectively.

1. $|S| \lt |T|$ and $(S_1,S_2,\ldots,S_{|S|}) = (T_1,T_2,\ldots,T_{|S|})$.
2. There is an integer $1 \leq i \leq \min\lbrace |S|, |T| \rbrace$ that satisfy both of the following:
1.    - $(S_1,S_2,\ldots,S_{i-1}) = (T_1,T_2,\ldots,T_{i-1})$.
2.    - $S_i$ is smaller than $T_i$ (as a number).

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq N$
- $A$ contains each integer $i=1,2,\dots,N$ exactly twice.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_{2N}$

## Output

Print the lexicographically smallest **good sequence** that can be obtained by performing the operations $K$ times on $A$, with spaces in between.

```input1
3
3 2 1 2 3 1
```

```output1
2 2 3 3 1 1
```

For example, we can perform the operation four times as $(3,2,1,2,3,1) \rightarrow (3,2,1,3,2,1) \rightarrow (3,2,3,1,2,1) \rightarrow (3,3,2,1,2,1) \rightarrow (3,3,2,2,1,1)$ to make $A$ a **good sequence**. This number is the minimum needed. With four operations, we can also make $A=(2,2,3,3,1,1)$, and the answer is $(2,2,3,3,1,1)$.

```input2
3
1 1 2 2 3 3
```

```output2
1 1 2 2 3 3
```

```input3
15
15 12 11 10 5 11 13 2 6 14 3 6 5 14 10 15 1 2 13 9 7 4 9 1 3 8 12 4 8 7
```

```output3
11 11 5 5 6 6 10 10 14 14 15 15 2 2 12 12 13 13 1 1 3 3 9 9 4 4 7 7 8 8
```