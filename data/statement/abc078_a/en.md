Score : $100$ points

## Problem Statement

In programming, hexadecimal notation is often used.

In hexadecimal notation, besides the ten digits $0, 1, ..., 9$, the six letters `A`, `B`, `C`, `D`, `E` and `F` are used to represent the values $10, 11, 12, 13, 14$ and $15$, respectively.

In this problem, you are given two letters $X$ and $Y$. Each $X$ and $Y$ is `A`, `B`, `C`, `D`, `E` or `F`.

When $X$ and $Y$ are seen as hexadecimal numbers, which is larger?

## Constraints

- Each $X$ and $Y$ is `A`, `B`, `C`, `D`, `E` or `F`.

## Input

Input is given from Standard Input in the following format:

> $X$ $Y$

## Output

If $X$ is smaller, print `&amp;lt;`; if $Y$ is smaller, print `&amp;gt;`; if they are equal, print `=`.

```input1
A B
```

```output1
<
```

$10 &lt; 11$.

```input2
E C
```

```output2
>
```

$14 &gt; 12$.

```input3
F F
```

```output3
=
```

$15 = 15$.