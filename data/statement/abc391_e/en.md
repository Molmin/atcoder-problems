Score : $450$ points

## Problem Statement

For a binary string $B = B_1 B_2 \dots B_{3^n}$ of length $3^n$ ($n \geq 1$), we define an operation to obtain a binary string $C = C_1 C_2 \dots C_{3^{n-1}}$ of length $3^{n-1}$ as follows:

- Partition the elements of $B$ into groups of $3$ and take the majority value from each group. That is, for $i=1,2,\dots,3^{n-1}$, let $C_i$ be the value that appears most frequently among $B_{3i-2}$, $B_{3i-1}$, and $B_{3i}$.

You are given a binary string $A = A_1 A_2 \dots A_{3^N}$ of length $3^N$. Let $A' = A'_1$ be the length-$1$ string obtained by applying the above operation $N$ times to $A$.

Determine the minimum number of elements of $A$ that must be changed (from $0$ to $1$ or from $1$ to $0$) in order to change the value of $A'_1$.

## Constraints

- $N$ is an integer with $1 \leq N \leq 13$.
- $A$ is a string of length $3^N$ consisting of $0$ and $1$.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1 A_2 \dots A_{3^N}$

## Output

Print the answer.

```input1
2
010011101
```

```output1
1
```

For example, with $A=010011101$, after applying the operation twice, we obtain:

- First operation: The majority of $010$ is $0$, of $011$ is $1$, and of $101$ is $1$, resulting in $011$.
- Second operation: The majority of $011$ is $1$, yielding $1$.

To change the final value from $1$ to $0$, one way is to change the 5th character of $A$ from $1$ to $0$, yielding $A=010001101$. After the change, the operations yield:

- First operation: The majority of $010$ is $0$, of $001$ is $0$, and of $101$ is $1$, resulting in $001$.
- Second operation: The majority of $001$ is $0$, yielding $0$.

Thus, the minimum number of changes required is $1$.

```input2
1
000
```

```output2
2
```