Score : $600$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of the characters `A`, `B`, and `C`.

Consider performing the following operation between $0$ and $K$ times, inclusive:

- Freely choose two characters in $S$ and swap them.

Find the number of strings that $S$ can be after the operations, modulo $998244353$.

## Constraints

- $1 \leq N \leq 250000$
- $1 \leq K \leq 100$
- $S$ is a string of length $N$ consisting of the characters `A`, `B`, and `C`.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $S$

## Output

Print the answer.

```input1
3 1
ABC
```

```output1
4
```

The following four strings can be obtained:

- $S=$`ABC`: No operation is needed.
- $S=$`BAC`: Swap the $1$-st and $2$-nd characters.
- $S=$`CBA`: Swap the $1$-st and $3$-rd characters.
- $S=$`ACB`: Swap the $2$-nd and $3$-rd characters.

```input2
3 2
ABC
```

```output2
6
```

```input3
4 5
AAAA
```

```output3
1
```

```input4
30 10
CACCABAABBABABBCBBCAAACAAACCCA
```

```output4
42981885
```