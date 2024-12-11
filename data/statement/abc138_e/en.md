Score : $500$ points

## Problem Statement

Given are two strings $s$ and $t$ consisting of lowercase English letters. Determine if there exists an integer $i$ satisfying the following condition, and find the minimum such $i$ if it exists.

- Let $s'$ be the concatenation of $10^{100}$ copies of $s$. $t$ is a subsequence of the string ${s'}_1{s'}_2\ldots{s'}_i$ (the first $i$ characters in $s'$).

## Notes

- A subsequence of a string $a$ is a string obtained by deleting zero or more characters from $a$ and concatenating the remaining characters without changing the relative order. For example, the subsequences of `contest` include `net`, `c`, and `contest`.

## Constraints

- $1 \leq |s| \leq 10^5$
- $1 \leq |t| \leq 10^5$
- $s$ and $t$ consists of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $s$
> 
> $t$

## Output

If there exists an integer $i$ satisfying the following condition, print the minimum such $i$; otherwise, print `-1`.

```input1
contest
son
```

```output1
10
```

$t =$ `son` is a subsequence of the string `contestcon` (the first $10$ characters in $s' =$ `contestcontestcontest...`), so $i = 10$ satisfies the condition.

On the other hand, $t$ is not a subsequence of the string `contestco` (the first $9$ characters in $s'$), so $i = 9$ does not satisfy the condition.

Similarly, any integer less than $9$ does not satisfy the condition, either. Thus, the minimum integer $i$ satisfying the condition is $10$.

```input2
contest
programming
```

```output2
-1
```

$t =$ `programming` is not a substring of $s' =$ `contestcontestcontest...`. Thus, there is no integer $i$ satisfying the condition.

```input3
contest
sentence
```

```output3
33
```

Note that the answer may not fit into a $32$-bit integer type, though we cannot put such a case here.