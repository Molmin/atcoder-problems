Score : $600$ points

## Problem Statement

Find the number, modulo $998244353$, of square matrices of size $N$ whose elements are non-negative integers, that satisfy both of the following two conditions:

- for all $i = 1, 2, \ldots, N$, the sum of the elements in the $i$-th row is $R_i$;
- for all $i = 1, 2, \ldots, N$, the sum of the elements in the $i$-th column is $C_i$.

Note that $R_i$ and $C_i$ given in the input are integers between $0$ and $2$ (see Constraints).

## Constraints

- $1 \leq N \leq 5000$
- $0 \leq R_i \leq 2$
- $0 \leq C_i \leq 2$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $R_1$ $R_2$ $\ldots$ $R_N$
> 
> $C_1$ $C_2$ $\ldots$ $C_N$

## Output

Print the answer.

```input1
3
1 1 1
0 1 2
```

```output1
3
```

The following $3$ matrices satisfy the conditions:

```output1
0 1 0
0 0 1
0 0 1
```
```output1
0 0 1
0 1 0
0 0 1
```
```output1
0 0 1
0 0 1
0 1 0
```

```input2
3
1 1 1
2 2 2
```

```output2
0
```

```input3
18
2 0 1 2 0 1 1 2 1 1 2 0 1 2 2 1 0 0
1 1 0 1 1 1 1 1 1 1 1 1 2 1 1 0 2 2
```

```output3
968235177
```

Be sure to print the count modulo $998244353$.