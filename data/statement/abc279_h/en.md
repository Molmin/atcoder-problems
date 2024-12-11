Score : $600$ points

## Problem Statement

You are given positive integers $N$ and $M$. Here, it is guaranteed that $N\leq M \leq 2N$.

Print the sum, modulo $200\ 003$ (a prime), of the following value over all sequences of positive integers $S=(S_1,S_2,\dots,S_N)$ such that $\displaystyle \sum_{i=1}^{N} S_i = M$ (notice the unusual modulo):

- $\displaystyle \prod_{k=1}^{N} \min(k,S_k)$.

## Constraints

- $1 \leq N \leq 10^{12}$
- $N \leq M \leq 2N$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer as an integer.

```input1
3 5
```

```output1
14
```

There are six sequences $S$ that satisfy the condition:
$S=(1,1,3), S=(1,2,2), S=(1,3,1), S=(2,1,2), S=(2,2,1), S=(3,1,1)$.

The value $\displaystyle \prod_{k=1}^{N} \min(k,S_k)$ for each of those $S$ is as follows.

- $S=(1,1,3)$ : $1\times 1 \times 3 = 3$
- $S=(1,2,2)$ : $1\times 2 \times 2 = 4$
- $S=(1,3,1)$ : $1\times 2 \times 1 = 2$
- $S=(2,1,2)$ : $1\times 1 \times 2 = 2$
- $S=(2,2,1)$ : $1\times 2 \times 1 = 2$
- $S=(3,1,1)$ : $1\times 1 \times 1 = 1$

Thus, you should print their sum: $14$.

```input2
1126 2022
```

```output2
40166
```

Print the sum modulo $200\ 003$.

```input3
1000000000000 1500000000000
```

```output3
180030
```