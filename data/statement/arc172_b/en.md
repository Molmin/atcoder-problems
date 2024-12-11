Score: $500$ points

## Problem Statement

The AtCoder language has $L$ different characters.
How many $N$-character strings $s$ consisting of characters in the AtCoder language satisfy the following condition?
Find the count modulo $998244353$.

- All $K$-character subsequences of the string $s$ are different. More precisely, there are $_N\mathrm{C}_K$ ways to obtain a $K$-character string by extracting $K$ characters from the string $s$ and concatenating them without changing the order, and all of these ways must generate different strings.

What is $_N\mathrm{C}_K$?$_N\mathrm{C}_K$ refers to the total number of ways to choose $K$ from $N$ items. More precisely, $_N\mathrm{C}_K$ is the value of $N!$ divided by $K! \times (N-K)!$.

<br>

## Constraints

- $1 \leq K &lt; N \leq 500000$
- $1 \leq L \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$ $L$

## Output

Print the count modulo $998244353$.

```input1
4 3 2
```

```output1
2
```

If `a` and `b` represent the first and second characters in the language, the condition is satisfied by two strings: `abab` and `baba`.

```input2
100 80 26
```

```output2
496798269
```

Approximately $10^{86}$ strings satisfy the condition, but here we print the count modulo $998244353$, which is $496798269$.

```input3
100 1 26
```

```output3
0
```

```input4
500000 172172 503746693
```

```output4
869120
```