Score : $200$ points

## Problem Statement

The postal code in Atcoder Kingdom is $A+B+1$ characters long, its $(A+1)$-th character is a hyphen `-`, and the other characters are digits from `0` through `9`.

You are given a string $S$. Determine whether it follows the postal code format in Atcoder Kingdom.

## Constraints

- $1 \leq A,B \leq 5$
- $|S|=A+B+1$
- $S$ consists of `-` and digits from `0` through `9`.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$
> 
> $S$

## Output

Print `Yes` if $S$ follows the postal code format in AtCoder Kingdom; print `No` otherwise.

```input1
3 4
269-6650
```

```output1
Yes
```

The $(A+1)$-th character of $S$ is `-`, and the other characters are digits from `0` through `9`, so it follows the format.

```input2
1 1
---
```

```output2
No
```

$S$ contains unnecessary `-`s other than the $(A+1)$-th character, so it does not follow the format.

```input3
1 2
7444
```

```output3
No
```