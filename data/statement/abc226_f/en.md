Score : $500$ points

## Problem Statement

For a permutation $P = (p_1, p_2, \dots, p_N)$ of $(1,2, \dots, N)$, let us define the score $S(P)$ of $P$ as follows.

- There are $N$ people, numbered $1,2,\dots,N$. Additionally, Snuke is there. Initially, Person $i$ $(1 \leq i \leq N)$ has Ball $i$.<br>
    Each time Snuke screams, every Person $i$ such that $i \neq p_i$ gives their ball to Person $p_i$ simultaneously.<br>
    If, after screaming at least once, every Person $i$ has Ball $i$, Snuke stops screaming.<br>
    The score is the number of times Snuke screams until he stops. Here, it is guaranteed that the score will be a finite value.

There are $N!$ permutations $P$ of $(1,2, \dots, N)$. Find the sum, modulo $998244353$, of the scores of those permutations, each raised to the $K$-th power.

- Formally, let $S_N$ be the set of the permutations of $(1,2, \dots, N)$. Compute the following:
    $\displaystyle \left(\sum_{P \in S_N} S(P)^K \right) \bmod {998244353}$.

## Constraints

- $2 \leq N \leq 50$
- $1 \leq K \leq 10^4$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print $\displaystyle \left(\sum_{P \in S_N} S(P)^K \right) \bmod {998244353}$. 

```input1
2 2
```

```output1
5
```

When $N = 2$, there are two possible permutations $P$: $(1,2),(2,1)$.

The score of the permutation $(1,2)$ is found as follows.

- Initially, Person $1$ has Ball $1$, and Person $2$ has Ball $2$.<br>
    After Snuke's first scream, Person $1$ has Ball $1$, and Person $2$ has Ball $2$.<br>
    Here, every Person $i$ has Ball $i$, so he stops screaming.<br>
    Thus, the score is $1$.

The score of the permutation $(2,1)$ is found as follows.

- Initially, Person $1$ has Ball $1$, and Person $2$ has Ball $2$.<br>
    After Snuke's first scream, Person $1$ has Ball $2$, and Person $2$ has Ball $1$.<br>
    After Snuke's second scream, Person $1$ has Ball $1$, and Person $2$ has Ball $2$.<br>
    Here, every Person $i$ has Ball $i$, so he stops screaming.<br>
    Thus, the score is $2$.

Therefore, the answer in this case is $1^2 + 2^2 = 5$.

```input2
3 3
```

```output2
79
```

All permutations and their scores are listed below.

- $(1,2,3)$: The score is $1$.
- $(1,3,2)$: The score is $2$.
- $(2,1,3)$: The score is $2$.
- $(2,3,1)$: The score is $3$.
- $(3,1,2)$: The score is $3$.
- $(3,2,1)$: The score is $2$.

Thus, we should print $1^3 + 2^3 + 2^3 + 3^3 + 3^3 + 2^3 = 79$.

```input3
50 10000
```

```output3
77436607
```