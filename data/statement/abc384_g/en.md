Score : $575$ points

## Problem Statement

You are given integer sequences $A=(A_1,A_2,\ldots,A_N)$ and $B=(B_1,B_2,\ldots,B_N)$ of length $N$, and integer sequences $X=(X_1,X_2,\ldots,X_K)$ and $Y=(Y_1,Y_2,\ldots,Y_K)$ of length $K$.

For each $k=1,2,\ldots,K$, find $\displaystyle \sum_{i=1}^{X_k} \sum_{j=1}^{Y_k} |A_i-B_j|$.

## Constraints

- $1\le N\le 10^5$
- $0\le A_i,B_j\le 2\times 10^8$
- $1\le K\le 10^4$
- $1\le X_k,Y_k\le N$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $B_1$ $B_2$ $\ldots$ $B_N$
> 
> $K$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $\vdots$
> 
> $X_K$ $Y_K$

## Output

Print $K$ lines.
The $i$-th line $(1\le i\le K)$ should contain the answer for $k=i$.

```input1
2
2 4
3 5
4
1 1
1 2
2 1
2 2
```

```output1
1
4
2
6
```

For $k=1$, the answer is $|A_1-B_1|=1$, so print $1$ on the first line.

For $k=2$, the answer is $|A_1-B_1|+|A_1-B_2|=1+3=4$, so print $4$ on the second line.

For $k=3$, the answer is $|A_1-B_1|+|A_2-B_1|=1+1=2$, so print $2$ on the third line.

For $k=4$, the answer is $|A_1-B_1|+|A_1-B_2|+|A_2-B_1|+|A_2-B_2|=1+3+1+1=6$, so print $6$ on the fourth line.

```input2
5
1163686 28892 1263085 2347878 520306
1332157 1202905 2437161 1291976 563395
5
5 3
1 5
2 3
1 2
5 5
```

```output2
13331322
2209746
6366712
207690
20241215
```