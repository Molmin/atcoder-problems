Score : $600$ points

## Problem Statement

Find the number, modulo $998244353$, of permutations $P=(P_1,P_2,\cdots,P_N)$ of $(1,2,\cdots,N)$ that satisfy all of the following $M$ conditions.

- The $i$-th condition: The maximum among $P_{L_i},P_{L_i+1},\cdots,P_{R_i}$ is **not** $P_{X_i}$.
Here, $L_i$, $R_i$, and $X_i$ are integers given in the input.

## Constraints

- $1 \leq N \leq 500$
- $1 \leq M \leq 10^5$
- $1 \leq L_i \leq X_i \leq R_i \leq N$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $L_1$ $R_1$ $X_1$
> 
> $L_2$ $R_2$ $X_2$
> 
> $\vdots$
> 
> $L_M$ $R_M$ $X_M$

## Output

Print the answer.

```input1
3 2
1 3 2
1 2 1
```

```output1
1
```

Only one permutation, $P=(1,2,3)$, satisfies the conditions.

```input2
5 1
1 1 1
```

```output2
0
```

```input3
10 5
3 8 4
3 10 4
1 7 2
1 8 3
3 8 7
```

```output3
1598400
```

```input4
15 17
2 11 9
2 15 13
1 14 2
5 11 5
3 15 11
1 6 2
4 15 12
3 11 6
9 13 10
2 14 6
10 15 11
1 8 6
6 14 8
2 10 2
6 12 6
3 14 12
2 6 2
```

```output4
921467228
```