Score : $900$ points

## Problem Statement

Find the number of permutations $P=(P_1,P_2,\dots,P_N)$ of $(1,2,\dots,N)$ that satisfy the following, modulo $998244353$, for each $K=0,1,2,\dots,N-1$.

- There are exactly $K$ integers $i$ such that $1 \le i \le N-1$ and $|P_i - P_{i+1}|=M$.

## Constraints

- $2 \le N \le 250000$
- $1 \le M \le N-1$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the number of permutations that satisfy the condition, modulo $998244353$, for each $K=0,1,2,\dots,N-1$.

```input1
3 1
```

```output1
0 4 2
```

- For $K=0$, the condition is satisfied by no permutations $P$.
- For $K=1$, the condition is satisfied by four permutations $P$: $(1,3,2),(2,1,3),(2,3,1),(3,1,2)$.
- For $K=2$, the condition is satisfied by two permutations $P$: $(1,2,3),(3,2,1)$.

```input2
4 3
```

```output2
12 12 0 0
```

```input3
10 5
```

```output3
1263360 1401600 710400 211200 38400 3840 0 0 0 0
```