Score : $100$ points

## Problem Statement

You are given a string $S$ consisting of lowercase English letters and digits.<br>
$S$ is guaranteed to end with `2023`.<br>
Change the last character of $S$ to `4` and print the modified string.

## Constraints

- $S$ is a string of length between $4$ and $100$, inclusive, consisting of lowercase English letters and digits.
- $S$ ends with `2023`.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
hello2023
```

```output1
hello2024
```

Changing the last character of `hello2023` to `4` yields `hello2024`.

```input2
worldtourfinals2023
```

```output2
worldtourfinals2024
```

```input3
2023
```

```output3
2024
```

$S$ is guaranteed to end with `2023`, possibly being `2023` itself.

```input4
20232023
```

```output4
20232024
```