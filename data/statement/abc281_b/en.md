Score : $200$ points

## Problem Statement

You are given a string $S$ consisting of uppercase English letters and digits. Determine whether $S$ satisfies the following condition.

- $S$ is a concatenation of the following characters and string in the order listed.-   - An uppercase English letter
-   - A string of length $6$ that is a decimal representation of an integer between $100000$ and $999999$, inclusive
-   - An uppercase English letter

## Constraints

- $S$ consists of uppercase English letters and digits.
- The length of $S$ is between $1$ and $10$, inclusive.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

If $S$ satisfies the condition in the problem statement, print `Yes`; otherwise, print `No`.

```input1
Q142857Z
```

```output1
Yes
```

$S$ is a concatenation of `Q`, `142857`, and `Z` in this order.<br>
`Q` and `Z` are uppercase English letters, and `142857` is a string of length $6$ that is a decimal representation of an integer between $100000$ and $999999$, so $S$ satisfies the condition.

```input2
AB912278C
```

```output2
No
```

`AB` is not an uppercase English letter, so $S$ does not satisfy the condition.

```input3
X900000
```

```output3
No
```

The last character of $S$ is not an uppercase English letter, so $S$ does not satisfy the condition.

```input4
K012345K
```

```output4
No
```

`012345` is not a string of length $6$ that is a decimal representation of an integer between $100000$ and $999999$, so $S$ does not satisfy the condition.