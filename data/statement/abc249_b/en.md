Score : $200$ points

## Problem Statement

Let us call a string consisting of uppercase and lowercase English alphabets a **wonderful string** if all of the following conditions are satisfied:

- The string contains an uppercase English alphabet.
- The string contains a lowercase English alphabet.
- All characters in the string are pairwise distinct.

For example, `AtCoder` and `Aa` are wonderful strings, while `atcoder` and `Perfect` are not.

Given a string $S$, determine if $S$ is a wonderful string.

## Constraints

- $1 \le |S| \le 100$
- $S$ is a string consisting of uppercase and lowercase English alphabets.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

If $S$ is a wonderful string, print `Yes`; otherwise, print `No`.

```input1
AtCoder
```

```output1
Yes
```

`AtCoder` is a wonderful string because it contains an uppercase English alphabet, a lowercase English alphabet, and all characters in the string are pairwise distinct.

```input2
Aa
```

```output2
Yes
```

Note that `A` and `a` are different characters.  This string is a wonderful string.

```input3
atcoder
```

```output3
No
```

It is not a wonderful string because it does not contain an uppercase English alphabet.

```input4
Perfect
```

```output4
No
```

It is not a wonderful string because the $2$-nd and the $5$-th characters are the same.