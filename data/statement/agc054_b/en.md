Score : $800$ points

## Problem Statement

We have $N$ oranges, numbered $1$ through $N$.
The weight of Orange $i$ is $W_i$.
Takahashi and Aoki will share these oranges as follows.

- <p>Choose a permutation $(p_1, p_2, \cdots, p_N)$ of $(1,2,\cdots,N)$.</p>
- <p>For each $i = 1, 2, \cdots, N$ in this order, do the following.</p>
-   - If the total weight of the oranges Takahashi has taken is not greater than that of the oranges Aoki has taken, Takahashi takes Orange $p_i$.
Otherwise, Aoki takes Orange $p_i$.

Find the number of permutations $p$ modulo $998244353$ such that the total weight of the oranges Takahashi will take is equal to that of the oranges Aoki will take.

## Constraints

- $2 \leq N \leq 100$
- $1 \leq W_i \leq 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $W_1$ $W_2$ $\cdots$ $W_N$

## Output

Print the answer.

```input1
3
1 1 2
```

```output1
4
```

There are four permutations $p$ satisfying the condition: $(1,3,2),(2,3,1),(3,1,2),(3,2,1)$.
If $p=(3,2,1)$, for example, the following will happen.

- $i=1$: the total weights of the oranges Takahashi and Aoki have taken are $0$ and $0$, respectively. Takahashi takes Orange $p_i=3$.
- $i=2$: the total weights of the oranges Takahashi and Aoki have taken are $2$ and $0$, respectively. Aoki takes Orange $p_i=2$.
- $i=3$: the total weights of the oranges Takahashi and Aoki have taken are $2$ and $1$, respectively. Aoki takes Orange $p_i=1$.

Thus, the permutation $p=(3,2,1)$ counts.

```input2
4
1 2 3 8
```

```output2
0
```

```input3
20
2 8 4 7 5 3 1 2 4 1 2 5 4 3 3 8 1 7 8 2
```

```output3
373835282
```