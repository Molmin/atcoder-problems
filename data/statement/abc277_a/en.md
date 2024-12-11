Score : $100$ points

## Problem Statement

You are given a sequence $P$ that is a permutation of $(1,2, \cdots ,N)$, and an integer $X$.
The $i$-th term of $P$ has a value of $P_i$.
Print $k$ such that $P_k = X$.

## Constraints

- $1 \leq N \leq 100$
- $1 \leq X \leq N$
- $P$ is a permutation of $(1,2, \cdots ,N)$.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $X$
> 
> $P_1$ $P_2$ $\ldots$ $P_N$

## Output

Print the answer.

```input1
4 3
2 3 1 4
```

```output1
2
```

We have $P = (2,3,1,4)$, so $P_2 = 3$. Thus, you should print $2$.

```input2
5 2
3 5 1 4 2
```

```output2
5
```

```input3
6 6
1 2 3 4 5 6
```

```output3
6
```