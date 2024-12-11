Score : $600$ points

## Problem Statement

Snuke has a blackboard and a set $S$ consisting of $N$ integers.
The $i$-th element in $S$ is $S_i$.

He wrote an integer $X$ on the blackboard, then performed the following operation $N$ times:

- Choose one element from $S$ and remove it.
- Let $x$ be the number written on the blackboard now, and $y$ be the integer removed from $S$. Replace the number on the blackboard with $x \bmod {y}$.

There are $N!$ possible orders in which the elements are removed from $S$.
For each of them, find the number that would be written on the blackboard after the $N$ operations, and compute the sum of all those $N!$ numbers modulo $10^{9}+7$.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 200$
- $1 \leq S_i, X \leq 10^{5}$
- $S_i$ are pairwise distinct.

## Input

Input is given from Standard Input in the following format:

> $N$ $X$
> 
> $S_1$ $S_2$ $\ldots$ $S_{N}$

## Output

Print the answer.

```input1
2 19
3 7
```

```output1
3
```

- There are two possible orders in which we remove the numbers from $S$.
- If we remove $3$ and $7$ in this order, the number on the blackboard changes as follows: $19 \rightarrow 1 \rightarrow 1$.
- If we remove $7$ and $3$ in this order, the number on the blackboard changes as follows: $19 \rightarrow 5 \rightarrow 2$.
- The output should be the sum of these: $3$.

```input2
5 82
22 11 6 5 13
```

```output2
288
```

```input3
10 100000
50000 50001 50002 50003 50004 50005 50006 50007 50008 50009
```

```output3
279669259
```

- Be sure to compute the sum modulo $10^{9}+7$.