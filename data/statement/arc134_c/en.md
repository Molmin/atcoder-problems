Score : $500$ points

## Problem Statement

There are $K$ boxes numbered $1$ to $K$. Initially, all boxes are empty.

Snuke has some balls with integers from $1$ to $N$ written on them.
Among them, $a_i$ balls have the number $i$.
Balls with the same integer written on them cannot be distinguished.

Snuke has decided to put all of his balls in the boxes.
He wants the balls with the number $1$ to have a majority in every box.
In other words, in every box, the number of balls with $1$ should be greater than that of the other balls.

Find the number of such ways to put the balls in the boxes, modulo $998244353$.

Two ways are distinguished when there is a pair of integers $(i,j)$ satisfying $1 \leq i \leq K, 1 \leq j \leq N$ such that the numbers of balls with $j$ in Box $i$ are different.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 10^5$
- $1 \leq K \leq 200$
- $1 \leq a_i &lt; 998244353$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$ 
> 
> $a_1$ $\cdots$ $a_N$

## Output

Print the number of ways, modulo $998244353$, to put the balls in the boxes so that the balls with the number $1$ have a majority in every box.

```input1
2 2
3 1
```

```output1
2
```

- There are two ways to put the balls so that the balls with the number $1$ will be in the majority.
- One way to do so is to put two of the balls with $1$ in Box $1$ and the other one in Box $2$, and put the one ball with $2$ in Box $1$.

```input2
2 1
1 100
```

```output2
0
```

- There may be no way to put the balls in the boxes to meet the requirement.

```input3
20 100
1073813 90585 41323 52293 62633 28788 1925 56222 54989 2772 36456 64841 26551 92115 63191 3603 82120 94450 71667 9325
```

```output3
313918676
```

- Be sure to find the count modulo $998244353$.