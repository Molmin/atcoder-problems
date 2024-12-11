Score : $600$ points

## Problem Statement

You are given a permutation $P=(P_1,\ldots,P_N)$ of $(1,\ldots,N)$, and an integer $K$.

Find the number of pairs of integers $(L, R)$ that satisfy all of the following conditions:

- <p>$1 \leq L \leq R \leq N$</p>
- <p>$\mathrm{max}(P_L,\ldots,P_R) - \mathrm{min}(P_L,\ldots,P_R) \leq R - L + K$</p>

## Constraints

- $1 \leq N \leq 1.4\times 10^5$
- $P$ is a permutation of $(1,\ldots,N)$.
- $0 \leq K \leq 3$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $P_1$ $P_2$ $\ldots$ $P_N$

## Output

Print the answer.

```input1
4 1
1 4 2 3
```

```output1
9
```

The following nine pairs $(L, R)$ satisfy the conditions.

- $(1,1)$
- $(1,3)$
- $(1,4)$
- $(2,2)$
- $(2,3)$
- $(2,4)$
- $(3,3)$
- $(3,4)$
- $(4,4)$

For $(L,R) = (1,2)$, we have $\mathrm{max}(A_1,A_2) -\mathrm{min}(A_1,A_2) = 4-1 = 3$ and $R-L+K=2-1+1 = 2$, not satisfying the condition.

```input2
2 0
2 1
```

```output2
3
```

```input3
10 3
3 7 10 1 9 5 4 8 6 2
```

```output3
37
```