Score : $700$ points

## Problem Statement

You are given a multiset of integers with $N$ elements: $A=\lbrace A_1,A_2,...,A_N \rbrace$. It is guaranteed that every element of $A$ is between $1$ and $M$ (inclusive).

Let us repeat the following operation $K$ times.

- Choose an integer between $1$ and $M$ (inclusive) and add it to $A$. Then, delete the $X$-th smallest value in $A$.

Here, the $X$-th smallest value in $A$ is the $X$-th value from the front in the sequence of the elements of $A$ sorted in non-decreasing order.

There are $M^K$ ways to choose an integer $K$ times between $1$ and $M$. Assume that, for each of these ways, we have found the sum of the elements of $A$ after the operations with the corresponding choices. Find the sum, modulo $998244353$, of the $M^K$ values computed.

## Constraints

- $1 \le N,M,K \le 2000$
- $1 \le X \le N+1$
- $1 \le A_i \le M$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $K$ $X$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
2 4 2 1
1 3
```

```output1
99
```

We start with $A=\{1,3\}$. Here is an example of how we do the operations.

- <p>Add $4$ to $A$, making $A=\{1,3,4\}$. Then, delete the $1$-st smallest value, making $A=\{3,4\}$.</p>
- <p>Add $3$ to $A$, making $A=\{3,3,4\}$. Then, delete the $1$-st smallest value, making $A=\{3,4\}$.</p>

In this case, the sum of the elements of $A$ after the operations is $3+4=7$.

```input2
5 9 6 3
3 7 1 9 9
```

```output2
15411789
```