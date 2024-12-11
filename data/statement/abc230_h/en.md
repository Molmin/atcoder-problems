Score : $600$ points

## Problem Statement

Takahashi won a claw machine competition and was awarded "all-you-can-stuff" gold blocks.<br>
There are unlimited numbers of blocks weighing $w_1, w_2, \dots, w_K$ kilograms each, and an unlimited number of bags weighing $1$ kilogram each to stuff them.

Takahashi can bring home one non-empty bag.<br>
A bag can contain zero or more other non-empty bags and zero or more gold blocks.

After arranging a truck with a load capacity of $W$ kilograms, he gets interested in the number of ways to stuff gold blocks and bring home a bag that weighs $w$ kilograms in total for $w = 2, 3, \dots, W$.<br>
Find the number, modulo $998244353$, of possible states of the bag for each $w = 2, 3, \dots, W$. Here,

- two gold blocks are said to be the same when their weights are the same;
- two bags are said to be in the same state when the two multisets whose elements are the bags and gold blocks in the two bags are the same.

## Constraints

- $2 \leq W \leq 2.5 \times 10^5$
- $1 \leq K \leq W$
- $1 \leq w_i \leq W$ $(1 \leq i \leq K)$
- $i \neq j \to w_i \neq w_j$ $(1 \leq i,j \leq K)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $W$ $K$
> 
> $w_1$ $w_2$ $\dots$ $w_K$

## Output

Print the answer in $W - 1$ lines.<br>
The $i$-th line should contain the count for $w = i + 1$.

```input1
4 1
1
```

```output1
1
2
4
```

The figure below enumerates the possible states of the bag for $w = 2, 3, 4$. (A circle represents a bag.)

![image](https://img.atcoder.jp/ghi/5e1a4298e8b0992c767932915c7e93f4.png)

```input2
10 10
1 2 3 4 5 6 7 8 9 10
```

```output2
1
3
7
18
45
121
325
904
2546
```