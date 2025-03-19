Score : $525$ points

## Problem Statement

You are given an integer sequence $A=(A_1,A_2,\ldots,A_N)$ of length $N$.

For each integer pair $(L,R)$ with $1 \le L \le R \le N$, define $f(L,R)$ as follows:

- Start with an empty blackboard. Write the $R-L+1$ integers $A_L, A_{L+1}, \ldots, A_R$ on the blackboard in order.
- Repeat the following operation until all integers on the blackboard are erased:-   - Choose integers $l, r$ with $l \le r$ such that every integer from $l$ through $r$ appears at least once on the blackboard. Then, erase all integers from $l$ through $r$ that are on the blackboard.
- Let $f(L,R)$ be the minimum number of such operations needed to erase all the integers from the blackboard.

Find $\displaystyle \sum_{L=1}^N \sum_{R=L}^N f(L,R)$.

## Constraints

- $1 \le N \le 3 \times 10^5$
- $1 \le A_i \le N$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
4
1 3 1 4
```

```output1
16
```

For example, in the case of $(L,R)=(1,4)$:

- The blackboard has $1,3,1,4$.
- Choose $(l,r)=(1,1)$ and erase all occurrences of $1$. The blackboard now has $3,4$.
- Choose $(l,r)=(3,4)$ and erase all occurrences of $3$ and $4$. The blackboard becomes empty.
- It cannot be done in fewer than two operations, so $f(1,4) = 2$.

Similarly, you can find $f(2,4)=2$, $f(1,1)=1$, etc.

$\displaystyle \sum_{L=1}^N \sum_{R=L}^N f(L,R) = 16$, so print $16$.

```input2
5
3 1 4 2 4
```

```output2
23
```

```input3
10
5 1 10 9 2 5 6 9 1 6
```

```output3
129
```