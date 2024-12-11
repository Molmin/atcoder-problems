Score : $1200$ points

## Problem Statement

Given are integers $N$ and $A$.
Find the number, modulo $998244353$, of permutations $P=(P_1,P_2,\cdots,P_N)$ of $(1,2,\cdots,N)$ that satisfy the following conditions.

- $P_1=A$.
- It is possible to repeat the following operation so that $P$ has just two elements.-   - Choose three **consecutive** elements $x$, $y$, and $z$.
Here, $y&amp;lt;\min(x,z)$ or $y &amp;gt; \max(x,z)$ must hold.
Then, erase $y$ from $P$.

Solve $T$ test cases in an input file.

## Constraints

- $1 \leq T \leq 5 \times 10^5$
- $3 \leq N \leq 10^6$
- $1 \leq A \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $case_1$
> 
> $case_2$
> 
> $\vdots$
> 
> $case_T$

Each case is in the following format:

> $N$ $A$

## Output

Print the answer for each test case.

```input1
8
3 1
3 2
3 3
4 1
4 2
4 3
4 4
200000 10000
```

```output1
1
2
1
3
5
5
3
621235018
```

When $N=4,A=2$, one permutation that satisfies the condition is $P=(2,1,4,3)$.
One way to make it have just two elements is as follows.

- Choose $(x,y,z)=(2,1,4)$ to erase $1$, resulting in $P=(2,4,3)$.
- Choose $(x,y,z)=(2,4,3)$ to erase $4$, resulting in $P=(2,3)$.