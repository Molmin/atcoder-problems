Score : $200$ points

## Problem Statement

You are given strings $S$ and $T$ consisting of lowercase English letters. Determine whether $T$ is a (contiguous) substring of $S$.

A string $Y$ is said to be a (contiguous) substring of $X$ if and only if $Y$ can be obtained by performing the operation below on $X$ zero or more times.

- Do one of the following.-   - Delete the first character in $X$.
-   - Delete the last character in $X$.

For instance, `tag` is a (contiguous) substring of `voltage`, while `ace` is not a (contiguous) substring of `atcoder`.

## Constraints

- $S$ and $T$ consist of lowercase English letters.
- $1 \le |S|,|T| \le 100$ ($|X|$ denotes the length of a string $X$.)

## Input

The input is given from Standard Input in the following format:

> $S$
> 
> $T$

## Output

If $T$ is a (contiguous) substring of $S$, print `Yes`; otherwise, print `No`.

```input1
voltage
tag
```

```output1
Yes
```

`tag` is a (contiguous) substring of `voltage`.

```input2
atcoder
ace
```

```output2
No
```

`ace` is not a (contiguous) substring of `atcoder`.

```input3
gorilla
gorillagorillagorilla
```

```output3
No
```

```input4
toyotasystems
toyotasystems
```

```output4
Yes
```

It is possible that $S=T$.