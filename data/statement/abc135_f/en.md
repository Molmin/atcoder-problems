Score : $600$ points

## Problem Statement

Given are two strings $s$ and $t$ consisting of lowercase English letters. Determine if the number of non-negative integers $i$ satisfying the following condition is finite, and find the maximum value of such $i$ if the number is finite.

- There exists a non-negative integer $j$ such that the concatenation of $i$ copies of $t$ is a substring of the concatenation of $j$ copies of $s$.

## Notes

- <p>A string $a$ is a substring of another string $b$ if and only if there exists an integer $x$ $(0 \leq x \leq |b| - |a|)$ such that, for any $y$ $(1 \leq y \leq |a|)$, $a_y = b_{x+y}$ holds.</p>
- <p>We assume that the concatenation of zero copies of any string is the empty string. From the definition above, the empty string is a substring of any string. Thus, for any two strings $s$ and $t$, $i = 0$ satisfies the condition in the problem statement.</p>

## Constraints

- $1 \leq |s| \leq 5 \times 10^5$
- $1 \leq |t| \leq 5 \times 10^5$
- $s$ and $t$ consist of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $s$
> 
> $t$

## Output

If the number of non-negative integers $i$ satisfying the following condition is finite, print the maximum value of such $i$; if the number is infinite, print `-1`.

```input1
abcabab
ab
```

```output1
3
```

The concatenation of three copies of $t$, `ababab`, is a substring of the concatenation of two copies of $s$, `abcabababcabab`, so $i = 3$ satisfies the condition.

On the other hand, the concatenation of four copies of $t$, `abababab`, is not a substring of the concatenation of any number of copies of $s$, so $i = 4$ does not satisfy the condition.

Similarly, any integer greater than $4$ does not satisfy the condition, either. Thus, the number of non-negative integers $i$ satisfying the condition is finite, and the maximum value of such $i$ is $3$.

```input2
aa
aaaaaaa
```

```output2
-1
```

For any non-negative integer $i$, the concatenation of $i$ copies of $t$ is a substring of the concatenation of $4i$ copies of $s$. Thus, there are infinitely many non-negative integers $i$ that satisfy the condition.

```input3
aba
baaab
```

```output3
0
```

As stated in Notes, $i = 0$ always satisfies the condition.