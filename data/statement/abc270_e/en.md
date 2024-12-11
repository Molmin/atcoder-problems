Score : $500$ points

## Problem Statement

There are $N$ baskets numbered $1, 2, \ldots, N$ arranged in a circle.<br>
For each $1\leq i \leq N-1$, basket $i+1$ is to the immediate right of basket $i$, and basket $1$ is to the immediate right of basket $N$.

Basket $i$ now contains $A_i$ apples.

Takahashi starts in front of basket $1$ and repeats the following action.

- If the basket he is facing contains an apple, take one and eat it. Then, regardless of whether he has eaten an apple now, go on to the next basket to the immediate right.

Find the number of apples remaining in each basket when Takahashi has eaten exactly $K$ apples in total.

## Constraints

- $1 \leq N \leq 10^5$
- $0 \leq A_i \leq 10^{12}$
- $1 \leq K \leq 10^{12}$
- There are at least $K$ apples in total. That is, $\sum_{i=1}^{N}A_i\geq K$.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print $N$ integers, with spaces in between.<br>
The $i$-th integer should be the number of apples remaining in basket $i$ when Takahashi has eaten exactly $K$ apples in total.

```input1
3 3
1 3 0
```

```output1
0 1 0
```

Takahashi will do the following.

- Basket $1$, which he is facing, contains an apple, so he takes one and eats it. Then, he goes on to basket $2$. Now, the baskets have $0,3,0$ apples.
- Basket $2$, which he is facing, contains an apple, so he takes one and eats it. Then, he goes on to basket $3$. Now, the baskets have $0,2,0$ apples.
- Basket $3$, which he is facing, contains no apple. Then, he goes on to basket $1$. Now, the baskets have $0,2,0$ apples.
- Basket $1$, which he is facing, contains no apple. Then, he goes on to basket $2$. Now, the baskets have $0,2,0$ apples.
- Basket $2$, which he is facing, contains an apple, so he takes one and eats it. Then, he goes on to basket $3$. Now, the baskets have $0,1,0$ apple(s).

```input2
2 1000000000000
1000000000000 1000000000000
```

```output2
500000000000 500000000000
```