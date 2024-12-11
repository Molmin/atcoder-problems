Score : $200$ points

## Problem Statement

You are given a string $S$ consisting of lowercase and uppercase English letters. The length of $S$ is odd.<br>
If the number of uppercase letters in $S$ is greater than the number of lowercase letters, convert all lowercase letters in $S$ to uppercase.<br>
Otherwise, convert all uppercase letters in $S$ to lowercase.

## Constraints

- $S$ is a string consisting of lowercase and uppercase English letters.
- The length of $S$ is an odd number between $1$ and $99$, inclusive.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the string $S$ after converting the letters according to the problem statement.

```input1
AtCoder
```

```output1
atcoder
```

The string `AtCoder` contains five lowercase letters and two uppercase letters. Thus, convert all uppercase letters in `AtCoder` to lowercase, which results in `atcoder`.

```input2
SunTORY
```

```output2
SUNTORY
```

The string `SunTORY` contains two lowercase letters and five uppercase letters. Thus, convert all lowercase letters in `SunTORY` to uppercase, which results in `SUNTORY`.

```input3
a
```

```output3
a
```