Score : $500$ points

## Problem Statement

You have a string $S$ of length $N$.
Initially, all characters in $S$ are `1`s.

You will perform queries $Q$ times.
In the $i$-th query, you are given two integers $L_i, R_i$ and a character $D_i$ (which is a digit).
Then, you must replace all characters from the $L_i$-th to the $R_i$-th (inclusive) with $D_i$.

After each query, read the string $S$ as a decimal integer, and print its value modulo $998,244,353$.

## Constraints

- $1 \leq N, Q \leq 200,000$
- $1 \leq L_i \leq R_i \leq N$
- $1 \leq D_i \leq 9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $L_1$ $R_1$ $D_1$
> 
> $:$
> 
> $L_Q$ $R_Q$ $D_Q$

## Output

Print $Q$ lines.
In the $i$-th line print the value of $S$ after the $i$-th query, modulo $998,244,353$.

```input1
8 5
3 6 2
1 4 7
3 8 3
2 2 2
4 5 1
```

```output1
11222211
77772211
77333333
72333333
72311333
```

```input2
200000 1
123 456 7
```

```output2
641437905
```

Don't forget to take the modulo.