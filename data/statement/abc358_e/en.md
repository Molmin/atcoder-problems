Score : $475$ points

## Problem Statement

AtCoder Land sells tiles with English letters written on them. Takahashi is thinking of making a nameplate by arranging these tiles in a row.

Find the number, modulo $998244353$, of strings consisting of uppercase English letters with a length between $1$ and $K$, inclusive, that satisfy the following conditions:

- For every integer $i$ satisfying $1 \leq i \leq 26$, the following holds:-   - Let $a_i$ be the $i$-th uppercase English letter in lexicographical order. For example, $a_1 =$ `A`, $a_5 =$ `E`, $a_{26} =$ `Z`.
-   - The number of occurrences of $a_i$ in the string is between $0$ and $C_i$, inclusive.

## Constraints

- $1 \leq K \leq 1000$
- $0 \leq C_i \leq 1000$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $K$
> 
> $C_1$ $C_2$ $\ldots$ $C_{26}$

## Output

Print the answer.

```input1
2
2 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
```

```output1
10
```

The $10$ strings that satisfy the conditions are `A`, `B`, `C`, `AA`, `AB`, `AC`, `BA`, `BC`, `CA`, `CB`.

```input2
358
1 0 1 0 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
```

```output2
64
```

```input3
1000
1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000
```

```output3
270274035
```