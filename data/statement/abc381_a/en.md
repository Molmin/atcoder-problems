Score : $150$ points

## Problem Statement

The definition of an 11/22 string in this problem is the same as in Problems C and E.

A string $T$ is called an **11/22 string** when it satisfies all of the following conditions:

- $|T|$ is odd. Here, $|T|$ denotes the length of $T$.
- The $1$-st through $(\frac{|T|+1}{2} - 1)$-th characters are all `1`.
- The $(\frac{|T|+1}{2})$-th character is `/`.
- The $(\frac{|T|+1}{2} + 1)$-th through $|T|$-th characters are all `2`.

For example, `11/22`, `111/222`, and `/` are 11/22 strings, but `1122`, `1/22`, `11/2222`, `22/11`, and `//2/2/211` are not.

Given a string $S$ of length $N$ consisting of `1`, `2`, and `/`, determine whether $S$ is an 11/22 string.

## Constraints

- $1 \leq N \leq 100$
- $S$ is a string of length $N$ consisting of `1`, `2`, and `/`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

If $S$ is an 11/22 string, print `Yes`; otherwise, print `No`.

```input1
5
11/22
```

```output1
Yes
```

`11/22` satisfies the conditions for an 11/22 string in the problem statement.

```input2
1
/
```

```output2
Yes
```

`/` satisfies the conditions for an 11/22 string.

```input3
4
1/22
```

```output3
No
```

`1/22` does not satisfy the conditions for an 11/22 string.

```input4
5
22/11
```

```output4
No
```