Score : $600$ points

## Problem Statement

Given are an integer $N$ and a monotonically increasing sequence of $K$ integers $A=(A_1,A_2,\cdots,A_K)$.
Find the **lexicographically smallest** permutation $P$ of $(1,2,\cdots,N)$ that satisfies the following condition.

- $A$ is a longest increasing subsequence of $P$ (a monotonically increasing subsequence of $P$ with the maximum possible length).
It is fine if $P$ has multiple longest increasing subsequences, one of which is $A$.

From the Constraints of this problem, we can prove that there always exists a $P$ that satisfies the condition.

## Constraints

- $1 \leq K \leq N \leq 2 \times 10^5$
- $1 \leq A_1 &lt; A_2 &lt; \cdots &lt; A_K \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\cdots$ $A_K$

## Output

Print the answer.

```input1
3 2
2 3
```

```output1
2 1 3
```

$A$ is a longest increasing subsequence of $P$ when $P=(2,1,3),(2,3,1)$.
The answer is the lexicographically smallest of the two, or $(2,1,3)$.

```input2
5 1
4
```

```output2
5 4 3 2 1
```