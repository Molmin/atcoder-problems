Score : $400$ points

## Problem Statement

A string $x$ consisting of lowercase English letters is said to be **good** if and only if the following condition is satisfied.

- Every (contiguous) substring of $x$ whose length is $2$ or greater satisfies the following:-   - no character occupies the majority of that substring.

For example, `acbca` is not good because `c` occupies the majority of the substring `cbc`.

You are given a string $S$ of length $N$ consisting of lowercase English letters and `?`.
You want to replace each `?` with a lowercase English letter of your choice to make $S$ a good string.
Find the number of ways to make $S$ a good string, modulo $998244353$.

## Constraints

- $2 \leq N \leq 5000$
- $S$ is a string of length $N$ consisting of lowercase English letters and `?`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the answer.

```input1
3
a?b
```

```output1
24
```

Every way other than `aab` and `abb` satisfies the condition.

```input2
3
a?a
```

```output2
0
```

```input3
20
ugsyakganihodnwmktgi
```

```output3
1
```

```input4
20
??a???h?m?y?ts???tl?
```

```output4
444225229
```