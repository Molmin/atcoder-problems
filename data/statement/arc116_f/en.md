Score : $800$ points

## Problem Statement

We have $K$ sequences.
The $i$-th sequence $A_i$ has the length of $N_i$.

Takahashi and Aoki will play a game using these.
They will alternately do the following operation until the length of every sequence becomes $1$:

- Choose a sequence of length at least $2$, and delete its first or last element.

Takahashi goes first. Takahashi wants to maximize the sum of the $K$ elements remaining in the end, while Aoki wants to minimize it.

Find the sum of the $K$ elements remaining in the end when both players play optimally.

## Constraints

- All values in input are integers.
- $1 \leq K \leq 2 \times 10^5$
- $1 \leq N_i$
- $\sum_i N_i \leq 2 \times 10^5$
- $1 \leq A_{i, j} \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $K$
> 
> $N_1$ $A_{1, 1}$ $A_{1, 2}$ $\cdots$ $A_{1, N_1}$
> 
> $N_2$ $A_{2, 1}$ $A_{2, 2}$ $\cdots$ $A_{2, N_2}$
> 
> $\vdots$
> 
> $N_K$ $A_{K, 1}$ $A_{K, 2}$ $\cdots$ $A_{K, N_K}$

## Output

Print the answer.

```input1
2
3 1 2 3
2 1 10
```

```output1
12
```

Here is one possible progression of the game:

- Takahashi deletes the first element of $A_2$. Now we have $A_1 = \left(1, 2, 3\right), A_2 = \left(10\right)$.
- Aoki deletes the last element of $A_1$. Now we have $A_1 = \left(1, 2\right), A_2 = \left(10\right)$.
- Takahashi deletes the first element of $A_1$. Now we have $A_1 = \left(2\right), A_2 = \left(10\right)$. The length of every sequence has become $1$, so the game ends.

In this case, the sum of the $K$ elements remaining in the end is $12$. Note that the players may have made suboptimal moves here.

```input2
8
1 2
2 1 2
3 1 2 1
4 1 1 1 2
5 1 1 2 2 1
6 2 2 2 2 1 1
7 1 2 1 1 2 2 2
8 2 2 2 1 1 1 1 2
```

```output2
12
```