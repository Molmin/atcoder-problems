Score : $2000$ points

## Problem Statement

You are given a permutation $P_1 ... P_N$ of the set {$1$, $2$, ..., $N$}.

You can apply the following operation to this permutation, any number of times (possibly zero):

- Choose two indices $i,j (1 \leq i &lt; j \leq N)$, such that $j - i \geq K$ and $|P_i - P_j| = 1$.
Then, swap the values of $P_i$ and $P_j$.

Among all permutations that can be obtained by applying this operation to the given permutation, find the lexicographically smallest one.

## Constraints

- $2 \leq N \leq 500,000$
- $1 \leq K \leq N-1$
- $P$ is a permutation of the set {$1$, $2$, ..., $N$}.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $P_1$ $P_2$ $...$ $P_N$

## Output

Print the lexicographically smallest permutation that can be obtained.

```input1
4 2
4 2 3 1
```

```output1
2
1
4
3
```

One possible way to obtain the lexicographically smallest permutation is shown below:

- $4 2 3 1$
- $4 1 3 2$
- $3 1 4 2$
- $2 1 4 3$

```input2
5 1
5 4 3 2 1
```

```output2
1
2
3
4
5
```

```input3
8 3
4 5 7 8 3 1 2 6
```

```output3
1
2
6
7
5
3
4
8
```