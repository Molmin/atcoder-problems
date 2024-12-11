Score: $600$ points

## Problem Statement

You are given non-negative integers $P$ and $B$. Here, $P$ is prime, and $1 \leq B \leq P-1$.<br>
For a sequence of non-negative integers $X=(x_1,x_2,\dots,x_n)$, the hash value $\mathrm{hash}(X)$ is defined as follows.

$\displaystyle \mathrm{hash}(X) = \left(\sum_{i=1}^n x_i B^{n-i}\right) \bmod P$

You are given $M$ pairs of integers $(L_1, R_1), (L_2, R_2), \dots, (L_M, R_M)$.<br>
Is there a sequence of non-negative integers $A=(A_1, A_2, \dots, A_N)$ of length $N$ that satisfies the condition below?

- For all $i$ $(1 \leq i \leq M)$, the following condition holds:-   - Let $s$ be the sequence $(A_{L_i}, A_{L_i + 1}, \dots, A_{R_i})$ obtained by taking the $L_i$-th to the $R_i$-th elements of $A$. Then, $\mathrm{hash}(s) \neq 0$.

## Constraints

- $2 \leq P \leq 10^9$
- $P$ is prime.
- $1 \leq B \leq P - 1$
- $1 \leq N \leq 16$
- $1 \leq M \leq \frac{N(N+1)}{2}$
- $1 \leq L_i \leq R_i \leq N$
- $(L_i, R_i) \neq (L_j, R_j)$ if $i \neq j$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $P$ $B$ $N$ $M$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\vdots$
> 
> $L_M$ $R_M$

## Output

If there is a sequence that satisfies the condition in the problem statement, print `Yes`; otherwise, print `No`.

```input1
3 2 3 3
1 1
1 2
2 3
```

```output1
Yes
```

The sequence $A = (2, 0, 4)$ satisfies the condition because $\mathrm{hash}((A_1)) = 2, \mathrm{hash}((A_1, A_2)) = 1, \mathrm{hash}((A_2, A_3)) = 1$.

```input2
2 1 3 3
1 1
2 3
1 3
```

```output2
No
```

No sequence satisfies the condition.

```input3
998244353 986061415 6 11
1 5
2 2
2 5
2 6
3 4
3 5
3 6
4 4
4 5
4 6
5 6
```

```output3
Yes
```