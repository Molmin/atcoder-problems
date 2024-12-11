Score : $200$ points

## Problem Statement

Given $N$ integers $A_1, ..., A_N$, compute $A_1 \times ... \times A_N$.

However, if the result exceeds $10^{18}$, print `-1` instead.

## Constraints

- $2 \leq N \leq 10^5$
- $0 \leq A_i \leq 10^{18}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $...$ $A_N$

## Output

Print the value $A_1 \times ... \times A_N$ as an integer, or `-1` if the value exceeds $10^{18}$.

```input1
2
1000000000 1000000000
```

```output1
1000000000000000000
```

We have $1000000000 \times 1000000000 = 1000000000000000000$.

```input2
3
101 9901 999999000001
```

```output2
-1
```

We have $101 \times 9901 \times 999999000001 = 1000000000000000001$, which exceeds $10^{18}$, so we should print `-1` instead.

```input3
31
4 1 5 9 2 6 5 3 5 8 9 7 9 3 2 3 8 4 6 2 6 4 3 3 8 3 2 7 9 5 0
```

```output3
0
```