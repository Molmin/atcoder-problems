Score : $300$ points

## Problem Statement

The definition of an 11/22 string in this problem is the same as in Problems A and E.

A string $T$ is called an **11/22 string** when it satisfies all of the following conditions:

- $|T|$ is odd. Here, $|T|$ denotes the length of $T$.
- The $1$-st through $(\frac{|T|+1}{2} - 1)$-th characters are all `1`.
- The $(\frac{|T|+1}{2})$-th character is `/`.
- The $(\frac{|T|+1}{2} + 1)$-th through $|T|$-th characters are all `2`.

For example, `11/22`, `111/222`, and `/` are 11/22 strings, but `1122`, `1/22`, `11/2222`, `22/11`, and `//2/2/211` are not.

You are given a string $S$ of length $N$ consisting of `1`, `2`, and `/`, where $S$ contains at least one `/`.<br>
Find the maximum length of a (contiguous) substring of $S$ that is an 11/22 string.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $S$ is a string of length $N$ consisting of `1`, `2`, and `/`.
- $S$ contains at least one `/`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the maximum length of a (contiguous) substring of $S$ that is an 11/22 string.

```input1
8
211/2212
```

```output1
5
```

The substring from the $2$-nd to $6$-th character of $S$ is `11/22`, which is an 11/22 string. Among all substrings of $S$ that are 11/22 strings, this is the longest. Therefore, the answer is $5$.

```input2
5
22/11
```

```output2
1
```

```input3
22
/1211/2///2111/2222/11
```

```output3
7
```