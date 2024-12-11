Score: $800$ points

## Problem Statement

We have a *pancake tower* which is a pile of $N$ pancakes. Initially, the $i$-th pancake from the top $(1 \leq i \leq N)$ has a size of $A_i$. Takahashi, a chef, can do the following operation at most once.

- Choose integers $l$ and $r$ $(1 \leq l \lt r \leq N)$ and turn the $l$-th through $r$-th pancakes upside down, reversing the order.

Find the minimum possible **ugliness** of the tower after the operation is done (or not), defined below:

the ugliness is the sum of the differences of the sizes of adjacent pancakes;<br>
that is, the value $|A^{\prime}_1 - A^{\prime}_2| + |A^{\prime}_2 - A^{\prime}_3| + \cdots + |A^{\prime}_{N-1} - A^{\prime}_N|$, where $A^{\prime}_i$ is the size of the $i$-th pancake from the top.

## Constraints

- $2 \leq N \leq 300000$
- $1 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the minimum possible ugliness of the tower.

```input1
5
7 14 12 2 6
```

```output1
17
```

If we do the operation choosing $l = 2$ and $r = 5$, the pancakes will have the sizes of $7, 6, 2, 12, 14$ from top to bottom.

The ugliness here is $|7-6| + |6-2| + |2-12| + |12-14| = 1 + 4 + 10 + 2 = 17$. This is the minimum value possible; there is no way to achieve less ugliness.

```input2
3
111 119 999
```

```output2
888
```

In this sample, not doing the operation minimizes the ugliness.

In that case, the pancakes will have the sizes of $111, 119, 999$ from top to bottom, for the ugliness of $|111-119| + |119-999| = 8 + 880 = 888$.

```input3
6
12 15 3 4 15 7
```

```output3
19
```

If we do the operation choosing $l = 3$ and $r = 5$, the pancakes will have the sizes of $12, 15, 15, 4, 3, 7$ from top to bottom.

The ugliness here is $|12-15| + |15-15| + |15-4| + |4-3| + |3-7| = 3 + 0 + 11 + 1 + 4 = 19$, which is the minimum value possible.

```input4
7
100 800 500 400 900 300 700
```

```output4
1800
```

If we do the operation choosing $l = 2$ and $r = 4$, the pancakes will have the sizes of $100, 400, 500, 800, 900, 300, 700$ from top to bottom, for the ugliness of $1800$.

```input5
10
535907999 716568837 128214817 851750025 584243029 933841386 159109756 502477913 784673597 603329725
```

```output5
2576376600
```