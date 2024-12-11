Score: $100$ points

## Problem Statement

You are given a non-empty string $S$ consisting of uppercase and lowercase English letters. Determine whether the following condition is satisfied:

- The first character of $S$ is uppercase, and all other characters are lowercase.

## Constraints

- $1 \leq |S| \leq 100$ ($|S|$ is the length of the string $S$.)
- Each character of $S$ is an uppercase or lowercase English letter.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

If the condition is satisfied, print `Yes`; otherwise, print `No`.

```input1
Capitalized
```

```output1
Yes
```

The first character `C` of `Capitalized` is uppercase, and all other characters `apitalized` are lowercase, so you should print `Yes`.

```input2
AtCoder
```

```output2
No
```

`AtCoder` contains an uppercase letter `C` that is not at the beginning, so you should print `No`.

```input3
yes
```

```output3
No
```

The first character `y` of `yes` is not uppercase, so you should print `No`.

```input4
A
```

```output4
Yes
```