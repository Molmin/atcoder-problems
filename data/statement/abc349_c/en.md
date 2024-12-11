Score: $300$ points

## Problem Statement

A string $T$ of length $3$ consisting of uppercase English letters is an **airport code** for a string $S$ of lowercase English letters if and only if $T$ can be derived from $S$ by one of the following methods:

- Take a subsequence of length $3$ from $S$ (not necessarily contiguous) and convert it to uppercase letters to form $T$.
- Take a subsequence of length $2$ from $S$ (not necessarily contiguous), convert it to uppercase letters, and append `X` to the end to form $T$.

Given strings $S$ and $T$, determine if $T$ is an airport code for $S$.

## Constraints

- $S$ is a string of lowercase English letters with a length between $3$ and $10^5$, inclusive.
- $T$ is a string of uppercase English letters with a length of $3$.

## Input

The input is given from Standard Input in the following format:

> $S$
> 
> $T$

## Output

Print `Yes` if $T$ is an airport code for $S$, and `No` otherwise.

```input1
narita
NRT
```

```output1
Yes
```

The subsequence `nrt` of `narita`, when converted to uppercase, forms the string `NRT`, which is an airport code for `narita`.

```input2
losangeles
LAX
```

```output2
Yes
```

The subsequence `la` of `losangeles`, when converted to uppercase and appended with `X`, forms the string `LAX`, which is an airport code for `losangeles`.

```input3
snuke
RNG
```

```output3
No
```