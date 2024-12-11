Score : $400$ points

## Problem Statement

Snuke has $N$ strings. The $i$-th string is $s_i$.

Let us concatenate these strings into one string after arranging them in some order.
Find the maximum possible number of occurrences of `AB` in the resulting string.

## Constraints

- $1 \leq N \leq 10^{4}$
- $2 \leq |s_i| \leq 10$
- $s_i$ consists of uppercase English letters.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $s_1$
> 
> $\vdots$
> 
> $s_N$

## Output

Print the answer.

```input1
3
ABCA
XBAZ
BAD
```

```output1
2
```

For example, if we concatenate `ABCA`, `BAD` and `XBAZ` in this order, the resulting string `ABCABADXBAZ` has two occurrences of `AB`.

```input2
9
BEWPVCRWH
ZZNQYIJX
BAVREA
PA
HJMYITEOX
BCJHMRMNK
BP
QVFABZ
PRGKSPUNA
```

```output2
4
```

```input3
7
RABYBBE
JOZ
BMHQUVA
BPA
ISU
MCMABAOBHZ
SZMEHMA
```

```output3
4
```