Score : $700$ points

## Problem Statement

There are $N$ stones arranged in a row. The $i$-th stone from the left is painted in the color $C_i$.

Snuke will perform the following operation zero or more times:

- Choose two stones painted in the same color. Repaint all the stones between them, with the color of the chosen stones.

Find the number of possible final sequences of colors of the stones, modulo $10^9+7$.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $1 \leq C_i \leq 2\times 10^5(1\leq i\leq N)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $C_1$
> 
> $:$
> 
> $C_N$

## Output

Print the number of possible final sequences of colors of the stones, modulo $10^9+7$.

```input1
5
1
2
1
2
2
```

```output1
3
```

We can make three sequences of colors of stones, as follows:

- $(1,2,1,2,2)$, by doing nothing.
- $(1,1,1,2,2)$, by choosing the first and third stones to perform the operation.
- $(1,2,2,2,2)$, by choosing the second and fourth stones to perform the operation.

```input2
6
4
2
5
4
2
4
```

```output2
5
```

```input3
7
1
3
1
2
3
3
2
```

```output3
5
```