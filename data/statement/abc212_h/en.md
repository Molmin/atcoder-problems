Score : $600$ points

## Problem Statement

Given are positive integers $N$, $K$, and a sequence of $K$ integers $(A_1, A_2, \ldots, A_K)$.

Takahashi and Aoki will play a game with stones. Initially, there are some heaps of stones, each of which contains one or more stones. The players take turns doing the following operation, with Takahashi going first.

- Choose a heap with one or more stones remaining. Remove any number of stones between $1$ and $X$ (inclusive) from that heap, where $X$ is the number of stones remaining.

The player who first gets unable to do the operation loses.

Now, consider the initial arrangements of stones satisfying the following.

- $1\leq M\leq N$ holds, where $M$ is the number of heaps of stones.
- The number of stones in each heap is one of the following: $A_1, A_2, \ldots, A_K$.

Assuming that the heaps are ordered, there are $K+K^2+\cdots +K^N$ such initial arrangements of stones. Among them, find the number, modulo $998244353$, of arrangements that lead to Takahashi's win, assuming that both players play optimally.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $1 \leq K &lt; 2^{16}$
- $1 \leq A_i &lt; 2^{16}$
- All $A_i$ are distinct.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\ldots$ $A_K$

## Output

Print the answer.

```input1
2 2
1 2
```

```output1
4
```

There are six possible initial arrangements of stones: $(1)$, $(2)$, $(1,1)$, $(1,2)$, $(2,1)$, and $(2,2)$.<br>
Takahashi has a winning strategy for four of them: $(1)$, $(2)$, $(1,2)$, and $(2,1)$, and Aoki has a winning strategy for the other two. Thus, we should print $4$.

```input2
100 3
3 5 7
```

```output2
112184936
```

Be sure to find the count modulo $998244353$.