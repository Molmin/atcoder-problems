Score : $100$ points

## Problem Statement

You are given a sequence $A=(A_1,A_2,\ldots,A_N)$ of length $N$ and positive integers $P,Q,R$, and $S$.<br>
Here, $P,Q,R$, and $S$ satisfy $1\leq P\leq Q&lt;R\leq S \leq N$ and $Q-P=S-R$.

Let $B=(B_1, B_2,\ldots, B_N)$ be the sequence obtained by swapping the $P$-th through $Q$-th terms and the $R$-th through $S$-th terms of $A$.<br>
Print the sequence $B$.

## Constraints

- $1\leq N \leq 100$
- $1\leq A_i\leq 100$
- $1\leq P\leq Q&lt;R\leq S \leq N$
- $Q-P=S-R$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $P$ $Q$ $R$ $S$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print $B_1, B_2,\ldots, B_N$, with spaces in between.

```input1
8 1 3 5 7
1 2 3 4 5 6 7 8
```

```output1
5 6 7 4 1 2 3 8
```

Swapping the $1$-st through $3$-rd terms $(1,2,3)$ and the $5$-th through $7$-th terms $(5,6,7)$ of the sequence $A=(1,2,3,4,5,6,7,8)$
results in $B=(5,6,7,4,1,2,3,8)$, which should be printed with spaces in between.

```input2
5 2 3 4 5
2 2 1 1 1
```

```output2
2 1 1 2 1
```

The same integer may occur multiple times in the sequence.

```input3
2 1 1 2 2
50 100
```

```output3
100 50
```

```input4
10 2 4 7 9
22 75 26 45 72 81 47 29 97 2
```

```output4
22 47 29 97 72 81 75 26 45 2
```