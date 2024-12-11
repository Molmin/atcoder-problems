Score : $600$ points

## Problem Statement

We have a sequence $X$, which is initially empty.<br>
Takahashi has performed the following operation for $i=1,2,\ldots,N$ in this order.

- Append $l_i,l_i+1,\ldots,r_i$ in this order to the end of $X$.

Find the greatest length of a strictly increasing subsequence of the final $X$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq l_i \leq r_i \leq 10^9$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $l_1$ $r_1$
> 
> $\vdots$
> 
> $l_{N}$ $r_{N}$

## Output

Print the answer.

```input1
4
1 1
2 4
10 11
7 10
```

```output1
8
```

The final $X$ is $(1,2,3,4,10,11,7,8,9,10)$.<br>
The $1$-st, $2$-nd, $3$-rd, $4$-th, $7$-th, $8$-th, $9$-th, and $10$-th elements form a strictly increasing subsequence with the greatest length.

```input2
4
1 1
1 1
1 1
1 1
```

```output2
1
```

The final $X$ is $(1,1,1,1)$.

```input3
1
1 1000000000
```

```output3
1000000000
```