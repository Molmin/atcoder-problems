Score : $500$ points

## Problem Statement

There are $N$ kinds of magical gems, numbered $1, 2, \ldots, N$, distributed in the AtCoder Kingdom.<br>
Takahashi is trying to make an ornament by arranging gems in a row.<br>
For some pairs of gems, we can put the two gems next to each other; for other pairs, we cannot. We have $M$ pairs for which the two gems can be adjacent: (Gem $A_1$, Gem $B_1$), (Gem $A_2$, Gem $B_2$), $\ldots$, (Gem $A_M$, Gem $B_M$). For the other pairs, the two gems cannot be adjacent. (Order does not matter in these pairs.)<br>
Determine whether it is possible to form a sequence of gems that has one or more gems of each of the kinds $C_1, C_2, \dots, C_K$. If the answer is yes, find the minimum number of stones needed to form such a sequence.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 10^5$
- $0 \leq M \leq 10^5$
- $1 \leq A_i &lt; B_i \leq N$
- If $i \neq j$, $(A_i, B_i) \neq (A_j, B_j)$.
- $1 \leq K \leq 17$
- $1 \leq C_1 &lt; C_2 &lt; \dots &lt; C_K \leq N$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\hspace{7mm}\vdots$
> 
> $A_M$ $B_M$
> 
> $K$
> 
> $C_1$ $C_2$ $\cdots$ $C_K$

## Output

Print the minimum number of stones needed to form a sequence of gems that has one or more gems of each of the kinds $C_1, C_2, \dots, C_K$.<br>
If such a sequence cannot be formed, print `-1` instead.

```input1
4 3
1 4
2 4
3 4
3
1 2 3
```

```output1
5
```

For example, by arranging the gems in the order $[1, 4, 2, 4, 3]$, we can form a sequence of length $5$ with Gems $1, 2, 3$.

```input2
4 3
1 4
2 4
1 2
3
1 2 3
```

```output2
-1
```

```input3
10 10
3 9
3 8
8 10
2 10
5 8
6 8
5 7
6 7
1 6
2 4
4
1 2 7 9
```

```output3
11
```

For example, by arranging the gems in the order $[1, 6, 7, 5, 8, 3, 9, 3, 8, 10, 2]$, we can form a sequence of length $11$ with Gems $1, 2, 7, 9$.