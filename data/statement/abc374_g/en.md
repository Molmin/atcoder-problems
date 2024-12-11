Score : $600$ points

## Problem Statement

All KEYENCE product names consist of **two uppercase English letters**.<br>
They have already used $N$ product names, the $i$-th of which $(1\leq i\leq N)$ is $S_i$.<br>
Once a product name is used, it cannot be reused, so they decided to create an NG (Not Good) list to quickly identify previously used product names.

The NG list must satisfy the following conditions.

- It consists of one or more strings, each consisting of uppercase English letters.
- For each already used product name, there exists at least one string in the list that contains the name as a (contiguous) substring.
- None of the strings in the list contain any length-$2$ (contiguous) substring that is not an already used product name.

Find the minimum possible number of strings in the NG list.

## Constraints

- $1\leq N\leq 26^2$
- $N$ is an integer.
- Each $S_i$ is a string of length $2$ consisting of uppercase English letters.
- All $S_1,S_2,\ldots,S_N$ are distinct.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print the minimum possible number of strings in the NG list.

```input1
7
AB
BC
CA
CD
DE
DF
XX
```

```output1
3
```

One NG list satisfying the conditions is the one consisting of the following three strings:

- `CABCDE`
- `DF`
- `XX`

This has three strings, and there is no NG list satisfying the conditions with $2$ or fewer strings, so print $3$.

```input2
5
AC
BC
CD
DE
DF
```

```output2
2
```

One NG list satisfying the conditions is the one consisting of the following two strings:

- `ACDE`
- `BCDF`

Note that each used product name may appear in multiple strings in the NG list or multiple times within the same string.

```input3
6
AB
AC
CB
AD
DB
BA
```

```output3
1
```

For example, an NG list consisting only of `ABACBADB` satisfies the conditions.