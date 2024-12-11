Score : $500$ points

## Problem Statement

Snuke has a string $s$.
From this string, Anuke, Bnuke, and Cnuke obtained strings $a$, $b$, and $c$, respectively, as follows:

- Choose a non-empty (contiguous) substring of $s$ (possibly $s$ itself). Then, replace some characters (possibly all or none) in it with `?`s.

For example, if $s$ is `mississippi`, we can choose the substring `ssissip` and replace its $1$-st and $3$-rd characters with `?` to obtain `?s?ssip`.

You are given the strings $a$, $b$, and $c$.
Find the minimum possible length of $s$.

## Constraints

- $1 \leq |a|, |b|, |c| \leq 2000$
- $a$, $b$, and $c$ consists of lowercase English letters and `?`s.

## Input

Input is given from Standard Input in the following format:

> $a$
> 
> $b$
> 
> $c$

## Output

Print the minimum possible length of $s$.

```input1
a?c
der
cod
```

```output1
7
```

For example, $s$ could be `atcoder`.

```input2
atcoder
atcoder
???????
```

```output2
7
```

$a$, $b$, and $c$ may not be distinct.