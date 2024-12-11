Score : $1100$ points

## Problem Statement

We will call a string that can be obtained by concatenating two equal strings an *even* string.
For example, `xyzxyz` and `aaaaaa` are even, while `ababab` and `xyzxy` are not.

For a non-empty string $S$, we will define $f(S)$ as the shortest even string that can be obtained by appending one or more characters to the end of $S$.
For example, $f($`abaaba`$)=$`abaababaab`.
It can be shown that $f(S)$ is uniquely determined for a non-empty string $S$.

You are given an even string $S$ consisting of lowercase English letters.
For each letter in the lowercase English alphabet, find the number of its occurrences from the $l$-th character through the $r$-th character of $f^{10^{100}} (S)$.

Here, $f^{10^{100}} (S)$ is the string $f(f(f( ... f(S) ... )))$ obtained by applying $f$ to $S$ $10^{100}$ times.

## Constraints

- $2 \leq |S| \leq 2\times 10^5$
- $1 \leq l \leq r \leq 10^{18}$
- $S$ is an even string consisting of lowercase English letters.
- $l$ and $r$ are integers.

## Input

Input is given from Standard Input in the following format:

> $S$
> 
> $l$ $r$

## Output

Print $26$ integers in a line with spaces in between.
The $i$-th integer should be the number of the occurrences of the $i$-th letter in the lowercase English alphabet from the $l$-th character through the $r$-th character of $f^{10^{100}} (S)$.

```input1
abaaba
6 10
```

```output1
3 2 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
```

Since $f($`abaaba`$)=$`abaababaab`, the first ten characters in $f^{10^{100}}(S)$ is also `abaababaab`. Thus, the sixth through the tenth characters are `abaab`. In this string, `a` appears three times, `b` appears twice and no other letters appear, and thus the output should be $3$ and $2$ followed by twenty-four $0$s.

```input2
xx
1 1000000000000000000
```

```output2
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1000000000000000000 0 0
```

```input3
vgxgpuamkvgxgvgxgpuamkvgxg
1 1000000000000000000
```

```output3
87167725689669676 0 0 0 0 0 282080685775825810 0 0 0 87167725689669676 0 87167725689669676 0 0 87167725689669676 0 0 0 0 87167725689669676 141040342887912905 0 141040342887912905 0 0
```