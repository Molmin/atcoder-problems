Score : $300$ points

## Problem Statement

We have $N$ bags.<br>
Bag $i$ contains $L_i$ balls. The $j$-th ball $(1\leq j\leq L_i)$ in Bag $i$ has a positive integer $a_{i,j}$ written on it.

We will pick out one ball from each bag.<br>
How many ways are there to pick the balls so that the product of the numbers written on the picked balls is $X$?

Here, we distinguish all balls, even with the same numbers written on them.

## Constraints

- $N \geq 2$
- $L_i \geq 2$
- The product of the numbers of balls in the bags is at most $10^5$: $\displaystyle\prod_{i=1}^{N}L_i \leq 10^5$.
- $1 \leq a_{i,j} \leq 10^9$
- $1 \leq X \leq 10^{18}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $X$
> 
> $L_1$ $a_{1,1}$ $a_{1,2}$ $\ldots$ $a_{1,L_1}$
> 
> $L_2$ $a_{2,1}$ $a_{2,2}$ $\ldots$ $a_{2,L_2}$
> 
> $\vdots$
> 
> $L_N$ $a_{N,1}$ $a_{N,2}$ $\ldots$ $a_{N,L_N}$

## Output

Print the answer. 

```input1
2 40
3 1 8 4
2 10 5
```

```output1
2
```

When choosing the $3$-rd ball in Bag $1$ and $1$-st ball in Bag $2$, we have $a_{1,3} \times a_{2,1} = 4 \times 10 = 40$.<br>
When choosing the $2$-nd ball in Bag $1$ and $2$-nd ball in Bag $2$, we have $a_{1,2} \times a_{2,2} = 8 \times 5 = 40$.<br>
There are no other ways to make the product $40$, so the answer is $2$.

```input2
3 200
3 10 10 10
3 10 10 10
5 2 2 2 2 2
```

```output2
45
```

Note that we distinguish all balls, even with the same numbers written on them.

```input3
3 1000000000000000000
2 1000000000 1000000000
2 1000000000 1000000000
2 1000000000 1000000000
```

```output3
0
```

There may be no way to make the product $X$.