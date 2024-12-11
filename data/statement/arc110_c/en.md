Score : $500$ points

## Problem Statement

We have a permutation $P = P_1, P_2, \ldots, P_N$ of $1, 2, \ldots, N$.

You have to do the following $N - 1$ operations on $P$, **each exactly once**, in some order:

- <p>Swap $P_1$ and $P_2$.</p>
- <p>Swap $P_2$ and $P_3$.</p>
<p>$\vdots$</p>
- <p>Swap $P_{N-1}$ and $P_N$.</p>

Your task is to sort $P$ in ascending order by configuring the order of operations.
If it is impossible, print `-1` instead.

## Constraints

- All values in input are integers.
- $2 \leq N \leq 2 \times 10^5$
- $P$ is a permutation of $1, 2, \ldots, N$.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $P_2$ $\ldots$ $P_N$

## Output

If it is impossible to sort $P$ in ascending order by configuring the order of operations, print `-1`.

Otherwise, print $N-1$ lines to represent a sequence of operations that sorts $P$ in ascending order.
The $i$-th line $(1 \leq i \leq N - 1)$ should contain $j$, where the $i$-th operation swaps $P_j$ and $P_{j + 1}$.

If there are multiple such sequences of operations, any of them will be accepted.

```input1
5
2 4 1 5 3
```

```output1
4
2
3
1
```

The following sequence of operations sort $P$ in ascending order:

- First, swap $P_4$ and $P_5$, turning $P$ into $2, 4, 1, 3, 5$.
- Then, swap $P_2$ and $P_3$, turning $P$ into $2, 1, 4, 3, 5$.
- Then, swap $P_3$ and $P_4$, turning $P$ into $2, 1, 3, 4, 5$.
- Finally, swap $P_1$ and $P_2$, turning $P$ into $1, 2, 3, 4, 5$.

```input2
5
5 4 3 2 1
```

```output2
-1
```