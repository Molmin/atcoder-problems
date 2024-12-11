Score : $1000$ points

## Problem Statement

You are given a permutation $p = (p_1, \ldots, p_N)$ of $\{ 1, \ldots, N \}$.
You can perform the following two kinds of operations repeatedly in any order:

- Pay a cost $A$. Choose integers $l$ and $r$ ($1 \leq l &lt; r \leq N$), and shift $(p_l, \ldots, p_r)$ to the left by one. That is, replace $p_l, p_{l + 1}, \ldots, p_{r - 1}, p_r$ with $p_{l + 1}, p_{l + 2}, \ldots, p_r, p_l$, respectively.
- Pay a cost $B$. Choose integers $l$ and $r$ ($1 \leq l &lt; r \leq N$), and shift $(p_l, \ldots, p_r)$ to the right by one.  That is, replace $p_l, p_{l + 1}, \ldots, p_{r - 1}, p_r$ with $p_r, p_l, \ldots, p_{r - 2}, p_{r - 1}$, respectively.

Find the minimum total cost required to sort $p$ in ascending order.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 5000$
- $1 \leq A, B \leq 10^9$
- $(p_1 \ldots, p_N)$ is a permutation of $\{ 1, \ldots, N \}$.

## Input

Input is given from Standard Input in the following format:

> $N$ $A$ $B$
> 
> $p_1$ $\cdots$ $p_N$

## Output

Print the minimum total cost required to sort $p$ in ascending order.

```input1
3 20 30
3 1 2
```

```output1
20
```

Shifting $(p_1, p_2, p_3)$ to the left by one results in $p = (1, 2, 3)$.

```input2
4 20 30
4 2 3 1
```

```output2
50
```

One possible sequence of operations is as follows:

- Shift $(p_1, p_2, p_3, p_4)$ to the left by one. Now we have $p = (2, 3, 1, 4)$.
- Shift $(p_1, p_2, p_3)$ to the right by one. Now we have $p = (1, 2, 3, 4)$.

Here, the total cost is $20 + 30 = 50$.

```input3
1 10 10
1
```

```output3
0
```

```input4
4 1000000000 1000000000
4 3 2 1
```

```output4
3000000000
```

```input5
9 40 50
5 3 4 7 6 1 2 9 8
```

```output5
220
```