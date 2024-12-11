Score : $2400$ points

## Problem Statement

Takahashi loves sorting.

He has a permutation $(p_1,p_2,...,p_N)$ of the integers from $1$ through $N$. Now, he will repeat the following operation until the permutation becomes $(1,2,...,N)$:

- First, we will define *high* and *low* elements in the permutation, as follows. The $i$-th element in the permutation is high if the maximum element between the $1$-st and $i$-th elements, inclusive, is the $i$-th element itself, and otherwise the $i$-th element is low.
- Then, let $a_1,a_2,...,a_k$ be the values of the high elements, and $b_1,b_2,...,b_{N-k}$ be the values of the low elements in the current permutation, **in the order they appear in it**.
- Lastly, rearrange the permutation into $(b_1,b_2,...,b_{N-k},a_1,a_2,...,a_k)$.

How many operations are necessary until the permutation is sorted?

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $(p_1,p_2,...,p_N)$ is a permutation of the integers from $1$ through $N$.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $p_1$ $p_2$ ... $p_N$

## Output

Print the number of operations that are necessary until the permutation is sorted.

```input1
5
3 5 1 2 4
```

```output1
3
```

The initial permutation is $(3,5,1,2,4)$, and each operation changes it as follows:

- In the first operation, the $1$-st and $2$-nd elements are high, and the $3$-rd, $4$-th and $5$-th are low. The permutation becomes: $(1,2,4,3,5)$.
- In the second operation, the $1$-st, $2$-nd, $3$-rd and $5$-th elements are high, and the $4$-th is low. The permutation becomes: $(3,1,2,4,5)$.
- In the third operation, the $1$-st, $4$-th and $5$-th elements are high, and the $2$-nd and $3$-rd and $5$-th are low. The permutation becomes: $(1,2,3,4,5)$.

```input2
5
5 4 3 2 1
```

```output2
4
```

```input3
10
2 10 5 7 3 6 4 9 8 1
```

```output3
6
```