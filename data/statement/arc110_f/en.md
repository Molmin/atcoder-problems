Score : $900$ points

## Problem Statement

We have a permutation $P = P_0, P_1, \ldots, P_{N - 1}$ of $0, 1, \ldots, N - 1$.

You can do the following operation on $P$ at most $2 \times 10^5$ times:

- Announce an integer $i \sim (0 \leq i \leq N - 1)$. Swap $P_i$ and $P_{(i + P_i) \textrm{ mod } N}$.

Your task is to sort $P$ in ascending order with this operation.
If it is impossible, print `-1` instead.

## Constraints

- All values in input are integers.
- $2 \leq N \leq 100$
- $P$ is a permutation of $0, 1, \ldots, N - 1$.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $P_0$ $P_1$ $\ldots$ $P_{N - 1}$

## Output

If it is impossible to sort $P$ in ascending order with at most $2 \times 10^5$ operations, print `-1`.

Otherwise, print $K + 1$ lines to represent a sequence of operations that sorts $P$ in ascending order, where $K$ is the number of operations done, as follows:

- The first line should contain the integer $K$;
- the $(1 + i)$-the line $(1 \leq i \leq K)$ should contain the integer $j \sim (0 \leq j \leq N - 1)$ announced in the $i$-th operation.

You do not have to minimize the number of operations done.
If there are multiple such sequences of at most $2 \times 10^5$ operations, any of them will be accepted.

```input1
8
7 1 2 6 4 0 5 3
```

```output1
4
6
0
3
0
```

This sequence of operations sorts $P$ in ascending order, as follows:

- <p>First, announce $i = 6$. We swap $P_6 (= 5)$ and $P_{(6 + 5) \textrm{ mod } 8} = P_3 (= 6)$, turning $P$ into $7, 1, 2, 5, 4, 0, 6, 3$.</p>
- <p>Then, announce $i = 0$. We swap $P_0 (= 7)$ and $P_{(0 + 7) \textrm{ mod } 8} = P_7 (= 3)$, turning $P$ into $3, 1, 2, 5, 4, 0, 6, 7$.</p>
- <p>Then, announce $i = 3$. We swap $P_3 (= 5)$ and $P_{(3 + 5) \textrm{ mod } 8} = P_0 (= 3)$, turning $P$ into $5, 1, 2, 3, 4, 0, 6, 7$.</p>
- <p>Finally, announce $i = 0$. We swap $P_0 (= 5)$ and $P_{(0 + 5) \textrm{ mod } 8} = P_5 (= 0)$, turning $P$ into $0, 1, 2, 3, 4, 5, 6, 7$.</p>