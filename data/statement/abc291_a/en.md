Score : $100$ points

## Problem Statement

You are given a string $S$ consisting of uppercase and lowercase English letters.<br>
Here, exactly one character of $S$ is uppercase, and the others are all lowercase.<br>
Find the integer $x$ such that the $x$-th character of $S$ is uppercase.<br>
Here, the initial character of $S$ is considered the $1$-st one.

## Constraints

- $S$ is a string of length between $2$ and $100$, inclusive, consisting of uppercase and lowercase English letters.
- $S$ has exactly one uppercase letter.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the integer $x$ such that the $x$-th character of $S$ is uppercase.  

```input1
aBc
```

```output1
2
```

The $1$-st character of `aBc` is `a`, the $2$-nd is `B`, and the $3$-rd is `c`;
the $2$-nd character is uppercase.<br>
Thus, $2$ should be printed.

```input2
xxxxxxXxxx
```

```output2
7
```

An uppercase letter `X` occurs as the $7$-th character of $S=$`xxxxxxXxxx`, so $7$ should be printed.

```input3
Zz
```

```output3
1
```