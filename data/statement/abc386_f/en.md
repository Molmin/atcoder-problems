Score : $525$ points

## Problem Statement

**This problem fully contains Problem C (Operate 1), with $K \le 20$.**<br>
**You can solve Problem C by submitting a correct solution to this problem for Problem C.**

Determine whether it is possible to perform the following operation on string $S$ between $0$ and $K$ times, inclusive, to make it identical to string $T$.

- Choose one of the following three operations and execute it.-   - Insert any one character at any position in $S$ (possibly the beginning or end).
-   - Delete one character from $S$.
-   - Choose one character in $S$ and replace it with another character.

## Constraints

- Each of $S$ and $T$ is a string of length between $1$ and $500000$, inclusive, consisting of lowercase English letters.
- $K$ is an integer satisfying $\color{red}{1 \le K \le 20}$.

## Input

The input is given from Standard Input in the following format:

> $K$
> 
> $S$
> 
> $T$

## Output

If $S$ can be made identical to $T$ with at most $K$ operations, print `Yes`; otherwise, print `No`.

```input1
3
abc
awtf
```

```output1
Yes
```

For example, here is a way to convert `abc` to `awtf` with three operations:

- Replace the second character `b` with `w`. After the operation, the string becomes `awc`.
- Replace the third character `c` with `f`. After the operation, the string becomes `awf`.
- Insert `t` between the second and third characters. After the operation, the string becomes `awtf`.

```input2
2
abc
awtf
```

```output2
No
```

`abc` cannot be converted to `awtf` with two or fewer operations.

```input3
17
twothousandtwentyfour
happynewyear
```

```output3
Yes
```