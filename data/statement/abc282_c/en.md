Score : $300$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of lowercase English letters, `,`, and `"`. It is guaranteed that $S$ contains an even number of `"`.

Let $2K$ be the number of `"` in $S$. For each $i=1,2,\ldots,K$, the characters from the $(2i-1)$-th `"` through the $(2i)$-th `"` are said to be **enclosed**.

Your task is to replace each `,` in $S$ that is **not** an enclosed character with `.` and print the resulting string.

## Constraints

- $N$ is an integer between $1$ and $2\times 10^5$, inclusive.
- $S$ is a string of length $N$ consisting of lowercase English letters, `,`, and `"`.
- $S$ contains an even number of `"`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the answer.

```input1
8
"a,b"c,d
```

```output1
"a,b"c.d
```

In $S$, `"a,b"` are enclosed characters, and `c,d` are not.

The `,` in $S$ that is not an enclosed character is the seventh character from the left in $S$, so replace that character with `.` to get the answer.

```input2
5
,,,,,
```

```output2
.....
```

```input3
20
a,"t,"c,"o,"d,"e,"r,
```

```output3
a."t,"c."o,"d."e,"r.
```