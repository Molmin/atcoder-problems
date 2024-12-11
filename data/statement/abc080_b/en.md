Score : $200$ points

## Problem Statement

An integer $X$ is called a Harshad number if $X$ is divisible by $f(X)$, where $f(X)$ is the sum of the digits in $X$ when written in base $10$.

Given an integer $N$, determine whether it is a Harshad number.

## Constraints

- $1?N?10^8$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print `Yes` if $N$ is a Harshad number; print `No` otherwise.

```input1
12
```

```output1
Yes
```

$f(12)=1+2=3$. Since $12$ is divisible by $3$, $12$ is a Harshad number.

```input2
57
```

```output2
No
```

$f(57)=5+7=12$. Since $57$ is not divisible by $12$, $12$ is not a Harshad number.

```input3
148
```

```output3
No
```