Score: $625$ points

## Problem Statement

A sequence of positive integers $T=(T_1,T_2,\dots,T_M)$ of length $M$ is a **palindrome** if and only if $T_i=T_{M-i+1}$ for each $i=1,2,\dots,M$.

You are given a sequence of non-negative integers $A = (A_1,A_2,\dots,A_N)$ of length $N$. Determine if there is a sequence of positive integers $S=(S_1,S_2,\dots,S_N)$ of length $N$ that satisfies the following condition, and if it exists, find the lexicographically smallest such sequence.

- For each $i=1,2,\dots,N$, both of the following hold:-   - The sequence $(S_{i-A_i},S_{i-A_i+1},\dots,S_{i+A_i})$ is a palindrome.
-   - If $2 \leq i-A_i$ and $i+A_i \leq N-1$, the sequence $(S_{i-A_i-1},S_{i-A_i},\dots,S_{i+A_i+1})$ is not a palindrome.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq A_i \leq \min\{i-1,N-i\}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

If there is no sequence $S$ that satisfies the condition, print `No`.

If there is a sequence $S$ that satisfies the condition, let $S'$ be the lexicographically smallest such sequence and print it in the following format:

> Yes
> 
> $S'_1$ $S'_2$ $\dots$ $S'_N$

```input1
7
0 0 2 0 2 0 0
```

```output1
Yes
1 1 2 1 1 1 2
```

$S = (1,1,2,1,1,1,2)$ satisfies the condition:

- $i=1$: $(A_1)=(1)$ is a palindrome.
- $i=2$: $(A_2)=(1)$ is a palindrome, but $(A_1,A_2,A_3)=(1,1,2)$ is not.
- $i=3$: $(A_1,A_2,\dots,A_5)=(1,1,2,1,1)$ is a palindrome.
- $i=4$: $(A_4)=(1)$ is a palindrome, but $(A_3,A_4,A_5)=(2,1,1)$ is not.
- $i=5$: $(A_3,A_4,\dots,A_7)=(2,1,1,1,2)$ is a palindrome.
- $i=6$: $(A_6)=(1)$ is a palindrome, but $(A_5,A_6,A_7)=(1,1,2)$ is not.
- $i=7$: $(A_7)=(2)$ is a palindrome.

There are other sequences like $S=(2,2,1,2,2,2,1)$ that satisfy the condition, but print the lexicographically smallest one, which is $(1,1,2,1,1,1,2)$.

```input2
7
0 1 2 3 2 1 0
```

```output2
Yes
1 1 1 1 1 1 1
```

```input3
7
0 1 2 0 2 1 0
```

```output3
No
```