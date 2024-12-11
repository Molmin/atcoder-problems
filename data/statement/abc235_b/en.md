Score : $200$ points

## Problem Statement

There are $N$ platforms arranged in a row. The height of the $i$-th platform from the left is $H_i$.

Takahashi is initially standing on the leftmost platform.

Since he likes heights, he will repeat the following move as long as possible.

- If the platform he is standing on is not the rightmost one, and the next platform to the right has a height greater than that of the current platform, step onto the next platform.

Find the height of the final platform he will stand on.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq H_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $H_1$ $\ldots$ $H_N$

## Output

Print the answer.

```input1
5
1 5 10 4 2
```

```output1
10
```

Takahashi is initially standing on the leftmost platform, whose height is $1$. The next platform to the right has a height of $5$ and is higher than the current platform, so he steps onto it.

He is now standing on the $2$-nd platform from the left, whose height is $5$. The next platform to the right has a height of $10$ and is higher than the current platform, so he steps onto it.

He is now standing on the $3$-rd platform from the left, whose height is $10$. The next platform to the right has a height of $4$ and is lower than the current platform, so he stops moving.

Thus, the height of the final platform Takahashi will stand on is $10$.

```input2
3
100 1000 100000
```

```output2
100000
```

```input3
4
27 1828 1828 9242
```

```output3
1828
```