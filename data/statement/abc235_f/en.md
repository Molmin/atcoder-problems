Score : $500$ points

## Problem Statement

Given are $M$ digits $C_i$.

Find the sum, modulo $998244353$, of all integers between $1$ and $N$ (inclusive) that contain all of $C_1, \ldots, C_M$ when written in base $10$ without unnecessary leading zeros. 

## Constraints

- $1 \leq N &lt; 10^{10^4}$
- $1 \leq M \leq 10$
- $0 \leq C_1 &lt; \ldots &lt; C_M \leq 9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $M$
> 
> $C_1$ $\ldots$ $C_M$

## Output

Print the answer.

```input1
104
2
0 1
```

```output1
520
```

Between $1$ and $104$, there are six integers that contain both `0` and `1` when written in base $10$: $10,100,101,102,103,104$.<br>
The sum of them is $520$.

```input2
999
4
1 2 3 4
```

```output2
0
```

Between $1$ and $999$, no integer contains all of `1`, `2`, `3`, `4`.

```input3
1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
5
0 2 4 6 8
```

```output3
397365274
```

Be sure to find the sum modulo $998244353$.