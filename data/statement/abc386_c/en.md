Score : $350$ points

## Problem Statement

**This problem is a sub-problem of Problem F (Operate K), with $K=1$.**<br>
**You can solve this problem by submitting a correct solution for Problem F to this problem.**

Determine whether it is possible to perform the following operation on string $S$ between $0$ and $K$ times, inclusive, to make it identical to string $T$.

- Choose one of the following three operations and execute it.-   - Insert any one character at any position in $S$ (possibly the beginning or end).
-   - Delete one character from $S$.
-   - Choose one character in $S$ and replace it with another character.

## Constraints

- Each of $S$ and $T$ is a string of length between $1$ and $500000$, inclusive, consisting of lowercase English letters.
- $\color{red}{K=1}$

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
1
abc
agc
```

```output1
Yes
```

Replacing the second character `b` of `abc` with `g` converts `abc` to `agc` in one operation.

```input2
1
abc
awtf
```

```output2
No
```

`abc` cannot be converted to `awtf` in one operation.

```input3
1
abc
ac
```

```output3
Yes
```

Deleting the second character `b` of `abc` converts `abc` to `ac` in one operation.

```input4
1
back
black
```

```output4
Yes
```

Inserting `l` between the first and second characters of `back` converts `back` to `black` in one operation.

```input5
1
same
same
```

```output5
Yes
```

It is also possible that $S = T$ from the beginning.

```input6
1
leap
read
```

```output6
No
```