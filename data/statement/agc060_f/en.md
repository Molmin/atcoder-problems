Score : $2200$ points

## Problem Statement

You have a simple undirected graph.
Each vertex in this graph has an integer interval written on it, and there are $C_{i,j}$ vertices with the interval $[i,j]$ ($1 \leq i \leq j \leq N$).
There are no vertices with other intervals.

For any two vertices, there is an undirected edge between them if and only if the written intervals intersect.
Here, an interval $[a,b]$ and an interval $[c,d]$ intersect if and only if $\max(a,c) \leq \min(b,d)$.

Find the number of spanning trees of this graph, modulo $998244353$.
Here, all vertices are pairwise distinguishable.

## Constraints

- $2 \leq N \leq 400$
- $1 \leq C_{i,j} \leq 10^4$
- All numbers in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $C_{1,1}$ $C_{1,2}$ $\cdots$ $C_{1,N}$
> 
> $C_{2,2}$ $\cdots$ $C_{2,N}$
> 
> $\vdots$
> 
> $C_{N,N}$

## Output

Print the answer.

```input1
2
1 2
1
```

```output1
8
```

```input2
3
1 1 1
1 1
1
```

```output2
99
```

```input3
4
8 3 8 10
1 5 3
1 6
4
```

```output3
971555314
```

```input4
10
2742 5611 1401 5439 5220 8571 4998 4194 7443 2492
2393 3201 9106 1649 2456 1984 7159 9679 7695
808 4600 2573 7771 5839 9504 4381 3223
5325 2564 456 5050 6963 913 9072
310 1521 9816 6205 2988 3614
4810 2979 2852 9242 6290
7551 7139 7228 699
4869 889 7597
4239 5970
865
```

```output4
234850531
```